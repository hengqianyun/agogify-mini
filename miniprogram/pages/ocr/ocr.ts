import ocrModule from "../../http/module/ocr"

// pages/ocr/ocr.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    userNumber: '' as unknown as number,
    base64: '' as string | ArrayBuffer,
    access_token: ''
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
  chooseImage() {
    const that = this

    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      async success(res) {
        let tempPath = res.tempFilePaths[0]; //获取选择的图片的地址
        var base64 = await wx.getFileSystemManager().readFileSync(tempPath);
        that.setData({
          src: base64
        })
        const wxTokenRes = await ocrModule.getAssessToken()
        wx.uploadFile({
          filePath: tempPath,
          name: 'img',
          url: `https://api.weixin.qq.com/cv/ocr/idcard?type=photo&access_token=${wxTokenRes.data.access_token}`,
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
          fail() {
            wx.showToast({
              title: "网络错误",
              icon: "error"
            })
          }
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
          base64: base64
        })
      }
    })
  },

  async handleCommit() {
    if (!this.data.userName || !this.data.userNumber) {
      wx.showToast({title: "请选择身份证照片", icon: "error"})
      return
    }
    if (!this.data.base64) {
      wx.showToast({title: "请选择人像照片", icon: "error"})
      return
    }

    const res = await ocrModule.baiduOCR(this.data.access_token, {
      image: this.data.base64,
      id_card_number: this.data.userNumber,
      name: this.data.userName
    })
    const {result, error_code} = res.data
    console.log(res.data)
    if (error_code === 222356) {
      wx.showModal({
        title: "图片无法识别",
        showCancel: false,
        confirmText: "我知道了"
      })
      // wx.showToast({
      //   title: "图片无法识别",
      //   icon: "error"
      // })
    } else if (result.score < 80) {
      wx.showModal({
        title: "认证失败",
        showCancel: false,
        confirmText: "我知道了"
      })
    } else {
      wx.showModal({
        title: "实名认证已通过",
        showCancel: false,
        confirmText: "我知道了",
        success() {
          wx.navigateBack()
        }
      })
    }
  }
})