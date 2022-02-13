import { IMAGEBASEURL, IMAGEPATHS } from "../../http/index"
import orderModule from "../../http/module/order"
import { formatTime } from "../../utils/util"

// pages/orderDetail/orderDetail.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    storeAvatar: "",
    storeName: "",
    storeId: "",
    productAvatar: "",
    productName: "",
    productDesc: "",
    productPrice: '',
    productId: "",
    coasts: [
      // { label: '商品金额', value: Number(1234).toLocaleString() },
      // { label: '返税', value: Number(567).toLocaleString() },
      // { label: '退税服务费', value: Number(567).toLocaleString() },
      // { label: '海关关税', value: Number(2878).toLocaleString() },
      // { label: '运费', value: Number(2).toLocaleString() },
      // { label: '积分抵扣', value: Number(123).toLocaleString() },
      // { label: '合计', value: Number(124).toLocaleString() },
    ] as any[],
    textInfo: [
      { label: '订单号', value: '' },
      { label: '流水号', value: '' },
      { label: '创建时间', value: '' },
      { label: '发货时间', value: '' },
    ],
    tokenValue: '',
    category: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const { token } = this.options as { token: string }

    this.setData({
      // storeAvatar: "http://dummyimage.com/200x200/50B347/FFF&text=avatar",
      // storeName: "storeName",
      // storeId: "storeId",
      // productAvatar: "http://dummyimage.com/200x200/F00/FFF&text=Product",
      // productName: "productName",
      // productDesc: "productDesc",
      // productPrice: '20',
      // productId: "productId",
      tokenValue: token
    })

    this.queryOrderDetail()
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

  async queryOrderDetail() {
    try {
      let res, data
      try {
        wx.showLoading({ title: '加载中...' })
        res = await orderModule.queryOrderDetail(this.data.tokenValue)
        data = res.data
      } catch {
        wx.showToast({
          title: '网络错误',
          icon: 'error'
        })
        return
      } finally {
        wx.hideLoading()
      }
      const coasts = [
        { label: '商品金额', value: (data.items[0].unitPrice / 100).toLocaleString() },
        // {label: '返税', value: Number(567).toLocaleString()},
        // {label: '退税服务费', value: Number(567).toLocaleString()},
        { label: '海关关税', value: (data.taxTotal / 100).toLocaleString() },
        { label: '运费', value: (data.shippingTotal / 100).toLocaleString() },
        // {label: '积分抵扣', value: Number(123).toLocaleString()},
        { label: '合计', value: (data.total / 100).toLocaleString() },
      ]
      const shippedAt = data.shipments[0].shippedAt
      const textInfo = [
        { label: '订单号', value: data.tokenValue },
        { label: '流水号', value: data.items[0].units[0].serialNumber! },
        { label: '创建时间', value: formatTime(new Date(Date.parse(data.createdAt))) },
        { label: '发货时间', value: shippedAt ? formatTime(new Date(Date.parse(shippedAt))) : '' },
      ]
      const notes = JSON.parse(data.notes)[data.items[0].id]
      this.setData({
        coasts,
        textInfo,
        productName: notes.zh_Hans_CN.productName,
        productPrice: (data.items[0].unitPrice / 100).toLocaleString(),
        storeAvatar: IMAGEBASEURL+ IMAGEPATHS.storeNormal1x + data.store.logo.path,
        storeName: data.store.name,
        productDesc: notes.zh_Hans_CN.size,
        category: `${notes.zh_Hans_CN.category1} - ${notes.zh_Hans_CN.category2} - ${notes.zh_Hans_CN.category3}`
      })
    } catch (err) {
      throw err
    }



  },
  handelScan() {
    wx.scanCode({
      success(res) {
        if (res.errMsg !== "scanCode:ok") {
          wx.showToast({ title: '扫描失败', icon: 'error' })
          return
        }
        wx.showModal({
          title: res.result,
          showCancel: false,
          confirmText: "我知道了"
        })
      },
      fail() {
        wx.showToast({ title: '扫描失败，请重试', icon: 'error' })
      }
    })
  }
})