import loginModule from "../../http/module/login"
import { updateProfile } from "../../libs/tim/tim"
import { login, userProfile } from "../../libs/user/user"
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
    // const { code } = await wx.login()
    if (this.data.type === '0' || this.data.type === '1') {
      // wx.navigateTo({url: '../person/person'})
      try {
        wx.showLoading({title: '正在登陆'})
         await login({
          mobileNumber: this.data.phoneNumber,
          verificationCode: this.data.verifyCode,
          isMobileNumberRequired: true,
          provider: 'mobile'
        })
        userProfile.avatar = this.data.userInfo.avatarUrl
        userProfile.nickName = this.data.userInfo.userName
        updateProfile()
        wx.switchTab({ url: '../person/person' })
        await querySessionAsync()
      } catch {
        wx.showToast({title: '登录失败', icon: 'error'})
      } finally {
        wx.hideLoading()
        this.setData({
          commitBtnDisabled: false
        })
      }
       
    } else if (this.data.type === '2') {
      /// TODO 修改手机号
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