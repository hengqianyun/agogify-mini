// pages/share/video/video.ts

import sessionModule from "../../../http/module/session"
import { autoLogin, userProfile } from "../../../libs/user/user"

const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bookingCode: String,
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
          // if (await this.checkSession()) {
          //   this.setData({
          //     title: this.properties.from + '邀请您协助参谋',
          //     desc: '加入直播后可以协助好友挑选商品'
          //   })
          // }
          let state = await this.checkSession() 
          if (state === 0) {
            this.setData({
              btnLabel: '去逛一逛',
              title: '房间人数已达上限，暂时无法进入，先到处逛逛？',
              desc: '直播间仅可邀请2人协助参谋，请联系好友确认或到处逛一逛'
            })
          } else if (state ===  1) {
            this.setData({
              btnLabel: '加入直播',
              title: this.properties.from + '邀请您协助参谋',
              desc: '加入直播后可以协助好友挑选商品'
            })
          } else if (state === 2) {
            this.setData({
              btnLabel: '前往查看',
              title: this.properties.from + '邀请您协助参谋',
              desc: '您已接受过该邀请'
            })
          }
             
        } catch {

        }
      } else {
        this.setData({
          title: this.properties.from + '邀请您协助参谋',
          desc: '请登录或注册后加入直播，协助好友挑选商品',
          btnLabel: '前往注册/登录'
        })
      }
    },
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    async handleTap() {
      if (this.data.btnLabel === '加入直播') {
        await this.joinSession()
        // wx.navigateTo({
        //   url: `../roomWaiting/roomWaiting?storeId=${this.properties.storeId}&saleId=${this.properties.salesId}&type=shareIn&bookingCode=${this.properties.bookingCode}`
        // })
      } else if (this.data.btnLabel === '去逛一逛') {
        wx.switchTab({
          url: '../homepage/homepage'
        })
      } else if (this.data.btnLabel === '前往查看') {
        wx.navigateTo({
          url: '../reserveList/reserveList'
        })
      } 
      else {
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
        const ticketRes = await sessionModule.checkBookingTickets(this.data.bookingCode)
        if ((ticketRes.data as any)['tickets'] == 0) {
          try {
            await sessionModule.checkIsBookingGuest(this.data.bookingCode, userProfile.id)
            return 2
          } catch {
            return 0;
          }
        }
       
        // return !!(res.data as any)['available']
        
        return 1
      } catch (err: any) {
        // 多种错误处理
        if (err.message == '') {
          this.setData({
            title: '房间人数已达上限，暂时无法进入，先到处逛逛？',
            desc: '直播间仅可邀请2人协助参谋，请联系好友确认或到处逛一逛',
            btnLabel: '去逛一逛',
          })
        } else { }
        return 0
      }
    },
    /**
     * 用户加入session
     */
    async joinSession() {
      try {
        wx.showLoading({
          title: 'loading'
        })
        await sessionModule.bookingGusetCheckIn(this.data.bookingCode)
        wx.showToast({
          title: '接受成功',
          icon: 'success',
          duration: 2000,
          success() {
            wx.navigateTo({
              url: `../reserveList/reserveList`
            })
          }
        })
        
      } catch {

      } finally {
        wx.hideLoading()
      }
    }
  }
})
