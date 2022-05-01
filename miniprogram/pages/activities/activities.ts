import reserveModule from "../../http/module/reserve"

// pages/activities/activities.ts
interface _activity {
  date: string
  title: string
  img: string
  brand: string
  artist: string
  id: string
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    acList: [] as _activity[]
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
        // const list = res.data['hydra:member']
        // this.setData({
        //     acList: list.map(e => {
        //         return {
        //             date
        //         }
        //     })
        // })
      } catch (err) {}
    this.setData({
      acList: [
        {
          date: '04月22日 15：10', title: '这里放活动名称，可以单行也可以双行', img: 'https://rss1.agogify.cn/media/cache/resolve/avatar_thumbnail_normal_1x/2f/25/5b7999e590aca4fcfdd48e161ed7/tmp_9b45dfe20f18d417b9b3cd4af094d754a9a505b4dc605b52.jpg', brand: 'brand1', artist: 'Smith Mary', id: '1'
        },
        {
          date: '04月23日 15：10', title: '这里放活动名称', img: 'https://rss1.agogify.cn/media/cache/resolve/avatar_thumbnail_normal_1x/2f/25/5b7999e590aca4fcfdd48e161ed7/tmp_9b45dfe20f18d417b9b3cd4af094d754a9a505b4dc605b52.jpg', brand: 'brand1', artist: 'Smith Mary', id: '2'
        },
      ]
    })
  },

  handleTap() {
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