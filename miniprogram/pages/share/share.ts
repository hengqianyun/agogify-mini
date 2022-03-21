import { autoLogin } from "../../libs/user/user"

// pages/share/share.ts
type shareType = 'video'

interface ShareParams {
  type: shareType
}

interface VideoParams extends ShareParams {
  sessionCode: string
  userName: string
  roomId: string
  salesId: string
  storeId: string
}

Page({
  

  /**
   * 页面的初始数据
   */
  data: {
    isVideo: false,
    videoParams: {
      sessionCode: '',
      userName: '',
      roomId: '',
      salesId: '',
      storeId: '',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    console.log(this.options)
    
    wx.showLoading({
      title: '加载中'
    })
    await autoLogin()
    wx.hideLoading()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  async onShow() {
    const {type} = this.options
    let key = ''
    switch (type) {
      case 'video':
        const {sessionCode, userName, roomId, salesId, storeId} = this.options
        this.setData({
          videoParams: {
            sessionCode: sessionCode!, 
            userName: userName!,
            roomId: roomId!,
            salesId: salesId!,
            storeId: storeId!
          }
        })
        key = 'isVideo'
      break
      default:
    }
    this.setData({
      [key]: true
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    this.setData({
      isVideo: false
    })
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

  }
})