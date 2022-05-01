import { IMAGEBASEURL, IMAGEPATHS } from "../../http/index"

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
        code: ''
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
        this.setData({
            title: item.translations.zh_CN.name,
            brand: '字段缺失',
            artist: {
                name: '字段缺失',
                avatar: 'https://rss1.agogify.cn/media/cache/resolve/avatar_thumbnail_normal_1x/e5/4a/4f529ce25244d7d37cebc21419cf/image_picker4889211852744921976.jpg',
                desc: '字段缺失',
            },
            date: '字段缺失',
            img: IMAGEBASEURL + IMAGEPATHS.bookingMainNormal1x + item.image.path,
            desc: item.translations.zh_CN.description,
            code: '字段缺失'
        })
    },

    handleTap() {
        wx.navigateTo({
            url: `../room/room?roomId=${'agogify-activity'}&storeGroupId=${'agogify'}&avGroupId=${'agogify-activity'}&storeId=${'IRERI'}&saleId=${'/api/v2/public/sales/10'}`
          })
    },
})