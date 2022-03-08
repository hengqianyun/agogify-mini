// pages/share/video/video.ts

const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    sessionCode: String,
    from: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    btnLabel: ''
  },

  lifetimes: {
    attached() {
      wx.showLoading({title: '加载中'})
      app.tokenCallback = async () => {
        try {
          const userInfo = wx.getStorageSync('oauth.data')
          const userId = userInfo.customer
          this.setData({
            btnLabel: '加入直播'
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
    }
  }
})
