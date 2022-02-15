import storeModule from "../../http/module/store"
import { IMAGEBASEURL, IMAGEPATHS } from '../../http/index'
import { checkloginAndRealNameCertifiedAsync } from "../../utils/checkLogin"

// pages/productPage/productPage.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    controllers: [
      {
        label: '呼叫'
        , className: 'line-btn',
        icon: 'a-call2',
        event: 'handleCall'
      },
      {
        label: '预约'
        , className: 'fill-btn',
        icon: 'my_reserve',
        color: "#fff",
        event: 'handleReserve'
      },
    ],
    imageList: [] as swaggerI.image[],
    name: '',
    id: '' as unknown as number,
    category: '',
    desc: '',
    price: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    console.log(this.options)
    const { code, name } = this.options as { code: string, name: string }
    wx.setNavigationBarTitle({ title: name })
    this.queryProductDetail(code)
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
  handleIconButtonTap(ev: WechatMiniprogram.TouchEvent) {
    console.log(ev)
    const { event } = ev.currentTarget.dataset as { event: keyof WechatMiniprogram.Page.Constructor }
      ; (this[event] as Function)()
  },

  handleCall() {
    if (!checkloginAndRealNameCertifiedAsync()) {
      return
    }
    wx.navigateTo({ url: '../salesChoose/salesChoose' })
  },
  
  handleReserve() {
    if (!checkloginAndRealNameCertifiedAsync()) {
      return
    }
    wx.navigateTo({ url: '../reservePage/reservePage' })
  },

  async queryProductDetail(code: string) {
    const resData = await storeModule.queryProductDetails(code)
    const { data: detail } = resData
    detail.images.forEach(e => e.path = IMAGEBASEURL+ IMAGEPATHS.productMain1x + e.path)
    this.setData({
      imageList: detail.images,
      name: detail.translations?.zh_Hans_CN.name,
      id: detail.id,
      category: detail.mainTaxon?.name,
      desc: detail.description,
      // price: String.fromCharCode(8364) + ' ' + detail.price,
    })
  }
})