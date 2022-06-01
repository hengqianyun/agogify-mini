// pages/person/person.ts
import { resetUserProfile, userProfile } from '../../libs/user/user'
import { $on, $remove } from '../../utils/event'

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
        label: '个人信息',
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
    userName: '',
    avatar: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    $on({
      name: 'login_error',
      tg: this,
      success() {
        this.setData({
          userName: '',
          avatar: ''
        })
      }
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
    if (!!userProfile && !!userProfile.nickName && !!userProfile.avatar) {
      this.setData({
        userName: userProfile.nickName,
        avatar: userProfile.avatar
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
    $remove({
      name: "login_error",
      tg: this,
    })
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
    this.setData({
      userName: '',
      avatar: ''
    })
    resetUserProfile()
  },

  navigateTo(event: WechatMiniprogram.TouchEvent) {
    const {url} = event.currentTarget.dataset
    if(url === 'loginPage/loginPage' && this.data.userName !== '') {
      return
    }
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