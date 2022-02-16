import { IMAGEBASEURL, IMAGEPATHS } from "../../http/index"
import sessionModule from "../../http/module/session"
import storeModule from "../../http/module/store"
import { getIdFromString } from "../../utils/util"

// pages/salesChoose/salesChoose.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stores: [] as storeDesign.storeItem[],
    currentStoreIndex: 0,
    sales: [] as storeDesign.sale[],
    showDialog: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const stores = wx.getStorageSync('reserveStores')
    this.setData({
      stores,
    })
    this.querySales()
  
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
    this.querySales()
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

  async handleCall({currentTarget}: WechatMiniprogram.TouchEvent) {
    const {id, status, index} = currentTarget.dataset as {id: string, status: string, index: number}
    if (status !== 'online') {
      return
    }
    let key = `sales[${index}].status`
    this.setData({
      [key]: 'offline'
    })
    if (!(await this.querySession())) {
      this.setData({
        [key]: 'online'
      })
      return
    }
    
    // 
    const saleId = getIdFromString(id)
    const currentStore = this.data.stores[this.data.currentStoreIndex]
    this.setData({
      [key]: 'online'
    })
    wx.navigateTo({
      url: `../room/room?storeName=${currentStore.name}&avatar=${currentStore.logo?.path}&storeId=${currentStore.code}&saleId=${saleId}`
    })
  },

  async querySales() {
    // 查询店员
    const res = await storeModule.querySales({
      page: 1,
      itemsPerPage: 99,
      "store.code": this.data.stores[this.data.currentStoreIndex].code,
      // roles: 'ROLE_STORE_SALES_ACCESS',
    })
    const {"hydra:member": list} = res.data
    for (let i = 0; i < list.length; i++) {
      try {
        list[i].avatar = {path: IMAGEBASEURL+ IMAGEPATHS.avatarNormal1x + list[i].avatar?.path}
      } catch {
        list[i].avatar = {path: IMAGEBASEURL}
      }
    }
    this.setData({
      sales: list
    })
  },

  async handlePreStore() {
    if (this.data.currentStoreIndex === 0) return
    this.setData({
      currentStoreIndex: --this.data.currentStoreIndex
    })
    await this.querySales()
  },
  async handleNextStore() {
    if (this.data.currentStoreIndex === this.data.stores.length - 1) return
    this.setData({
      currentStoreIndex: ++this.data.currentStoreIndex
    })
    await this.querySales()
  },
  async querySession() {
    try {
      // const res = await sessionModule.querySession({
      //   itemsPerPage: 1,
      //   page: 1,
      //   "state[]": ['ended', 'paused'],
      //   'customer.id': getIdFromString(wx.getStorageSync('oauth.data').customer),
      // })
      const res = await sessionModule.querySession('state[]=active&state[]=paused&customer.id=' + getIdFromString(wx.getStorageSync('oauth.data').customer) + '&itemsPerPage=1&page=1')
      const {"hydra:member": list} = res.data
      if (list.length > 0) {
        this.setData({
          showDialog: true
        })
        return false
      }
      return true
    } catch(err) {
      console.log(err)
      this.onLoad()
      return false
    }
  },
  handleDialogCommit() {
    this.setData({
      showDialog: false
    })
  },
  handleDialogCancel() {
    this.setData({
      showDialog: false
    })
  },
})