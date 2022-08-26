// pages/person/person.ts
import { shareInvite } from '../../libs/share'
import { getInviteCode, resetUserProfile, setReceivedInviteCode, userProfile } from '../../libs/user/user'
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
      // {
      //   label: '积分',
      //   icon: 'my_jifen',
      //   url: 'pointsPage/pointsPage',
      //   size: 58
      // },
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
      {
        label: '优惠券',
        icon: 'my_youhuiquan',
        url: 'coupons/coupons',
        size: 58
      },
      {
        label: '消息',
        icon: 'my_xiaoxi',
        url: 'messageList/messageList',
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
    tabBarHeight: 0
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
    let height = wx.getStorageSync<number | string>('tabbarHeight')
    height = !height ? 0 : height
    this.setData({
      tabBarHeight: height as number
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3    // 根据tab的索引值设置
      })
    }
    if (!!userProfile && !!userProfile.nickName && !!userProfile.avatar) {
      this.setData({
        userName: userProfile.nickName,
        avatar: userProfile.avatar
      })
    }
    const { inviteCode } = this.options
    if (!!inviteCode) {
      setReceivedInviteCode(inviteCode)
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
  onShareAppMessage(option) {
    const { from } = option
    if (from === 'button') {
      const opt = shareInvite('/pages/person/person', getInviteCode())
      console.log(opt)
      return opt
    }
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
    const { url } = event.currentTarget.dataset
    if (url === 'loginPage/loginPage' && this.data.userName !== '') {
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