// pages/share/video/video.ts

import sessionModule from "../../../http/module/session"

const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    sessionCode: String,
    from: String,
    roomId: String,
    salesId: String,
    storeId: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    btnLabel: '',
    showBtn: true,
  },

  lifetimes: {
    async attached() {
      wx.showLoading({ title: '加载中' })
      app.tokenCallback = async () => {
        try {
          /// TODO check wether user can join
          
          await this.checkSession() ?
          this.setData({
            btnLabel: '加入直播'
          }) : this.setData({
            showBtn: false
          })
        } catch {
          this.setData({
            btnLabel: '前往注册'
          })
        } finally {
          wx.hideLoading()
        }
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap() {
      if (this.data.btnLabel === '加入直播') {

      } else {

      }
    },
    /**
     * 查询房间是否已满
     */
    async checkSession() {
      try {
        return !!(await sessionModule.checkGuestAvailability(this.data.sessionCode))
      } catch {
        return false
      }
    },
    /**
     * 用户加入session
     */
    async joinSession() {
      try {
        await sessionModule.gusetCheckIn(this.data.sessionCode)
        wx.navigateTo({
          url: `../../room/room?type=4&roomId=${this.data.roomId}$saleId=${this.data.salesId}&storeId=${this.data.storeId}`
        })
      } catch {

      }
    }
  }
})
