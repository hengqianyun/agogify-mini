import { IMAGEBASEURL, IMAGEPATHS } from "../../http/index"
import orderModule from "../../http/module/order"
import { formatTime } from "../../utils/util"

interface PageOrders extends orderDesign.orderBasic {
  jsonNotes: { brand: string, category1: string, category2: string, category3: string, size: string, category1CnName: string, category2CnName: string, category3CnName: string, }
}

// pages/orderList/orderList.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    tabList: [
      { label: '待发货', status: '1' },
      { label: '已发货', status: '2' },
    ],
    orderLists: [] as PageOrders[][],
    pageInfo1: {
      page: 1,
      itemsPerPage: 8,
      shippingState: 'ready',
      paymentState: 'paid',
      'order[checkoutCompletedAt]': 'desc',
    } as orderDesign.queryOrderListParams,
    pageInfo2: {
      page: 1,
      itemsPerPage: 8,
      shippingState: 'shipped',
      paymentState: 'paid',
      'order[checkoutCompletedAt]': 'desc',
    } as orderDesign.queryOrderListParams,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.queryReadyList(true)
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
    if (this.data.active == 0) {
      this.queryReadyList(true)
    } else {
      this.queryShipedList(true)
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if (this.data.active == 0) {
      this.queryReadyList(false)
    } else {
      this.queryShipedList(false)
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  handleOrderTap({ currentTarget }: WechatMiniprogram.TouchEvent) {
    const { token } = currentTarget.dataset as { token: string }
    if (this.data.active === 1) {
      const item = this.data.orderLists[this.data.active].find(e => e.tokenValue === token)
      wx.navigateTo({
        url: '../orderDetail/orderDetail?token=' + token + '&trackingCode=' + item?.shipments[0].notes.response.dhlResponse.shipmentTrackingNumber
      })
    } else {

      wx.navigateTo({
        url: '../orderDetail/orderDetail?token=' + token
      })
    }
  },

  async queryReadyList(isRefresh: boolean) {
    wx.showLoading({
      title: '加载中...'
    })
    if (isRefresh) {
      this.data.pageInfo1.page = 1
    }
    try {
      const resData = await orderModule.queryOrderList(this.data.pageInfo1)
      const { "hydra:member": list } = resData.data
      const readyList = [] as PageOrders[]
      for (let item of list) {
        if (item.store.logo?.path) {
          item.store.logo.path = IMAGEBASEURL + IMAGEPATHS.storeSmall1x + item.store.logo.path
        }
        item.updatedAt = formatTime(new Date(Date.parse(item.updatedAt)))
        try {

          readyList.push({ ...item, jsonNotes: JSON.parse(item.notes)[item.items[0].id] })
        } catch {
          readyList.push({ ...item, jsonNotes: JSON.parse(item.notes) })
        }
      }
      if (!isRefresh) {
        readyList.unshift(...this.data.orderLists[0])
      }
      this.setData({
        'orderLists[0]': readyList,
        'pageInfo1.page': this.data.pageInfo1.page + 1,
      })
    } catch (err) {
      wx.showToast({
        title: '网络错误，请重试',
        icon: 'error',
        duration: 2000,
      })
    } finally {
      wx.stopPullDownRefresh()
      wx.hideLoading()
    }

  },

  async queryShipedList(isRefresh: boolean) {
    wx.showLoading({
      title: '加载中...'
    })
    if (isRefresh) {
      this.data.pageInfo2.page = 1
    }
    try {
      const resData = await orderModule.queryOrderList(this.data.pageInfo2)
      const { "hydra:member": list } = resData.data
      const shipedList = [] as PageOrders[]
      for (let item of list) {
        if (item.store.logo?.path) {
          item.store.logo.path = IMAGEBASEURL + IMAGEPATHS.storeNormal1x + item.store.logo.path
        }
        item.updatedAt = formatTime(new Date(Date.parse(item.updatedAt)))
        shipedList.push({ ...item, jsonNotes: JSON.parse(item.notes)[item.items[0].id] })
      }
      if (!isRefresh) {
        shipedList.unshift(...this.data.orderLists[1])
      }
      this.setData({
        'orderLists[1]': shipedList,
        'pageInfo1.page': this.data.pageInfo1.page + 1,
      })
    } catch (err) {
      wx.showToast({
        title: '网络错误，请重试',
        icon: 'error',
        duration: 2000,
      })
    } finally {
      wx.stopPullDownRefresh()
      wx.hideLoading()
    }

  },

  onChange({ detail }: WechatMiniprogram.TouchEvent) {
    const { index } = detail as unknown as { index: number }
    if (index == 1 && this.data.orderLists.length == 1) {
      this.queryShipedList(true)
    }
    this.data.active = index
    console.log(detail)
  },

  // async queryOrderList() {
  //   try {
  //     wx.showLoading({
  //       title: '加载中...'
  //     })
  //     const resData = await orderModule.queryOrderList(this.data.pageInfo1)
  //     const { "hydra:member": list } = resData.data
  //     const [readyList, shipedList] = [[] as PageOrders[], [] as PageOrders[]]
  //     for (let item of list) {
  //       if (item.store.logo?.path) {
  //         item.store.logo.path = IMAGEBASEURL + item.store.logo.path
  //       }
  //       item.updatedAt = formatTime(new Date(Date.parse(item.updatedAt)))

  //       if (item.shippingState === 'ready') {
  //         readyList.push({ ...item, jsonNotes: JSON.parse(item.notes), productName: item.items[0].units[0].shippable.translations.en.name })
  //       } else {
  //         shipedList.push({ ...item, jsonNotes: JSON.parse(item.notes), productName: item.items[0].units[0].shippable.translations.en.name })
  //       }
  //     }
  //     this.setData({
  //       orderLists: [readyList, shipedList]
  //     })
  //   } catch (err) {
  //     wx.showToast({
  //       title: '网络错误，请重试',
  //       icon: 'error'
  //     })
  //   } finally {
  //     wx.hideLoading()
  //   }

  // }
})