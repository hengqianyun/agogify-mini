

// import Store from "wxministore"

import sessionModule from "../../http/module/session"
import storeModule from "../../http/module/store"
import store from "../../store/index"
import { checkSessionAsync, querySessionAsync } from "../../utils/querySession"
import { getIdFromString } from "../../utils/util"

// 获取应用实例
const app = getApp()


Page({
  data: {
    bannerList: ['#1AAD19', '#2782D7', '#F1F1F1'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 300,
    newStoreList: [] as storeDesign.storeItem[],
    pageInfo: {
      page: 1,
      itemsPerPage: 6,
    },
    showDialog: false,
    showIcon: false,
    timer: 0,
  },
  store: store,
  async onLoad() {
    app.tokenCallback = async () => {
      await querySessionAsync()
      const session = await checkSessionAsync()
      if (session) {
        this.setData({
          showIcon: true
        })
      }
    }
    await this.queryNewStore(1)
  },

  async onShow() {
    const session = await checkSessionAsync()
    if (session) {
      this.setData({
        showIcon: true
      })
    }
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

  handleDialogCommit() {
    this.setData({
      showDialog: false
    })
  },
  handleDialogCancel() {
    this.setData({
      showDialog: false
    })
  }
})
