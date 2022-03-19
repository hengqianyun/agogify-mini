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

// app.ts
App<RSSDesign.RSSAppOptions>({
  globalData: {
    isIOS: false,
    hasLaunched: false,
    height: 1,
    position: null as unknown as WechatMiniprogram.Rect
  },
  async onLaunch() {
    judgeProgram()
    wx.setStorageSync('category', undefined)
    wx.setStorageSync('categoryMap', undefined)
    try {
      
    } catch { } finally {
      console.debug('app launch')
      if (this.tokenCallback) {
        this.tokenCallback()
      }
    }
  },
})

