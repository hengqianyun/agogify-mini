// import initTim from "./libs/tim"
// import genTestUserSig from './debug/GenerateTestUserSig.js'
import { autoLogin } from './libs/user/user'

const judgeProgram = () => {
  const weid = wx.getAccountInfoSync().miniProgram.appId
  console.log('weid', weid)
  if (weid !== 'wx785fd7d9a9dd6412') {
    wx.showModal({
      title: '当前小程序行为异常，请搜索"Agogify爱购季"进入正版小程序',
      success(_) {
        wx.exitMiniProgram({
          fail() {
            judgeProgram()
          }
        })
      }
    })
  }
}

const setNavBarInfo = () => {
  

}

// app.ts
App<RSSDesign.RSSAppOptions>({
  globalData: {
    isIOS: false,
    hasLaunched: false,
    height: 1,
    position: null as unknown as WechatMiniprogram.Rect,
    navHeight: [0, 0, 0, 0],
  },
  async onLaunch() {
    judgeProgram()
    wx.setStorageSync('category', undefined)
    wx.setStorageSync('categoryMap', undefined)
    // 获取系统信息
  const systemInfo = wx.getSystemInfoSync()

  // 获取胶囊按钮位置信息
  const menuButtonInfo = wx.getMenuButtonBoundingClientRect()

  // 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
  this.globalData.navHeight[0] = (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo.height + systemInfo.statusBarHeight

  this.globalData.navHeight[1] = menuButtonInfo.top - systemInfo.statusBarHeight

  this.globalData.navHeight[2] = systemInfo.screenHeight - menuButtonInfo.right

  this.globalData.navHeight[3] = menuButtonInfo.height

    try {
      
    } catch { } finally {
      console.debug('app launch')
      if (this.tokenCallback) {
        this.tokenCallback()
      }
    }
  },
})

