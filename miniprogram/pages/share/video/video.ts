// pages/share/video/video.ts

import sessionModule from "../../../http/module/session"
import { autoLogin, userProfile } from "../../../libs/user/user"

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
    btnLabel: '加入直播',
    showBtn: true,
    title: '',
    desc: ''
  },

  lifetimes: {
    async attached() {
      if (!!userProfile.pathId && !!userProfile.avatar) {
        try {
          /// TODO check wether user can join
          if (await this.checkSession()) {
            this.setData({
              title: this.properties.from + '邀请您协助参谋',
              desc: '加入直播后可以协助好友挑选商品'
            })
          }
          await this.checkSession() ?
          this.setData({
            btnLabel: '加入直播'
          }) : this.setData({
            showBtn: false
          })
        } catch {
          
        }
      } else {
        this.setData({
          btnLabel: '前往注册'
        })
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    async handleTap() {
      if (this.data.btnLabel === '加入直播') {
        await this.joinSession()
        // wx.navigateTo({
        //   url: `../roomWaiting/roomWaiting?storeId=${this.properties.storeId}&saleId=${this.properties.salesId}&type=shareIn&sessionCode=${this.properties.sessionCode}`
        // })
      } else {
        wx.navigateTo({
          url: '../loginPage/loginPage'
        })
      }
    },
    /**
     * 查询房间是否已满
     */
    async checkSession() {
      try {
        return !!(await sessionModule.checkGuestAvailability(this.data.sessionCode))
      } catch (err: any) {
        // 多种错误处理
        if (err.message == '') {
          this.setData({
            title: '房间人数已达上限，暂时无法进入，先到处逛逛？',
            desc: '直播间仅可邀请2人协助参谋，请联系好友确认或到处逛一逛',
            btnLabel: '前往主页',
          })
        } else {}
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
          url: `../roomWaiting/roomWaiting?storeId=${this.properties.storeId}&saleId=${this.properties.salesId}&type=shareIn&sessionCode=${this.properties.sessionCode}`
        })
      } catch {

      }
    }
  }
})
