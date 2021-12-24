import Store from "wxministore"
// import initTim from "./libs/tim"
import store from './store/index'
// import genTestUserSig from './debug/GenerateTestUserSig.js'
import {autoLogin} from './utils/oauth'

// app.ts
App<RSSDesign.RSSAppOptions<Store>>({
  globalData: {
    isIOS: false,
    hasLaunched: false,
    height: 1
  },
  store,
  async onLaunch() {
    const { system, statusBarHeight } = await wx.getSystemInfoSync()
    this.globalData.isIOS = system.indexOf('iOS') > -1
    this.globalData.height = statusBarHeight
    wx.setStorageSync('category', undefined)
    wx.setStorageSync('categoryMap', undefined)

    await autoLogin()

    if (this.tokenCallback) {
      this.tokenCallback()
    }

    // if (option.query.type === 'share') {
    //   initTim('tempuser',genTestUserSig('tempuser'))
    //   this.globalData.hasLaunched = true
    // } else {
    //   initTim('user1', genTestUserSig('user1'))
    //   const userInfo = await wx.getStorageSync('userInfo')
    //   if (userInfo) {
    //     console.log('userinfo success')
    //   }
    //   console.log('userInfo ------------------>')
    //   console.log(userInfo)
    //   const that = this
    //   wx.getUserInfo({
    //     success(res) {
    //       console.log(res)
    //       const userInfo = res.userInfo
    //       initTim(userInfo.nickName, genTestUserSig('userInfo.nickName'))
    //       that.globalData.hasLaunched = true
    //     }
    //   })
    // }

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
    
    wx.checkSession({
      success: res => {
        console.log(res)
      }
    })
  },
})