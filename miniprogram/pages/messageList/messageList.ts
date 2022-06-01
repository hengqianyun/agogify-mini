import { getConversationList, getUserProfile } from "../../libs/tim/tim"
import { formatTime, localMonth, timeFormat } from "../../utils/util"

// pages/messageList/messageList.ts

type UserState = 'online' | 'offline' | 'busy'

interface MessageItem {
  avatar: string
  storeName: string
  salesName: string
  date: Date
  dateCN: string
  count: number
  state: UserState
  stateCN: string
  id: string
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    messageList: [] as MessageItem[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    const res = await getConversationList()
    console.log(res)
    const c2cList = res.data.conversationList.filter(e => e.type === 'C2C')
    const currentTime = Date.now()
    const targetList: MessageItem[] = [];
    for (let e of c2cList) {
      const time = new Date(e.lastMessage.lastTime * 1000)
      let dateCN = this.formatTime(e.lastMessage.lastTime * 1000, currentTime)
      targetList.push({
        avatar: !e.userProfile.avatar ? '../../assets/image/userAvator.png' : e.userProfile.avatar,
        storeName: 'IRERI',
        salesName: e.userProfile.nick,
        date: time,
        dateCN,
        count: e.unreadCount,
        state: 'offline',
        stateCN: '空闲中',
        id: e.conversationID
      })
    }
    this.setData({
      messageList: targetList
    })
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
  handleTap() {
    wx.navigateTo({
      url: '../chatPage/chatPage'
    })
  },

  formatTime(sourceTime: number, today: number) {
    // 一天的秒数
    const daySec = 24 * 60 * 60
    const twoDaySec = daySec * 2

    const diff = today - sourceTime

    if (diff > twoDaySec) {
      return localMonth(new Date(sourceTime))
    } else if (diff > daySec) {
      return '昨天'
    } else {
      return timeFormat(new Date(sourceTime), 'hh:mm')
    }
  }
})