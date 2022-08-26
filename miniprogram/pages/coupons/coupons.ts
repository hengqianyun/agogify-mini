import couponsModule from "../../http/module/coupons"
import { timeFormat } from "../../utils/util"

// pages/coupons/coupons.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coupons: [],
    cdk: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.queryCoupons()
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
  async queryCoupons() {
    const res = await couponsModule.getCoupons({})
    const list = res.data['hydra:member']
    this.setData({
      coupons: list.map((e: any) => {
        const time = new Date(Date.parse(e.expiresAt))
        const timeStr = timeFormat(time, 'yyyy-MM-dd') + " " + timeFormat(time, 'hh:mm') + ':00 到期'
        const promotion = e.promotion
        let off = ''
        let isOff = true
        if (promotion.name.includes('%')) {
          off = 100 - promotion.name.split('%')[0] + ''
        } else {
          isOff = false
          off = promotion.name.split(' EUR')[0]
        }
        return {
          ...e,
          timeStr,
          isOff,
          off
        }
      })
    })
  },

  handleInput(event: WechatMiniprogram.TouchEvent) {
    const { value } = event.detail as { value: string }
    this.setData({
      cdk: value
    })
  },

  async handleCommit() {
    if (this.data.cdk === '') {
      return
    }
    try {
      await couponsModule.getGiftCoupon(this.data.cdk)
      wx.showToast({
        title: '兑换成功',
        icon: 'success',
        duration: 2000
      })
      this.setData({
        cdk: ''
      })
      this.queryCoupons()
    } catch (err) {
      wx.showToast({
        title: '兑换失败',
        icon: 'error',
        duration: 2000
      })
    }
  }
})