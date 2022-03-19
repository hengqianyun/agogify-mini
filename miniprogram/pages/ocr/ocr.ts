import { BASEURL } from "../../http/index"
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
    const resData = await ocrModule.getToken()
    console.log(resData)
    const { access_token } = resData.data
    this.setData({
      access_token: access_token
    })
    const hasRealNameCertified = getIfUserHasTheRealNameBeenCertified()
    if (hasRealNameCertified) {
      await this.queryUserInfo()
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

  async queryUserInfo() {
    try {
      this.setData({
        'form.firstName.value': userProfile.firstName,
        'form.identity.value': userProfile.identityNumber,
        'form.lastName.value': userProfile.lastName,
        hasRealNameCertified: userProfile.hasTheRealNameBeenCertified
      })
    } catch {
      wx.showToast({
        title: '网络错误'
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
        console.log(base64)
        that.setData({
          identityBase64: base64,
          identityPath: tempPath,
        })

        // wx.getFileInfo()
        return
        try {
          wx.showLoading({ title: '上传识别中' })
          await that.uploadImage(that.data.identityPath, 'identity-front')
          const ocrRes = await userModule.getOcrInfo()
          const { IdNum, Name } = ocrRes.data["identity-front"]
          that.setData({
            userName: Name,
            userNumber: IdNum
          })
        } catch (err: any) {
          if (err.data.code == 500) {
            console.log(err)
            wx.showModal({
              title: "图片无法识别",
              showCancel: false,
              confirmText: "我知道了"
            })
          } else {
            wx.showModal({
              title: "发生错误，请重试",
              showCancel: false,
              confirmText: "我知道了"
            })
          }
        } finally {
          wx.hideLoading()
        }


        return
        wx.uploadFile({
          filePath: tempPath,
          name: 'file',
          header: { authorization: http.defaultConfig.header.authorization },
          // url: `https://api.weixin.qq.com/cv/ocr/idcard?type=photo&access_token=${wxTokenRes.data.access_token}`,
          url: BASEURL + 'store/id-card-ocr-requests',
          success(res) {
            console.log(res.data)
            const { name, id, errcode } = JSON.parse(res.data)
            if (errcode === 101001) {
              // wx.showToast({
              //   title: "未找到身份证照片",
              //   icon: "error"
              // })
              wx.showModal({
                title: "图片无法识别",
                showCancel: false,
                confirmText: "我知道了"
              })
            }
            that.setData({
              userName: name,
              userNumber: id
            })
          },
          fail(err) {
            console.log(err)
            wx.showToast({
              title: "网络错误",
              icon: "error"
            })
          }
        })
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
      }
    })
  },

  async handleCommit() {
    const { firstName, lastName, identity } = this.data.form
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
    if (!this.data.identityPath) {
      wx.showToast({ title: "上传证件正面照", icon: "error" })
      return
    }
    if (!this.data.passportBase64) {
      wx.showToast({ title: "上传证件背面照", icon: "error" })
      return
    }
    // if (!this.data.base64) {
    //   wx.showToast({ title: "请选择人像照片", icon: "error" })
    //   return
    // }
    this.setData({
      commitBtnDisabled: true
    })

    // wx.showLoading({ title: '正在对比人像...' })
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
        this.setData({
          commitBtnDisabled: false
        })
        return
      }
    }
    try {
      await this.uploadImage(this.data.passportPath, 'identity-back')
      // await this.uploadImage(this.data.portraitPath, 'portrait')
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

      if (!!err && err.statusCode === 400) {
        const data = JSON.parse(err.data)
        wx.showModal({
          title: '识别失败',
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
        commitBtnDisabled: false
      })
      return
    }
    wx.hideLoading()
    this.setData({
      hasRealNameCertified: true
    })
    wx.showModal({
      title: "提交成功",
      showCancel: false,
      confirmText: "我知道了",
      success() {
        setIfUserHasTheRealNameBeenCertified(true)
        wx.navigateBack()
      }
    })
    return
    try {
      const res = await ocrModule.baiduOCR(this.data.access_token, {
        image: this.data.base64,
        id_card_number: this.data.userNumber,
        name: this.data.userName
      })
      const { result, error_code } = res.data
      if (error_code === 222356) {
        wx.hideLoading()
        wx.showModal({
          title: "图片无法识别",
          showCancel: false,
          confirmText: "我知道了"
        })
      } else if (result.score < 80) {
        wx.hideLoading()
        wx.showModal({
          title: "认证失败",
          showCancel: false,
          confirmText: "我知道了"
        })
      } else {
        try {
          await this.uploadImage(this.data.passportPath, 'identity-back')
          await this.uploadImage(this.data.identityPath, 'identity-front')
          // await this.uploadImage(this.data.portraitPath, 'portrait')
          await this.putUserInfo()
        } catch {
          wx.showModal({
            title: "网络错误",
            showCancel: false,
            confirmText: "我知道了"
          })
          wx.hideLoading()
          return
        }
        wx.hideLoading()
        wx.showModal({
          title: "实名认证已通过",
          showCancel: false,
          confirmText: "我知道了",
          success() {
            setIfUserHasTheRealNameBeenCertified(true)
            wx.navigateBack()
          }
        })
      }
    } catch (err) {
      wx.showModal({
        title: "网络错误",
        showCancel: false,
        confirmText: "我知道了"
      })
      wx.hideLoading()
      return
    } finally {
      this.setData({
        commitBtnDisabled: false
      })
    }
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
    const { firstName, lastName, identity } = this.data.form
    try {
      await userModule.putCustomerInfo({
        lastName: lastName.value,
        firstName: firstName.value,
        // firstName: 'firstName',
        // lastName: 'lastName',
        identityType: 'identity',
        // identityNumber: this.data.userNumber.toString(),
        identityNumber: identity.value,
      }, userProfile.id)
    } catch (err) {
      throw err;
    }
  }
})