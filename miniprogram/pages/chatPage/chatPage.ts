import { getConversationList, sendC2CTextMessage } from "../../libs/tim/tim"

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
    to: '/api/v2/public/sales/10',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    
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
      const res = await sendC2CTextMessage(this.data.to, this.data.text);
      console.log(res)
      const {message} = res.data
      // const {flow, isRead} = message
    } catch(err) {
      console.log(err)
    }
  }
})