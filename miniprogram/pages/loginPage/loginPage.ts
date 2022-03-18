import loginModule from "../../http/module/login"
import { login, LoginKey, userProfile } from "../../libs/user/user"
import { $emit } from '../../utils/event.js'
import { querySessionAsync } from "../../utils/querySession"

// pages/loginPage/loginPage.ts
type loginType = 'wxLogin' | 'phoneLogin'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: 0,
    wxLoginCode: '',
    isRegister: false,
    wxLoginBtnDisabled: false,
    phoneLoginBtnDisabled: false,
    userInfo: {} as WechatMiniprogram.UserInfo
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    try {
      let res = await wx.login()
      try {
        const { provider } = (await loginModule.verifyOauthLoginState(res.code)).data
        console.log('没报错')
        if (provider === 'mobile') { }
        else if (provider === 'wechat_mini_program') { }
      } catch {
        console.log('报错')
        this.setData({
          isRegister: true
        })
      }



      this.setData({
        wxLoginCode: res.code
      })
    } catch { }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    wx.clearStorage()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log('诶，我消失啦')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  handleLogin(event: WechatMiniprogram.TouchEvent) {
    if (!this.data.status) {
      wx.showToast({
        title: '请先阅读条例',
        icon: 'none'
      })
      return
    }
    const { funname } = event.currentTarget.dataset as { funname: loginType }
    if (funname === 'wxLogin') {
      this.handleWxLogin()
    } else if (funname === 'phoneLogin') {
      this.handlePhoneLogin()
    } else {
      wx.showToast({
        title: "系统异常",
        icon: "error"
      })
    }
  },

  async handleWxLogin() {
    try {
      this.setData({
        wxLoginBtnDisabled: true
      })
      const res = await wx.getUserProfile({
        desc: '用于获取您的微信个人信息'
      })

      const { userInfo } = res
      wx.setStorageSync('userInfo', userInfo)
      this.setData({
        userInfo
      })
      if (this.data.isRegister) {
        // 是否为第一次注册
        wx.navigateTo({
          url: `../bindPhone/bindPhone?type=1&userName=${userInfo.nickName}&avatarUrl=${userInfo.avatarUrl}`
        })
      } else {
        wx.showLoading({ title: 'loading' })
       
        // 直接登录
        try {
          userProfile.avatar = userInfo.avatarUrl
          userProfile.nickName = userInfo.nickName
          await login({
            provider: LoginKey.wechatMiniProgramProvider
          })
          await querySessionAsync()
          wx.navigateBack({
            delta: 1
          });
        } catch (err) {
          wx.clearStorage()
          $emit({
            name: 'login_error'
          })
        }
      }
    } catch (err) {
      wx.showToast({
        title: "获取信息失败",
        icon: "error"
      })
    } finally {
      wx.hideLoading()
      this.setData({
        wxLoginBtnDisabled: false
      })
    }
  },

  async handlePhoneLogin() {
    this.setData({
      phoneLoginBtnDisabled: true
    })
    try {
      const res = await wx.getUserProfile({
        desc: '用于获取您的微信个人信息'
      })
      
      const { userInfo } = res    
      wx.setStorageSync('userInfo', userInfo)
      wx.navigateTo({
        url: `../bindPhone/bindPhone?type=1&userName=${userInfo.nickName}&avatarUrl=${userInfo.avatarUrl}`
      })
    } catch { } finally {
      this.setData({
        phoneLoginBtnDisabled: false
      })
    }
  },

  handleCheckRegulation() {
    this.setData({
      status: this.data.status ? 0 : 1
    })
  },

  showProtocol() {
    wx.navigateTo({ url: '../protocol/protocol' })
  },

  showPrivacy() {
    wx.navigateTo({ url: '../privacy/privacy' })
  }
})