import { IMAGEBASEURL } from "../../http/index"
import reserveModule from "../../http/module/reserve"
import { getIdFromString, timeFormat } from "../../utils/util"

type reserveTagType = '待进行' | '已结束'

interface pageReserve extends reserveDesign.salesReserveItem {
  date: string
  duration: string
  tag: reserveTagType
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
      e.sales.store.logo.path = IMAGEBASEURL + e.sales.store.logo.path
      return {
        ...e,
        date: timeFormat(new Date(e.startTime), 'yyyy-MM-dd'),
        duration: `${timeFormat(new Date(e.startTime), 'hh:mm')}~${timeFormat(new Date(e.endTime), 'hh:mm')}`,
        tag: '待进行'
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
      e.sales.store.logo.path = IMAGEBASEURL + e.sales.store.logo.path
      return {
        ...e,
        date: timeFormat(new Date(e.startTime), 'yyyy-MM-dd'),
        duration: `${timeFormat(new Date(e.startTime), 'hh:mm')}~${timeFormat(new Date(e.endTime), 'hh:mm')}`,
        tag: '已结束'
      }
    })

    this.setData({
      'reserveLists[1]': tempList
    })
  },

  handleCall() {
    
  }
})