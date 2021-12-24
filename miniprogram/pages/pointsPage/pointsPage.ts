// pages/pointsPage/pointsPage.ts

// type pointStatus = 0 | 1 | 2

Page({

  /**
   * 页面的初始数据
   */
  data: {
    point: '',
    details: [
      {id: '1', state: 0, num: 1000, date: '2021-11-01 13:18:00', surplus: '2000'},
      {id: '2', state: 1, num: 1000, date: '2021-11-01 13:18:00', surplus: '2000'},
      {id: '3', state: 2, num: 1000, date: '2021-11-01 13:18:00', surplus: '2000'},
      {id: '4', state: 2, num: 1000, date: '2021-11-01 13:18:00', surplus: '2000'},
      {id: '5', state: 3, num: 1000, date: '2021-11-01 13:18:00', surplus: '2000'},
      {id: '6', state: 0, num: 1000, date: '2021-11-01 13:18:00', surplus: '2000'},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    let point = 2000
    this.setData({
      point: point.toLocaleString()
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

  handleTap() {
    wx.navigateTo({
      url: '../pointEarnedPage/pointEarnedPage'
    })
  }

  
})