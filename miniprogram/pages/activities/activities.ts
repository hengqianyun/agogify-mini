import { IMAGEBASEURL, IMAGEPATHS } from "../../http/index"
import reserveModule from "../../http/module/reserve"
import { localMonth, timeFormat } from "../../utils/util"

// pages/activities/activities.ts
interface _activity {
  date: string
  title: string
  img: string
  brand: string
  artist: string
  code: string
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    acList: [] as _activity[],
    serverData: [] as reserveDesign.eventItem[],
    tabBarHeight: 0
  },

  onLoad() {
    this.queryAcs()
  },

  onShow() {
    if (typeof this.getTabBar === 'function' &&
    this.getTabBar()) {
    this.getTabBar().setData({
      selected: 2    // 根据tab的索引值设置
    })
  }
    this.queryAcs()
  },

  onReady() {
    let height = wx.getStorageSync<number | string>('tabbarHeight')
    height = !height ? 0 : height
    this.setData({
      tabBarHeight: height as number
    })
  },

  onPullDownRefresh() {
    this.queryAcs()
  },

  async queryAcs() {
    console.log((new Date()).toISOString());
    try {
      const res = await reserveModule.queryEvents({
        state: 'available',
        type: 'event',
        "startTime[after]": (new Date()).toISOString()
      })
      console.log(res)

      const list = res.data["hydra:member"]
      const acList = list.map(e => {
        let num1 = Date.parse(e.startTime.split('GMT')[0])
        let startTime =  new Date(num1 + 8 * 1000 * 60 * 60)
        return {
          date: localMonth(startTime) + ' ' + timeFormat(startTime, 'hh:mm'),
          title: e.translations.zh_CN.name,
          img: IMAGEBASEURL + IMAGEPATHS.bookingthumbnailNormal1x + e.image.path,
          brand: e.brands.map(e => e.name).join('/'),
          artist: e.artist.nickname,
          code: e.code,
          isFull: e.tickets === e.seats
        }
      })
      console.log(acList)
      this.setData({
        acList,
        serverData: list
      })
    } catch (err) { }
  },

  handleTap(event: WechatMiniprogram.TouchEvent) {
    const {index} = event.currentTarget.dataset as {index: number}
    const item = this.data.serverData[index]
    wx.setStorageSync<reserveDesign.eventItem>('eventItem', item)
    wx.navigateTo({
      url: '../activityDetail/activityDetail'
    })
  },

  enterRoom() {
    wx.navigateTo({
      url: `../room/room?roomId=${'agogify-activity'}&storeGroupId=${'agogify'}&avGroupId=${'agogify-activity'}&storeId=${'IRERI'}&saleId=${'/api/v2/public/sales/10'}`
    })
  }
})