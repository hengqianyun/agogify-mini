import { IMAGEBASEURL, IMAGEPATHS } from "../../http/index"
import reserveModule from "../../http/module/reserve"

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
    serverData: [] as reserveDesign.eventItem[]
  },

  onLoad() {
    this.queryAcs()
  },

  async queryAcs() {
    try {
      const res = await reserveModule.queryEvents({
        state: 'available',
        type: 'event',
        "startTime[after]": (new Date()).toISOString()
      })
      console.log(res)

      const list = res.data["hydra:member"]
      const acList = list.map(e => {
        debugger
        return {
          date: '字段缺失',
          title: e.translations.zh_CN.name,
          img: IMAGEBASEURL + IMAGEPATHS.bookingMainNormal1x + e.image.path,
          brand: '字段缺失',
          artist: '字段缺失',
          code: '字段缺失'
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