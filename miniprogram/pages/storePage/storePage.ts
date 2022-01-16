import storeModule from "../../http/module/store"
import { IMAGEBASEURL } from '../../http/index'
import { checkloginAsync } from "../../utils/checkLogin";
const DEFAULT_IMAGE = '../../assets/image/avatar.jpg'

interface PageStore extends storeDesign.QueryStoreDetailRes {
  address: string
}

// pages/storePage/storePage.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details: {} as PageStore,
    products: [] as storeDesign.product[],
    storeId: '',
    btns: [
    //   {
    //   label: '已收藏',
    //   icon: 'store_yishoucang',
    //   size: 32,
    //   class: 'line-btn',
    //   color: "#353535",
    //   event: 'handleCollect'
    // },
     {
      label: '呼叫',
      icon: 'a-call2',
      size: 32,
      class: 'line-btn',
      color: "#353535",
      event: 'handleCall'
    }, {
      label: "预约",
      icon: "my_reserve",
      size: 32,
      class: 'fill-btn',
      color: "#fff",
      event: 'handleReserve'
    }],
    pageInfo: {
      page: 1,
      itemsPerPage: 10,
    },
    reachBottomSearch: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    const { storeId } = options;
    this.setData({
      storeId: storeId
    })
    wx.setNavigationBarTitle({ title: '店铺名称' })
    console.log(options)
    await this.queryDetails()
    await this.queryProducts(0)
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
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  onReachBottom() {
    if (this.data.reachBottomSearch) {
      this.queryProducts(1)
    }
  },

  handleIconButtonTap(ev: WechatMiniprogram.TouchEvent) {
    debugger
    console.log(ev)
    const {event} = ev.currentTarget.dataset as {event: keyof WechatMiniprogram.Page.Constructor}
    ;(this[event] as Function)()
  },
  handleCollect() {
    checkloginAsync()
  },
  handleCall() {
    checkloginAsync()
    wx.setStorageSync('reserveStores', [this.data.details]);
    wx.navigateTo({url: '../salesChoose/salesChoose'})
  },
  handleReserve() {
    checkloginAsync()
    wx.setStorageSync('reserveStores', [this.data.details]);
    wx.navigateTo({url: '../reservePage/reservePage'})
  },

  handleProductTap(event: WechatMiniprogram.TouchEvent) {
    console.log(event)
    const {code, name} = event.currentTarget.dataset
    wx.setStorageSync('reserveStores', [this.data.details]);
    wx.navigateTo({
      url: `../productPage/productPage?code=${code}&name=${name}`
    })
  },

  async queryDetails() {
    const resData = await storeModule.queryStoreDetails(this.data.storeId)
    if (resData.data.logo)
      resData.data.logo.path = IMAGEBASEURL + resData.data?.logo?.path
    if (resData.data.images.length > 0) {
      resData.data.images[0].path = IMAGEBASEURL + resData.data.images[0].path
    }
    const { country, city } = resData.data.billingData
    const address = `${country?.name} ${city?.name}`
    this.setData({
      details: {...resData.data, address}
    })
  },

  async queryProducts(type: number) {
    if (type === 1 && !this.data.reachBottomSearch) return
    const resData = await storeModule.queryProducts(this.data.pageInfo)
    const { 'hydra:member': list } = resData.data
    list.forEach(e => e.images.forEach(im => im.path = IMAGEBASEURL + im?.path))
    if (type === 0) {
      this.setData({
        products: list
      })
    } else {
      if (list.length <this.data.pageInfo.itemsPerPage || list[list.length - 1].code === this.data.products[this.data.products.length - 1].code) {
        this.setData({
          reachBottomSearch: false
        })
        return
      }
      this.setData({
        products: this.data.products.concat(list)
      })
    }
  },

  imageError() {
    this.setData({
      'details.logo.path': DEFAULT_IMAGE
    })
    console.log(this.data.details)
  }
})