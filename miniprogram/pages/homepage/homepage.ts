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
})
