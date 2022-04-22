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
        this.setData({
            title: '这里放活动名称，可以单行也可以双行',
            brand: 'Brand1/Brand2/Brand3',
            artist: {
                name: 'Artist\'s Name',
                avatar: 'https://rss1.agogify.cn/media/cache/resolve/avatar_thumbnail_normal_1x/e5/4a/4f529ce25244d7d37cebc21419cf/image_picker4889211852744921976.jpg',
                desc: '一些关于该设计师的见解，是哪里哪里人，专门从事什么什么什么……什么看起来高级些什么',
            },
            date: '2022.04.22 12:20 开启活动',
            img: 'https://rss1.agogify.cn/media/cache/resolve/store_main_normal_1x/d2/19/089385ed0bf2de42d1346fd1cae9.jpg',
            desc: 'Ireri来自皮具手工艺的心脏城市—意大利佛罗伦萨。自2008年成立至今，我们一直专注于打造高品质且永不过时的经典包。我们坚信高品质带来的震撼力！每一只手袋都产自顶级意大利皮具工坊，如同打造艺术品般，工匠精雕细琢每一个细节，保证每一件产品都值得被拥有！',
        })
    },

    handleTap() {
        wx.navigateTo({
            url: `../room/room?roomId=${'agogify-activity'}&storeGroupId=${'agogify'}&avGroupId=${'agogify-activity'}&storeId=${'IRERI'}&saleId=${'/api/v2/public/sales/10'}`
          })
    },
})