import { IMAGEBASEURL } from "../../http/index"
import orderModule from "../../http/module/order"
import { formatTime } from "../../utils/util"

interface PageOrders extends orderDesign.orderBasic {
  jsonNotes: {brand: string, category1: string, category2: string, category3: string, size: string, category1CnName: string, category2CnName: string, category3CnName: string,}
  productName: string
}

// pages/orderList/orderList.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    tabList: [
      {label: '待发货', status: '1'},
      {label: '已发货', status: '2'},            
    ],
    orderLists: [] as  PageOrders[][],
    pageInfo: {
      page: 1,
      itemsPerPage: 99
    } as swaggerI.pageRequestParams
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.queryOrderList()
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

  handleOrderTap({currentTarget}: WechatMiniprogram.TouchEvent) {
    const {token} = currentTarget.dataset as {token: string}
    wx.navigateTo({
      url: '../orderDetail/orderDetail?token=' + token
    })
  },

  async queryOrderList() {
    try {
      wx.showLoading({
        title: '加载中...'
      })
      const resData = await orderModule.queryOrderList(this.data.pageInfo)
    const {"hydra:member": list} = resData.data
    const [readyList, shipedList] = [[] as PageOrders[], [] as PageOrders[]]
    for (let item of list) {
      if (item.store.logo?.path) {
        item.store.logo.path = IMAGEBASEURL + item.store.logo.path
      }
      item.updatedAt = formatTime(new Date(Date.parse(item.updatedAt))) 
      
      if (item.shippingState === 'ready') {
        readyList.push({...item, jsonNotes: JSON.parse(item.notes), productName: item.items[0].units[0].shippable.translations.en_US.name })
      } else {
        shipedList.push({...item, jsonNotes: JSON.parse(item.notes), productName: item.items[0].units[0].shippable.translations.en_US.name })
      }
    }
    this.setData({
      orderLists: [readyList, shipedList]
    })
    } catch(err) {
      wx.showToast({
        title: '网络错误，请重试',
        icon: 'error'
      })
    } finally {
      wx.hideLoading()
    }
    
  }
})