import storeModule from "../../http/module/store"

// pages/collectionPage/collectionPage.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collections: [] as storeDesign.collectedStore[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.queryCollections()
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
    this.queryCollections()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  async queryCollections() {
    const resData = await storeModule.queryCollections()
    const {data: list} = resData.data
    this.setData({
      collections: [...this.data.collections, ...list]
    })
  }
})