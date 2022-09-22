import { IMAGEBASEURL, IMAGEPATHS } from "../../http/index"
import storeModule from "../../http/module/store"
import videoModule from "../../http/module/video"
import { getConversationList, getMessageList, sendC2CTextMessage, setMsgRead } from "../../libs/tim/tim"
import { $on, $remove } from "../../utils/event"

interface PageTIMMessage extends TIMMessage {
  showMenu: boolean
  trans?: string
}

// pages/chatPage/chatPage.ts
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBarHeight: app.globalData.navHeight[0],
    menuBottom: app.globalData.navHeight[1],
    menuRight: app.globalData.navHeight[2],
    menuHeight: app.globalData.navHeight[3],
    text: '',
    to: '',
    salesName: '',
    storeCode: '',
    conversationID: '',
    nextReqMessageID: '',
    messageList: [] as PageTIMMessage[],
    targetMenuIndex: -1,
    scrollIntoView: '',
    btns: [
      {
        label: '专柜',
        icon: 'index',
        size: 32,
        class: 'line-btn',
        color: "#353535",
        event: 'handleJumpStore',
      },
      {
        label: '呼叫',
        icon: 'a-call2',
        size: 32,
        class: 'line-btn',
        color: "#353535",
        event: 'handleCall',
      }, {
        label: "预约",
        icon: "my_reserve",
        size: 32,
        class: 'fill-btn',
        color: "#353535",
        event: 'handleReserve',
      }],
    details: {} as storeDesign.storeItem
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    const { salesId, salesName, conversationID, storeCode } = this.options as { salesId: string, salesName: string, conversationID: string, storeCode: string }
    this.setData({
      to: salesId,
      salesName: salesName,
      storeCode,
      conversationID,
    })
    if (!!conversationID) {
      await setMsgRead(conversationID)
      await this.getMessageList()
    }
    await this.queryDetails()
    const that = this
    $on({
      name: "C2CmessageReceive",
      tg: this,
      success: (res: TIMMessageReceive) => {
        console.log(res)
        const data = res.data[0]
        that.setData({
          messageList: [...this.data.messageList, { ...data, showMenu: false }],
          scrollIntoView: 'id' + data.time,
          conversationID: data.conversationID,
        })
        setMsgRead(data.conversationID)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    $remove({
      name: "C2CmessageReceive",
      tg: this,
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  handleJumpStore() {
    wx.navigateTo({
      url: `/pages/storePage/storePage?storeId=${this.data.details.code}&storeName=${this.data.details.name}`,
    })
  },

  handleCall() {
    wx.navigateTo({
      url: `../roomWaiting/roomWaiting?storeId=IRERI&saleId=${this.data.to}&type=needService`
    })
  },

  handleReserve() {
    wx.setStorageSync('reserveStores', [this.data.details]);
    wx.navigateTo({ url: `../reservePage/reservePage?salesId=${this.data.to}` })
  },

  async queryDetails() {
    const resData = await storeModule.queryStoreDetails(this.data.storeCode)
    if (resData.data.logo)
      resData.data.logo.path = IMAGEBASEURL + IMAGEPATHS.storeNormal2x + resData.data?.logo?.path
    if (resData.data.images.length > 0) {
      resData.data.images[0].path = IMAGEBASEURL + IMAGEPATHS.storeMain1x + resData.data.images[0].path
    }
    const { country, city } = resData.data.billingData
    const address = `${country?.name} ${city?.name}`
    this.setData({
      // details: { ...resData.data, address }
      details: { ...resData.data }
    })
  },



  handleIconButtonTap(ev: WechatMiniprogram.TouchEvent) {
    console.log(ev)
    const { event } = ev.currentTarget.dataset as { event: keyof WechatMiniprogram.Page.Constructor }
      ; (this[event] as Function)()
  },

  async getMessageList() {
    const res = await getMessageList(this.data.conversationID, 20)
    const { messageList, nextReqMessageID } = res.data as { messageList: TIMMessage[], nextReqMessageID: string }
    const transRes = wx.getStorageSync('transStorage')
    let currentConversationTrans: {[key: string]: {text: string, date: string}} = {}
    if (!!transRes) {
      currentConversationTrans  = transRes[this.data.conversationID]
    }
    for (let key in currentConversationTrans) {
      // debugger
      const currentMillsec = Date.parse((new Date()).toUTCString())
      const targetMillsec = Date.parse(currentConversationTrans[key].date)
      if (currentMillsec -  targetMillsec> 604800000) {
        delete currentConversationTrans[key]
      }
    }
    this.setData({
      messageList: messageList.map(e => {
        return { ...e, showMenu: false, trans: currentConversationTrans[e.ID]?.text }
      }),
      nextReqMessageID,
      scrollIntoView: 'id' + messageList[messageList.length - 1].time.toString()
    })
  },

  handleBack() {
    wx.navigateBack()
  },

  handleInput(event: WechatMiniprogram.TouchEvent) {
    const { value } = event.detail as { value: string }
    this.setData({
      text: value
    })
  },

  chooseImage() {
    let self = this
    wx.chooseImage({
      sourceType: ['album'],
      count: 1,
      success: async function (res) {
        let tempPath = res.tempFilePaths[0];
        var base64 = await wx.getFileSystemManager().readFileSync(tempPath);
        // const message = await sendImageMessage(self.properties.groupId, 'GROUP', res, (percent: number) => {
        //   self.data.percent = percent
        // }, () => {
        //   self.data.percent = 0
        // })
        // message.ID = 's' + message.ID.split(self.data.groupId + '-')[1]
        // self.setData({
        //   chatHistory: [...self.data.chatHistory, message],
        //   inputValue: '',
        //   messageView: message.ID
        // })

      }
    })
  },

  async handleSend() {
    try {
      if (this.data.text === '') {
        return
      }
      const res = await sendC2CTextMessage(this.data.to, this.data.text);
      console.log(res)
      const { message } = res.data
      this.data.messageList.push({ ...message, showMenu: false })
      this.setData({
        messageList: this.data.messageList,
        scrollIntoView: 'id' + message.time,
        text: ''
      })
      // const {flow, isRead} = message
    } catch (err) {
      console.log(err)
    }
  },

  handleShowMenu({ currentTarget }: WechatMiniprogram.TouchEvent) {
    const { id } = currentTarget.dataset as { id: string }
    const index = this.data.messageList.findIndex(e => e.ID === id)
    this.data.messageList[index].showMenu = !this.data.messageList[index].showMenu
    this.setData({
      messageList: this.data.messageList,
      targetMenuIndex: index
    })
  },

  handleCancelMenu() {
    if (this.data.targetMenuIndex > -1) {
      this.data.messageList[this.data.targetMenuIndex].showMenu = false
      this.setData({
        messageList: this.data.messageList
      })
    }
  },

  async handleTrans() {
    const { targetMenuIndex, messageList } = this.data
    const item = messageList[targetMenuIndex]
    const { text } = item.payload
    try {
      wx.showLoading({
        title: 'loading'
      })
      const res = await videoModule.translateTextToZh(text)
      console.log(res)
      const {TargetText} = res.data
      item.trans = TargetText
      let currentConversationTrans : {[key: string]: {text: string, date: Date} } | undefined
      let transRes: {[key: string]: {[key: string]: {text: string, date: Date}}} | undefined = wx.getStorageSync('transStorage')
      if (!!transRes) {
        currentConversationTrans  = transRes[this.data.conversationID]
        if (!currentConversationTrans) {
          currentConversationTrans = {}
        } 
        currentConversationTrans[item.ID] = {text: TargetText, date: new Date()}
        wx.setStorageSync('transStorage', transRes)
      } else {
        transRes = {}
        const tempMap: {[key: string]: {text: string, date: Date}} = {}
        tempMap[item.ID] =  {text: TargetText, date: new Date()}
        transRes[this.data.conversationID] =  tempMap
        try {
          wx.setStorage({
            key: 'transStorage',
            data: transRes,
            success(r) {
              console.log(r)
            },
             fail(err) {
               console.log(err)
             }
          })
        }catch(err) {
          console.log(err)
        }
      }
    } catch(err) {

    } finally {
      wx.hideLoading()
    }
    item.showMenu = false
    this.setData({
      targetMenuIndex: -1,
      messageList,
    })
  }
})