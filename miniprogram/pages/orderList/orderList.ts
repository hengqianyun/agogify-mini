import { IMAGEBASEURL } from "../../http/index"
import orderModule from "../../http/module/order"
import { formatTime } from "../../utils/util"

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
    orderLists: [] as  orderDesign.orderBasic[][],
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
    const resData = await orderModule.queryOrderList(this.data.pageInfo)
    const {"hydra:member": list} = resData.data
    const [readyList, shipedList] = [[] as orderDesign.orderBasic[], [] as orderDesign.orderBasic[]]
    for (let item of list) {
      if (item.store.logo?.path) {
        item.store.logo.path = IMAGEBASEURL + item.store.logo.path
      }
      item.updatedAt = formatTime(new Date(Date.parse(item.updatedAt))) 
      if (item.shippingState === 'ready') {
        readyList.push(item)
      } else {
        shipedList.push(item)
      }
    }
    this.setData({
      orderLists: [readyList, shipedList]
    })
  }
})