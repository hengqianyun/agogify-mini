// pages/portrait/portrait.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: '',
    userName: '',
    languages: [
      {label: '仅接受使用中文沟通的专柜', value: '1', checked: false},
      {label: '接受中英文翻译', value: '2', checked: false},
      {label: '中英文沟通均无障碍', value: '3', checked: true},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // wx.
    const userInfo = wx.getStorageSync<WechatMiniprogram.UserInfo>('userInfo')
    if (!!userInfo && !!userInfo.nickName && !!userInfo.avatarUrl) {
      this.setData({
        userName: userInfo.nickName,
        avatar: userInfo.avatarUrl
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
    const userInfo = wx.getStorageSync<WechatMiniprogram.UserInfo>('userInfo')
    if (!!userInfo && !!userInfo.nickName && !!userInfo.avatarUrl) {
      this.setData({
        userName: userInfo.nickName,
        avatar: userInfo.avatarUrl
      })
    }
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

  handleLanguageChange(event: WechatMiniprogram.TouchEvent) {
    console.log(event)
    const { index } = event.currentTarget.dataset
    const {languages} = this.data
    languages.forEach((e ,i) => {
      e.checked = i === index
    })
    this.setData({
      languages
    })
  },

  handleInput({detail}: WechatMiniprogram.TouchEvent) {
    const {value} = detail
    this.setData({
      userName: value
    })
  } ,

  handleChooseImage() {
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
            // identityBase64: base64,
            avatar: tempPath,
          })
      }
    })
  },

  handleSave() {}
})