import addressModule from "../../http/module/address"
import { userProfile } from "../../libs/user/user"

// pages/addressPage/addressPage.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: [] as addressDesign.address[],
    pageInfo: {
      page: 1,
      itemsPerPage: 99
    } as swaggerI.pageRequestParams,
    defaultAddressId: null as unknown as number,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // this.queryAddressList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  async onReady() {
    // const flag = await this.queryDefaulAddress()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log(this.options)
    console.log('onshow')
    this.queryAddressList()
    this.setData({
      defaultAddressId: userProfile.defaultAddressId
    })
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

  handleRadioTap(event: WechatMiniprogram.TouchEvent) {
    const { id } = event.currentTarget.dataset
    const item = this.data.addressList.find(e => e.id === id)
    if (item) {
      if (item.isDefault) return
      // TODO
      // requset for change default address
      const list = this.data.addressList.map(e => {
        e.isDefault = e.id === id
        return e
      })
      this.setData({
        addressList: [...list]
      })
    }
  },

  handleEditTap(event: WechatMiniprogram.TouchEvent) {
    const { id } = event.currentTarget.dataset
    this.navigateTo(id)
  },

  async handelDelete(event: WechatMiniprogram.TouchEvent) {
    const { index } = event.currentTarget.dataset as { index: number }
    console.log(typeof index)
    const addressList = this.data.addressList
    const _this = this
    wx.showModal({
      title: '提示',
      content: "确定删除当前地址？",
      async success(res) {
        if (res.confirm) {
          try {
            await addressModule.deleteAddress(addressList[index].id)
            addressList.splice(index, 1)
            _this.setData({
              addressList: addressList
            })
          } catch {
            wx.showToast({
              title: '删除失败，请稍后重试',
              icon: 'error',
              duration: 2000,
            })
          }
        }
      }
    })
  },

  async queryDefaulAddress() {
    try {
      if (userProfile.defaultAddressId == -1) {
        return false
      } else {
        this.setData({
          defaultAddressId:  userProfile.defaultAddressId
        })
      }
      return true
    } catch (err) {
      wx.showToast({ title: '网络异常', icon: 'error', duration: 2000, })
      return false
    }
  },

  navigateTo(id?: number) {
    const item = this.data.addressList.find(e => e.id === id)
    if (!!item) {
      const { id, lastName, firstName, provinceName, city, street, postcode, mobileNumber, county } = item
      wx.navigateTo({
        url: `../addressDetail/addressDetail?id=${id}&lastName=${lastName}&firstName=${firstName}&provinceName=${provinceName}&city=${city}&street=${street}&postcode=${postcode}&mobileNumber=${mobileNumber}&county=${county}`
      })
    } else {
      wx.navigateTo({
        url: '../addressDetail/addressDetail'
      })
    }
  },

  async queryAddressList() {
    const resData = await addressModule.queryAddressList({ ...this.data.pageInfo, type: 'customer' })
    const { 'hydra:member': list } = resData.data
    this.setData({
      // addressList: [...this.data.addressList, ...list]
      addressList: [...list]
    })
  }
})