import { IMAGEBASEURL, IMAGEPATHS } from "../../http/index"
import reserveModule from "../../http/module/reserve"
import { getIdFromString, timeFormat } from "../../utils/util"

type reserveTagType = '待进行' | '已结束'

interface pageReserve extends reserveDesign.salesReserveItem {
  date: string
  duration: string
  tag: reserveTagType
  address: string
}

// pages/reserveList/reserveList.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    tabList: [
      { label: '待进行', status: '0' },
      { label: '已结束', status: '1' },
    ],
    reserveLists: [] as pageReserve[][],
    tabTitle: '待进行'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.queryReserveList()
    this.queryFinishedReserveList()
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

  onChange({ detail }: WechatMiniprogram.TouchEvent) {
    const { index } = detail as { index: number }
    if (index === 0) {
      this.setData({
        tabTitle: '待进行'
      })
    }
  },

  async queryReserveList() {
    // const strId = wx.getStorageSync('oauth.data').customer
    const res = await reserveModule.queryMyReserveList({
      "startTime[after]": (new Date()).toISOString(),
      "customer.id": getIdFromString(wx.getStorageSync('oauth.data').customer),
    })

    const { "hydra:member": reserveList } = res.data

    const tempList = reserveList.map(e => {
      e.sales.store.logo.path = IMAGEBASEURL+ IMAGEPATHS.storeNormal1x + e.sales.store.logo.path
      let startTime = new Date(e.startTime.split('GMT')[0])
      let endTime = new Date(e.endTime.split('GMT')[0])
      startTime = new Date(startTime.setHours(startTime.getHours() + 8)) 
      endTime = new Date(endTime.setHours(endTime.getHours() + 8)) 
      return {
        ...e,
        date: timeFormat(startTime, 'yyyy-MM-dd'),
        duration: `${timeFormat(startTime, 'hh:mm')}~${timeFormat(endTime, 'hh:mm')}`,
        tag: '待进行',
        address: e.sales.store.billingData.country?.name + ' ' + e.sales.store.billingData.city?.name
      }
    })

    this.setData({
      'reserveLists[0]': tempList
    })
  },

  async queryFinishedReserveList() {
    const res = await reserveModule.queryMyReserveList({
      "endTime[before]": (new Date()).toISOString(),
      "customer.id": getIdFromString(wx.getStorageSync('oauth.data').customer),
    })
    const { "hydra:member": reserveList } = res.data

    const tempList = reserveList.map(e => {
      e.sales.store.logo.path = IMAGEBASEURL+ IMAGEPATHS.storeNormal1x + e.sales.store.logo.path
      let startTime = new Date(e.startTime.split('GMT')[0])
      let endTime = new Date(e.endTime.split('GMT')[0])
      startTime = new Date(startTime.setHours(startTime.getHours() + 8)) 
      endTime = new Date(endTime.setHours(endTime.getHours() + 8)) 
      return {
        ...e,
        date: timeFormat(startTime, 'yyyy-MM-dd'),
        duration: `${timeFormat(startTime, 'hh:mm')}~${timeFormat(endTime, 'hh:mm')}`,
        tag: '已结束',
        address: e.sales.store.billingData.country?.name + ' ' + e.sales.store.billingData.city?.name
      }
    })

    this.setData({
      'reserveLists[1]': tempList
    })
  },

  handleCall({currentTarget}: WechatMiniprogram.TouchEvent) {
    const {index} = currentTarget.dataset as {index: number}
    const reserveItem = this.data.reserveLists[0][index]
    console.log(reserveItem)
    // const {startTime, endTime} = reserveItem
    // if (Date.now() > Date.parse(startTime)) {
    //   wx.showToast({
    //     title: '还未到预约时间',
    //     icon: 'error'
    //   })
    //   return
    // } else if (Date.now() < Date.parse(endTime)) {
    //   wx.showToast({
    //     title: '预约时间已过，请重新预约或直接沟通',
    //     icon: 'error'
    //   })
    //   return
    // } else {
    //   const {'@id': saleId, store} = reserveItem.sales
    //   const {code} = store
    //   wx.navigateTo({
    //     url: `../room/room?storeId=${code}&saleId=${saleId}&type=2`
    //   })
    // }


    const {'@id': saleId, store} = reserveItem.sales
      const {code} = store
      wx.navigateTo({
        url: `../room/room?storeId=${code}&saleId=${saleId}&type=2`
      })
  }
})