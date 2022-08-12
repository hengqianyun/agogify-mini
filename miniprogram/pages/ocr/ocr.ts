import { BASEURL, POST } from "../../http/index"
import ocrModule from "../../http/module/ocr"
import userModule from "../../http/module/user"
import http from "../../libs/http"
import { getIfUserHasTheRealNameBeenCertified, setIfUserHasTheRealNameBeenCertified } from "../../libs/user/user"
import { userProfile } from "../../libs/user/user"

type inputKeyType = 'firstName' | 'lastName' | 'identity'

// pages/ocr/ocr.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    userNumber: '',
    base64: '' as string | ArrayBuffer,
    portraitPath: '',
    access_token: '',
    passportBase64: '' as string | ArrayBuffer,
    passportPath: '',
    identityBase64: '' as string | ArrayBuffer,
    identityPath: '',
    commitBtnDisabled: false,
    hasRealNameCertified: false,
    form: {
      firstName: { focus: false, error: false, value: '', errorMsg: '请输入正确的姓氏' },
      lastName: { focus: false, error: false, value: '', errorMsg: '请输入正确的名字' },
      identity: { focus: false, error: false, value: '', errorMsg: '请输入正确的身份证号' },
      email: { focus: false, error: false, value: '', errorMsg: '请输入正确的邮箱账号' },
      // firstName: { focus: false, error: false, value: '磊', errorMsg: '请输入正确的姓氏' },
      // lastName: { focus: false, error: false, value: '衡', errorMsg: '请输入正确的名字' },
      // identity: { focus: false, error: false, value: '510922199606248173', errorMsg: '请输入正确的身份证号' },
      // firstName: { focus: false, error: false, value: '浩', errorMsg: '请输入正确的姓氏' },
      // lastName: { focus: false, error: false, value: '徐', errorMsg: '请输入正确的名字' },
      // identity: { focus: false, error: false, value: '330922199803070032', errorMsg: '请输入正确的身份证号' },
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    this.queryUserInfo()
    // const resData = await ocrModule.getToken()
    // console.log(resData)
    // debugger
    // const { access_token } = resData.data
    // this.setData({
    //   access_token: access_token
    // })
    // const hasRealNameCertified = getIfUserHasTheRealNameBeenCertified()
    // console.log(hasRealNameCertified)
    // if (hasRealNameCertified) {
    //   await this.queryUserInfo()
    // }
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

  async queryUserInfo() {
    try {
      this.setData({
        'form.firstName.value': userProfile.firstName,
        'form.identity.value': userProfile.identityNumber,
        'form.lastName.value': userProfile.lastName,
        'form.email.value': userProfile.email,
        hasRealNameCertified: userProfile.hasTheRealNameBeenCertified,
        identityBase64: '值',
        identityPath: POST + '/assets/app/img/identity-mock-front.png',
        passportBase64: '值',
        passportPath: POST + '/assets/app/img/identity-mock-back.png'
      })
    } catch {
      wx.showToast({
        title: '网络错误',
        icon: 'error',
        duration: 2000,
      })
    }
  },

  handleInput(event: WechatMiniprogram.TouchEvent) {
    const { key } = event.currentTarget.dataset as { key: inputKeyType }
    const { value } = event.detail
    this.setData({
      [`form.${key}.value`]: value
    })
  },
  handleFocus(event: WechatMiniprogram.TouchEvent) {
    const { key } = event.currentTarget.dataset as { key: inputKeyType }
    this.setData({
      [`form.${key}.focus`]: true
    })
  },
  handleBlur(event: WechatMiniprogram.TouchEvent) {
    const { key } = event.currentTarget.dataset as { key: inputKeyType }
    this.setData({
      [`form.${key}.focus`]: false
    })
  },
  chooseImage() {
    const that = this

    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      async success(res) {
        let tempPath = res.tempFilePaths[0]; //获取选择的图片的地址
        var size = res.tempFiles[0].size
        const maxSize = 5 * 1024 * 1024
        if (size > maxSize) {
          const quality = Math.floor(maxSize / size)
          wx.compressImage({
            src: tempPath,
            quality,
            async success(res) {
              tempPath = res.tempFilePath
            }
          })
        }
        var base64 = await wx.getFileSystemManager().readFileSync(tempPath);
        console.log(tempPath)
        that.setData({
          identityBase64: base64,
          identityPath: tempPath,
        })

        // wx.getFileInfo()
        return
      }
    })
  },

  chooseBackImage() {
    const that = this

    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      async success(res) {
        let tempPath = res.tempFilePaths[0]; //获取选择的图片的地址
        var base64 = await wx.getFileSystemManager().readFileSync(tempPath);
        that.setData({
          passportBase64: base64,
          passportPath: tempPath,
        })

      }
    })
  },

  handleChooseImage() {
    const that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      async success(res) {
        let tempPath = res.tempFilePaths[0]; //获取选择的图片的地址
        const base64 = await wx.getFileSystemManager().readFileSync(tempPath, 'base64');
        that.setData({
          base64: base64,
          portraitPath: tempPath,
        })
        console.log(tempPath)
      }
    })
  },

  async handleCommit() {
    const { firstName, lastName, identity, email } = this.data.form
    if (firstName.value.trim() == '' || firstName.value.length > 2) {
      this.setData({
        'form.firstName.error': true
      })
      return
    } else {
      this.setData({
        'form.firstName.error': false
      })
    }
    if (lastName.value.trim() == '' || lastName.value.length > 2) {
      this.setData({
        'form.lastName.error': true
      })
      return
    } else {
      this.setData({
        'form.lastName.error': false
      })
    }
    if (identity.value.trim() == '' || identity.value.length !== 18) {
      this.setData({
        'form.identity.error': true
      })
      return
    } else {
      this.setData({
        'form.identity.error': false
      })
    }
    const reg = new RegExp(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ )
    if (!reg.test(email.value)) {
      this.setData({
        'form.email.error': true
      })
      return
    } else {
      this.setData({
        'form.email.error': false
      })
    }
    if (!this.data.identityPath) {
      wx.showToast({ title: "上传证件正面照", icon: "error", duration: 2000, })
      return
    }
    if (!this.data.passportBase64) {
      wx.showToast({ title: "上传证件背面照", icon: "error", duration: 2000, })
      return
    }
    this.setData({
      commitBtnDisabled: true
    })
    wx.showLoading({ title: '正在提交...' })
    try {
      await this.uploadImage(this.data.identityPath, 'identity-front')
    } catch (err: any) {
      if (err.statusCode === 500) {
        wx.showModal({
          title: "网络错误",
          showCancel: false,
          confirmText: "我知道了"
        })
        wx.hideLoading()
        userProfile.firstName = ''
        userProfile.lastName = ''
        userProfile.hasTheRealNameBeenCertified = false
        this.setData({
          commitBtnDisabled: false
        })
        return
      }
    }
    try {
      await this.uploadImage(this.data.passportPath, 'identity-back')
      await this.putUserInfo()
      const ocrRes = await userModule.getOcrInfo()
      const { ValidDate } = ocrRes.data["identity-back"]
      const lastDate = ValidDate.split('-')[1]
      if (Date.parse(lastDate) < Date.now()) {
        wx.showModal({
          title: '错误',
          content: '身份证有效期错误',
          showCancel: false,
          confirmText: '我知道了'
        })
      } else {

      }
      
    } catch (err: any) {
      console.log('err ---->', err)
      const msg = err.data.message as string
      if (!!err && err.statusCode === 400) {
        wx.showModal({
          title: '识别失败',
          showCancel: false,
          confirmText: "我知道了"
        })
      } else if (msg.includes('sylius_customer.UNIQ')) {
        wx.showModal({
          title: "身份证已被绑定",
          showCancel: false,
          confirmText: "我知道了"
        })
      } else {
        wx.showModal({
          title: "网络错误",
          showCancel: false,
          confirmText: "我知道了"
        })
      }
      wx.hideLoading()
      this.setData({
        commitBtnDisabled: false,
        hasRealNameCertified: false
      })
      userProfile.hasTheRealNameBeenCertified =false
      return
    }
    wx.hideLoading()
    this.setData({
      hasRealNameCertified: true
    })
    const that = this
    wx.showModal({
      title: "提交成功",
      showCancel: false,
      confirmText: "我知道了",
      success() {
        const { firstName, lastName, identity } = that.data.form
        userProfile.firstName = firstName.value
        userProfile.lastName = lastName.value
        userProfile.identityNumber = identity.value
        userProfile.hasTheRealNameBeenCertified = true
        wx.navigateBack()
      }
    })
    return
  },

  success() {

  },

  async uploadImage(path: string, type: string) {
    return new Promise((resove, rej) => {
      wx.uploadFile({
        timeout: 600000,
        filePath: path,
        name: 'file',
        url: BASEURL + 'store/customer-images',
        header: { Authorization: 'Bearer ' + userProfile.token },
        formData: {
          type: type,
        },
        success(res) {
          if (res.statusCode === 500 || res.statusCode === 400) {
            rej(res)
          }
          console.log('success')
          resove(res)
        },
        fail() {
          console.log('fail')
          rej()
        }
      })
    })

  },

  async putUserInfo() {
    const { firstName, lastName, identity, email } = this.data.form
    try {
      await userModule.putCustomerInfo({
        lastName: lastName.value,
        firstName: firstName.value,
        // firstName: 'firstName',
        // lastName: 'lastName',
        identityType: 'identity',
        // identityNumber: this.data.userNumber.toString(),
        identityNumber: identity.value,
        email: email.value
      }, userProfile.id)
    } catch (err) {
      throw err;
    }
  }
})