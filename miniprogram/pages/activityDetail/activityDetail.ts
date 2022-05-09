import { IMAGEBASEURL, IMAGEPATHS } from "../../http/index"
import sessionModule from "../../http/module/session"
import { formatTime, timeFormat } from "../../utils/util"

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
    async queryAcDetail() {
      const item = wx.getStorageSync<reserveDesign.eventItem>('eventItem')
      let startTime = new Date(item.startTime.split('GMT')[0])
        this.setData({
            title: item.translations.zh_CN.name,
            brand: item.brands.map(e => e.name).join('/'),
            artist: {
                name: item.artist.nickname,
                avatar: item.artist.avatar ?? '',
                desc: '字段缺失',
            },
            date: timeFormat(startTime, 'yyyy.MM.dd') + ' ' + timeFormat(startTime, 'hh:mm') + '开启活动',
            img: IMAGEBASEURL + IMAGEPATHS.bookingthumbnailNormal2x + item.image.path,
            desc: item.translations.zh_CN.description,
            code: item.code,
            isFull: item.seats === item.tickets
        })
    },

    async handleTap() {
      if (this.data.btnDisable) return
      if (this.data.isFull) return
      wx.showLoading({
        title: '请稍等'
      })
      try {
        await sessionModule.bookingGusetCheckIn(this.data.code);
        wx.hideLoading()
        wx.showToast({
          title: '报名成功',
          duration: 2000,
          icon: 'success',
        })
        setTimeout(() => {wx.navigateBack()}, 2000)
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