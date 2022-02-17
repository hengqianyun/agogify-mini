// pages/languageSetting/languageSetting.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    options: [
      {label: '仅接受使用中文沟通的专柜', value: '1', status: 0},
      {label: '接受中英文翻译', value: '2', status: 0},
      {label: '中英文沟通均无障碍', value: '3', status: 1},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

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

  handleChange(event: WechatMiniprogram.TouchEvent) {
    const {index} = event.currentTarget.dataset as {index: number}
    for (let i = 0; i < this.data.options.length; i++) {
      this.setData({
        ['options[' + i + '].status']: i === index ? 1 : 0
      })
    }
  }
})