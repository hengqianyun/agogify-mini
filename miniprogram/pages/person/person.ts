// pages/person/person.ts

// import store from "../../store/index"

Page({
  /**
   * 页面的初始数据
   */
  data: {
    tools: [
      {
        label: '预约',
        icon: 'my_reserve',
        url: 'reserveList/reserveList',
        size: 58
      },
      {
        label: '订单',
        icon: 'my_order',
        url: 'orderList/orderList',
        size: 58
      },
      {
        label: '收藏',
        icon: 'my_collection',
        url: 'collectionPage/collectionPage',
        size: 58
      },
    ],
    personTools: [
      {
        label: '地址簿',
        icon: 'my_dizhibu',
        url: 'addressPage/addressPage',
        size: 58
      },
      {
        label: '积分',
        icon: 'my_jifen',
        url: 'pointsPage/pointsPage',
        size: 58
      },
      {
        label: '实名认证',
        icon: 'shimingrenzheng',
        url: 'ocr/ocr',
        size: 58
      },
      {
        label: '修改手机号',
        icon: 'xiugaishoujihao',
        url: 'bindPhone/bindPhone?type=2',
        size: 58
      },
      {
        label: '语言偏好设置',
        icon: 'my_jifen',
        url: 'languageSetting/languageSetting',
        size: 58
      },

      // {
      //   label: '客服',
      //   icon: 'my_kefu',
      //   url: '',
      //   size: 58
      // },
    ],
    height: 0,
    position: {},
    userName: '',
    avatar: '',
  },

  // store: store,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.setData({
      height: getApp().globalData.height,
      position: getApp().globalData.position
    })
    console.log(this.data.position)
    // const {user} = this.store.getState()
    // console.log(user)
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
  showProtocol() {
    wx.navigateTo({ url: '../protocol/protocol' })
  },

  showPrivacy() {
    wx.navigateTo({ url: '../privacy/privacy' })
  },

  async handleLogout() {
    await wx.clearStorageSync()
    // let {user} = this.store.getState()
    // user.userName = ''
    // user.avatarUrl = ''
    // this.store.setState({
    //   user,
    // })
  },

  navigateTo(event: WechatMiniprogram.TouchEvent) {
    const {url} = event.currentTarget.dataset
    if(url === 'loginPage' && this.data.userName !== '') {
      return
    }
    //   if (this.store.getState().user.userName) return
    // } else if (!this.store.getState().user.userName) {
    //   wx.navigateTo({
    //     url: `../loginPage/loginPage`
    //   })
    //   return 
    // }
    if (this.data.userName === '') {
      wx.navigateTo({
        url: '../loginPage/loginPage'
      })
    } else {
      wx.navigateTo({
        url: `../${url}`
      })
    }
  }
})