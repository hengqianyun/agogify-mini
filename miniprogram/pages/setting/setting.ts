import store from "../../store/index"

// pages/setting/setting.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu: [
      {
        label: '修改手机号',
        icon: 'jiantou',
        size: 18,
        url: '../bindPhone/bindPhone?type=2'
      },
      {
        label: '实名认证',
        icon: 'jiantou',
        size: 18,
        url: '../ocr/ocr'
      },
      {
        label: '语言偏好设置',
        icon: 'jiantou',
        size: 18,
        url: '../languageSetting/languageSetting'
      },
      {
        label: '用户服务协议',
        icon: 'jiantou',
        size: 18,
        url: '../protocol/protocol'
      },
      {
        label: '隐私政策',
        icon: 'jiantou',
        size: 18,
        url: '../privacy/privacy'
      },
    ]
  },
  store: store,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

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

  handleMenuItemTap(event: WechatMiniprogram.TouchEvent) {
    const {url} = event.currentTarget.dataset as {url: string}
    wx.navigateTo({url})
  },
  async handleLogout() {
    await wx.clearStorageSync()
    let {user} = this.store.getState()
    user.userName = ''
    user.avatarUrl = ''
    this.store.setState({
      user,
    })
    wx.switchTab({ url: '../person/person' })
  }
})