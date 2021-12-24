// pages/pointEarnedPage/pointEarnedPage.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    surplus: '',
    src: '../../assets/image/pointEarn.png',
    cards: [
      {count: 500, coast: 50},
      {count: 1000, coast: 95},
      {count: 2000, coast: 180},
    ],
    activeKey: 0,
    coast: 50
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const surplus = 2000
    this.setData({
      surplus: surplus.toLocaleString()
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

  handleCardTap(event: WechatMiniprogram.TouchEvent) {
    const {index} = event.currentTarget.dataset as {index: number}
    this.setData({
      coast: this.data.cards[index].coast,
      activeKey: index
    })
  }
})