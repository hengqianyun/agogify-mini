import { IMAGEBASEURL, IMAGEPATHS } from "../../http/index"
import reserveModule from "../../http/module/reserve"
import sessionModule from "../../http/module/session"
import storeModule from "../../http/module/store"
import { checkloginAndRealNameCertifiedAsync } from "../../utils/checkLogin"
import { formatTime, getIdFromString, getStringCode, timeFormat } from "../../utils/util"

// pages/activityDetail/activityDetail.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    brand: '',
    artist: {
      name: '',
      avatar: '',
      desc: '',
    },
    date: '',
    img: '',
    desc: '',
    code: '',
    btnDisable: false,
    isFull: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    await this.queryAcDetail()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  async queryrStore(code: string) {
    try {
      const res = await storeModule.queryStoreDetails(code)
      console.log(res)
    } catch (err) { }
  },
  async queryAcDetail() {
    const item = wx.getStorageSync<reserveDesign.eventItem>('eventItem')
    let startTime = new Date(item.startTime.split('GMT')[0])
    const storePathId = item.eventStore
    const code = getStringCode(storePathId)
    try {
      this.queryrStore(code)
    } catch (err) {}
    this.setData({
      title: item.translations.zh_CN.name,
      brand: item.brands.map(e => e.name).join('/'),
      artist: {
        name: item.artist.nickname,
        avatar: IMAGEBASEURL + IMAGEPATHS.avatarMedium1x + item.artist.avatar?.path ?? '',
        desc: '字段缺失',
      },
      date: timeFormat(startTime, 'yyyy.MM.dd') + ' ' + timeFormat(startTime, 'hh:mm') + '开启活动',
      img: IMAGEBASEURL + IMAGEPATHS.bookingthumbnailNormal2x + item.image.path,
      desc: item.translations.zh_CN.description,
      code: item.code,
      isFull: item.tickets === 0
    })
  },

  async handleTap() {
    console.log(this.data.btnDisable)
    console.log(this.data.isFull)
    if (!checkloginAndRealNameCertifiedAsync()) {
      return
    }
    if (this.data.btnDisable) return
    if (this.data.isFull) return
    wx.showLoading({
      title: '请稍等'
    })
    try {
      const res = await reserveModule.queryEvents({
        code: this.data.code,
        state: 'available'
      })
      const item = res.data["hydra:member"][0]
      if (!item) {
        wx.hideLoading()
        wx.showModal({
          title: '报名失败，当前活动已关闭',
          showCancel: false,
        })
        return
      }
      await sessionModule.bookingGusetCheckIn(this.data.code);
      wx.hideLoading()
      wx.showToast({
        title: '报名成功',
        duration: 2000,
        icon: 'success',
      })
      setTimeout(() => { wx.navigateBack() }, 2000)
    } catch (err) {
      console.log(err)
      wx.hideLoading()
      this.data.btnDisable = false
      wx.showToast({
        title: '参加失败',
        icon: 'error',
        duration: 2000,
      })
    }
    // wx.navigateTo({
    //     url: `../room/room?roomId=${'agogify-activity'}&storeGroupId=${'agogify'}&avGroupId=${'agogify-activity'}&storeId=${'IRERI'}&saleId=${'/api/v2/public/sales/10'}`
    //   })
  },
})