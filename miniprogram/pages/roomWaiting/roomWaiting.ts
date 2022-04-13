import CustomMessageTypes from "../../libs/tim/custom_message_types"
import { clearAckTimeout, joinStoreGroup, quitGroup, sendAck, sendAckAsync, sendCustomMessage } from "../../libs/tim/tim"
import { userProfile } from "../../libs/user/user"
import { $on, $remove } from '../../utils/event'
import { clearSessionAsync } from "../../utils/querySession"

// pages/roomWaiting/roomWaiting.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    storeGroupId: '',
    saleId: '',
    showBusyDialog: false,
    showDialog: true,
    callTimer: 0,
    type: '',
    storeId: '',
    bookingCode: '',
    waitingText: '',
    isGuest: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    const { storeId, saleId, type, bookingCode } = this.options as { storeId: string, saleId: string, type: string, bookingCode: string }
    this.setData({
      storeGroupId: `${storeId}_Meeting`,
      type,
      storeId,
      saleId,
      bookingCode,
      waitingText: type === 'reserveIn' ? '等待销售开启视频' : '正在呼叫中……'
    })
    wx.setNavigationBarTitle({ title: type === 'reserveIn' ? '预约' : '通话' })

    /**
     * 接受storeGroup信息，包含进入房间、挂断电话
     */
    $on({
      name: "onCustomMessageRecvEvent",
      tg: this,
      success: async (res: TIMMessageReceive) => {
        const data = res.data[0]
        let payloadData: any;
        try {
          payloadData = JSON.parse(data.payload.data)
        } catch (err) { }
        if (payloadData && payloadData.to === userProfile.pathId) {
          switch (payloadData.type) {
            case CustomMessageTypes.START_VIDEO:
              /**
               * 销售接通电话，通知用户进入房间，携带房间id和AVChatGroupId
               * 跳转至roomPage，携带房间id，avChatRoomId,店铺ID，销售id
               */
              clearTimeout(this.data.callTimer)
              await sendAckAsync({ data: 'ack', description: "succesee" }, `${this.data.storeId}_Meeting`, this.data.saleId, data.time.toString())
              console.debug('发送进入房间ack完成')
              let url =  `../room/room?roomId=${payloadData.roomId}&storeGroupId=${this.data.storeGroupId}&avGroupId=${payloadData.groupId}&storeId=${storeId}&saleId=${saleId}`
              if (this.data.isGuest) {
                url += '&share=1'
              }
              wx.redirectTo({
                url,
              })
              break
            case CustomMessageTypes.NOW_BUSY:
              clearTimeout(this.data.callTimer)
              this.setData({
                showBusyDialog: true
              })
              quitGroup(this.data.storeGroupId)
              break
            case 'ack':
              clearAckTimeout(payloadData.seq)
              break
          }
          if (payloadData.type !== 'ack' && payloadData.type !== CustomMessageTypes.TIMELEFT_CHECK && payloadData.type != CustomMessageTypes.START_VIDEO) {
            console.debug(`waitingRoom has send ack witch seq = ${data.time.toString()}`)
            sendAck({ data: 'ack', description: "succesee" }, `${this.data.storeId}_Meeting`, this.data.saleId, data.time.toString())
            console.debug(`接受了seq为${data.time.toString()}的ack`)
          }
        }
      }
    })
    // if ()
  },

  onUnload() {
    $remove({
      name: "onCustomMessageRecvEvent",
      tg: this,
    })
  },

  handleBusy() {
    this.setData({
      showDialog: false,
    })
    wx.navigateBack()
  },

  /**
   * 取消通话，发送对应消息
   */
  async handleHangUp() {
    await sendCustomMessage({ data: CustomMessageTypes.HANG_UP, description: "succesee" }, this.data.storeGroupId, this.data.saleId, {}, {})
    quitGroup(this.data.storeGroupId)
    clearSessionAsync()
    clearTimeout(this.data.callTimer)
    wx.navigateBack()
  },

  /**
   * 注意事项弹框确认,开始初始化
   */
  handleDialogCommit() {
    this.setData({
      showDialog: false,
    })
    this.init()
  },
  /**
   * 在用户接受弹框条款后的初始化，主要为消息模块
   */
  async init() {
    const {sessionCode} = this.options
    const roomId = this.data.storeGroupId + '-' + sessionCode
    await joinStoreGroup(this.data.storeGroupId)
    switch (this.data.type) {
      case 'needService':
        /**
         * 用户点击立即通话，8秒未收到回执则连接失败，弹框提示并退出，清除拨打电话计时器
         */
        sendCustomMessage({ data: CustomMessageTypes.NEED_SERVICE, }, this.data.storeGroupId, this.data.saleId, {
          failed: () => {
            clearTimeout(this.data.callTimer)
            wx.showModal({
              title: '链接失败，请重试',
              showCancel: false,
              success: async () => {
                sendCustomMessage({ data: CustomMessageTypes.HANG_UP, description: userProfile.avatar }, this.data.storeGroupId, this.data.saleId, {}, {} , false)
                wx.setStorageSync('session', null)
                wx.navigateBack()
              }
            })
          }
        }, {avatar: userProfile.avatar})
        this.setCallTimeOut()
        break;
      case 'reserveIn':
        /**
         * 预约进入房间，用户可提前进入。进入房间不需求得到回执，也无需计时
         */
        await sendCustomMessage({
          data: CustomMessageTypes.RESERVE_ENTER_ROOM
        }, this.data.storeGroupId, this.data.saleId, {}, {
          bookingCode: this.data.bookingCode
        });
        const {owner} = this.options
        if (owner != userProfile.pathId) {
          this.data.isGuest = true
        }
        break
      case "sessionIn":
        /**
         * 用户通过未完成session进入房间，直接进入即可，携带一个sessionCode以表示由session进入
         */
        wx.redirectTo({
          url: `../room/room?roomId=${roomId}&storeGroupId=${this.data.storeGroupId}&avGroupId=${roomId}&storeId=${this.data.storeId}&saleId=${this.data.saleId}&sessionCode=${sessionCode}`
        })
        break
      case "shareIn":
        wx.redirectTo({
          url: `../room/room?roomId=${roomId}&storeGroupId=${this.data.storeGroupId}&avGroupId=${roomId}&storeId=${this.data.storeId}&saleId=${this.data.saleId}&sessionCode=${sessionCode}&share=1`
        })
        break
      default:
        /**
         * 跳转到当前页面未携带type参数，报错并退出
         */
        const that = this
        wx.showModal({
          title: '错误',
          content: '未知错误',
          showCancel: false,
          confirmText: '我知道了',
          success() {
            quitGroup(that.data.storeGroupId)
            wx.navigateBack()
          }
        })
    }
  },
  /**
   * 用户不同意弹框条款，退出界面
   */
  handleDialogCancel() {
    wx.navigateBack()
  },
  /**
   * 设置拨打电话的倒计时，60s无应答则退出
   */
  setCallTimeOut() {
    this.setData({
      callTimer: setTimeout(async () => {
        await sendCustomMessage({ data: CustomMessageTypes.HANG_UP, description: "succesee" }, this.data.storeGroupId, this.data.saleId, {}, {})
        clearSessionAsync()
        wx.navigateBack()
      }, 60000)
    })
  }

})