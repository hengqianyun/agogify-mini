import loginModule from "../../http/module/login"
import http from "../../libs/http"
import store from "../../store/index"
import { queryUserInfo, setOautoData } from "../../utils/oauth"
import { querySessionAsync } from "../../utils/querySession"

// pages/bindPhone/bindPhone.ts
type queryType = '0' | '1' | '2' // bind、login、change bind
type btnText = '登录' | "绑定"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: 0,
    showReguration: true,
    title: 'Welcome',
    verifyText: "获取验证码",
    btnText: '登录' as btnText,
    btnDisable: false,
    type: '0' as queryType,
    phoneNumber: '' as unknown as number,
    verifyCode: '' as unknown as number,
    userInfo: {userName: '', avatarUrl: ''},
    commitBtnDisabled: false,
  },

  store: store,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    console.log(this.options)
    const { type, userName, avatarUrl } = this.options as { type: queryType, userName: string, avatarUrl: string }
    this.setData({
      type: type
    })
    switch (type) {
      case "0":
        wx.setNavigationBarTitle({ title: '绑定手机号' })
        this.setData({
          showReguration: false,
          title: '绑定手机号',
          btnText: '绑定' as btnText
        })
        break;
      case "1":
        wx.setNavigationBarTitle({ title: '手机号登录' })
        this.setData({
          showReguration: false,
          userInfo: {userName, avatarUrl}
        })
        break
      case "2":
        wx.setNavigationBarTitle({ title: '绑定手机号' })
        this.setData({
          title: '绑定手机号',
          btnText: "绑定"
        })
        break;
      default:
        wx.showToast({
          title: "系统异常",
          icon: "error"
        })
    }
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  async handleGetCode() {
    if (this.data.btnDisable) return
    let timer = 0, time = 60
    this.setData({
      btnDisable: true
    })
    try {
      await loginModule.sendVerificationCode({ mobileNumber: this.data.phoneNumber })
      const interval = () => {
        timer = setInterval(() => {
          if (time === 0) {
            clearInterval(timer)
            this.setData({
              btnDisable: false,
              verifyText: "获取验证码"
            })
          } else {
            this.setData({
              verifyText: `${--time}后重新获取`
            })
          }
        }, 1000)
      }
      interval()
    } catch {
      this.setData({
        btnDisable: false
      })
      wx.showToast({ title: '获取验证码失败，请重新尝试' })
    }

  },

  async handleLogin() {
    // return
    this.setData({
      commitBtnDisabled: true
    })
    const { code } = await wx.login()
    if (this.data.type === '0' || this.data.type === '1') {
      // wx.navigateTo({url: '../person/person'})
      try {
        wx.showLoading({title: '正在登陆'})
        const loginRes = await loginModule.wxLogin({
          code,
          mobile_number: this.data.phoneNumber,
          verification_code: this.data.verifyCode,
          is_mobile_number_required: true,
          verification_type: 'login'
        })
        await setOautoData(loginRes.data)
        // TODO 保存userinfo
        let {user} = this.store.getState()
        user.userName = this.data.userInfo.userName
        user.avatarUrl = this.data.userInfo.avatarUrl
        this.store.setState({
          user,
        })
        wx.setStorageSync('userInfo', user)
        wx.switchTab({ url: '../person/person' })
        http.setToken(loginRes.data.token)
        await querySessionAsync()
        const uauthData = wx.getStorageSync('oauth.data')
        await queryUserInfo(uauthData.customer)
      } catch {
        wx.showToast({title: '登录失败', icon: 'error'})
      } finally {
        wx.hideLoading()
        this.setData({
          commitBtnDisabled: false
        })
      }
       
    } else if (this.data.type === '2') {
      wx.navigateBack()
    } else {
      wx.showToast({
        title: "系统错误",
        icon: "error"
      })
    }
  },

  handleCheckRegulation() {
    this.setData({
      status: this.data.status ? 0 : 1
    })
  },

  handlePhoneNumberInput(event: WechatMiniprogram.TouchEvent) {
    this.data.phoneNumber = event.detail.value
  },
  handleVerifyCodeInput(event: WechatMiniprogram.TouchEvent) {
    this.data.verifyCode = event.detail.value
  },
  showProtocol() {
    wx.navigateTo({ url: '../protocol/protocol' })
  },

  showPrivacy() {
    wx.navigateTo({ url: '../privacy/privacy' })
  }
})