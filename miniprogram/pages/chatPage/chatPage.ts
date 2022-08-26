import { IMAGEBASEURL, IMAGEPATHS } from "../../http/index"
import storeModule from "../../http/module/store"
import { getConversationList, getMessageList, sendC2CTextMessage, setMsgRead } from "../../libs/tim/tim"
import { $on, $remove } from "../../utils/event"

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
    storeName: '',
    conversationID: '',
    nextReqMessageID: '',
    messageList: [] as TIMMessage[],
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
    const { salesId, salesName, storeName, conversationID, salesAvatar } = this.options as { salesAvatar: string, salesId: string, salesName: string, storeName: string, conversationID: string }
    this.setData({
      to: salesId,
      salesName: salesName,
      storeName: '',
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
          messageList: [...this.data.messageList, data],
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
    wx.navigateTo({ url: '../reservePage/reservePage' })
  },

  async queryDetails() {
    const resData = await storeModule.queryStoreDetails('IRERI')
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
    this.setData({
      messageList,
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
      this.data.messageList.push(message)
      this.setData({
        messageList: this.data.messageList,
        scrollIntoView: 'id' + message.time,
        text: ''
      })
      // const {flow, isRead} = message
    } catch (err) {
      console.log(err)
    }
  }
})