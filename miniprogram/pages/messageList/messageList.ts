// pages/messageList/messageList.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messageList: [
      {
        avatar: 'https://rss1.agogify.cn/media/cache/resolve/store_thumbnail_normal_1x/2d/f8/79fc6b0da2b1511f2b55f3ab959f.jpg',
        storeName: 'IRERI',
        salesName: 'salesName',
        date: '晚上 7:30',
        count: 1,
        state: 'online',
        stateCN: '空闲中',
        id: 1
      },
      {
        avatar: 'https://rss1.agogify.cn/media/cache/resolve/store_thumbnail_normal_1x/2d/f8/79fc6b0da2b1511f2b55f3ab959f.jpg',
        storeName: 'IRERI',
        salesName: 'salesName',
        date: '昨天',
        count: 0,
        state: 'busy',
        stateCN: '忙碌中',
        id: 2
      },
      {
        avatar: 'https://rss1.agogify.cn/media/cache/resolve/store_thumbnail_normal_1x/2d/f8/79fc6b0da2b1511f2b55f3ab959f.jpg',
        storeName: 'IRERI',
        salesName: 'salesName',
        date: '五月29日',
        count: 11,
        state: 'offline',
        stateCN: '离线',
        id: 3
      },
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

  }
})