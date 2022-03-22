import storeModule from "../../http/module/store"
import { checkSessionAsync, clearSessionAsync, querySessionAsync } from "../../utils/querySession"
import { BANNERS } from '../../serviceStaticResource/index'
import { autoLogin } from "../../libs/user/user"
import http from "../../libs/http"


Page({
  data: {
    bannerList: [] as string[],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 5000,
    duration: 300,
    newStoreList: [] as storeDesign.storeItem[],
    pageInfo: {
      page: 1,
      itemsPerPage: 6,
    },
    showDialog: false,
    showIcon: false,
    timer: 0,
    resMessage: '',
  },
  async onLoad() {
    console.debug('homepage load')
    await autoLogin()
    const session = await checkSessionAsync()
      if (session) {
        this.setData({
          showIcon: true
        })
      }
    await this.queryNewStore(1)
    this.setData({
      bannerList: BANNERS
    })
  },

  async onShow() {
    const session = await checkSessionAsync()
    this.setData({
      showIcon: !!session
    })
  },

  async onPullDownRefresh() {
    wx.showNavigationBarLoading()
    await this.queryNewStore(1)
    setTimeout(() => {
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    }, 1000)
  },

  async onReachBottom() {
    await this.queryNewStore(0)
    console.log('reached borrom')
  },

  handleSwiperClick(event: WechatMiniprogram.TouchEvent) {
    console.log(event)
  },

  handleSearchTab() {
    wx.navigateTo({
      url: '../search/search'
    })
  },

  async queryNewStore(type: number) {
    if (type === 1) {
      this.data.pageInfo.page = 1;
    }

    const resData = await storeModule.queryStore(this.data.pageInfo);
    const newList = resData.data["hydra:member"]
    if (type === 1) {
      this.setData({
        newStoreList: newList,
        'pageInfo.page': this.data.pageInfo.page + 1
      })
    } else {
      this.setData({
        newStoreList: this.data.newStoreList.concat(newList),
        'pageInfo.page': this.data.pageInfo.page + 1
      })
    }
  },
  handleDialogCancel(e: WechatMiniprogram.TouchEvent) {
    const {detail} = e
    if (!!detail) {
      this.setData({
        showIcon: false
      })
    }
  },
  // handleTestTap() {
  //   const that = this
  //   wx.request({
  //     url: 'https://rss1.agogify.cn/api/v2/admin/store/sales/video-session/bookings/release-time-slots',
  //     method: 'POST',
  //     header: {
  //       // 'Content-Type': 'application/ld+json',
  //       authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NDc5MzE0NjcsImV4cCI6MTY0ODAxNzg2Nywicm9sZXMiOlsiUk9MRV9BUElfQUNDRVNTIiwiUk9MRV9TVE9SRV9TQUxFU19BQ0NFU1MiLCJST0xFX1NUT1JFX1NBTEVTX0FQSV9BQ0NFU1MiXSwidXNlcm5hbWUiOiJoZW5nbGVpIn0.uNtigaIhCQiWQhlUY6z5l62qC04Pqb6jpLmM4NW6wHFY6h5_NAjTiY8yxwJQVBz6unAv_tq5oby7bp-3M6dMMthHE583QwuaDjj9tRSVYQ1CBgLWC_lT-FxUrKdewzg8-SjolGbWhQJmMF_9R1yudlZvdJ6_QXFZJ8ObAnQbOG5qokRqS4AHPEhOYDtxUSgjkN23lfMwSrgdnPIEvOtpV-cdEFzIajSKmSXLHFT0CrE4rAbhl2CPD0StyhpU4AEKJQu3fOA3xwnJd3OYQB0emaIeoWSAhFbyy5hFjCSeiuLdonrOOcZdpC3UulgzmbE4y3tZHELQypLiGo3Xo7B5ow',
  //     },
  //     data: {
  //       "timeSlots": [
  //         {
  //           "id": 487,
  //           "version": 1
  //         }
  //       ]
  //     },
  //     success(res) {
  //       that.setData({
  //         resMessage: res.data.message
  //       })
  //       console.log(res)
  //     }
  //   })
  // }
})
