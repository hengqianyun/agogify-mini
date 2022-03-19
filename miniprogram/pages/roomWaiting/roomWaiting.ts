import CustomMessageTypes from "../../libs/tim/custom_message_types"
import { joinStoreGroup, needService, quitGroup, sendCustomMessage } from "../../libs/tim/tim"
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    debugger
    const { storeId, saleId, type } = this.options as { storeId: string, saleId: string, type: string }
    this.setData({
      storeGroupId: `${storeId}_Meeting`
    })
    await joinStoreGroup(this.data.storeGroupId)
    switch (type) {
      case 'needService':
        sendCustomMessage({ data: CustomMessageTypes.NEED_SERVICE, }, this.data.storeGroupId, saleId, {
          failed: () => {
            wx.showModal({
              title: '链接失败，请重试',
              showCancel: false,
              success: async () => {
                sendCustomMessage({ data: CustomMessageTypes.HANG_UP, description: "succesee" }, this.data.storeGroupId, saleId, {}, false)
                wx.setStorageSync('session', null)
                wx.navigateBack()
              }
            })
          }
        })
        break;
      case 'reserveIn':
        await sendCustomMessage({
          data: CustomMessageTypes.RESERVE_ENTER_ROOM
        }, this.data.storeGroupId, saleId, {
          failed: () => {
            wx.showModal({
              title: '链接失败，请重试',
              showCancel: false,
              success: () => {
                wx.navigateBack()
              }
            })
          }
        });
        break
      case "sessionIn":
        wx.navigateTo({
          url: `../room/room?groupID=${this.data.storeGroupId}&saleId=${saleId}`
        })
        break
      default:
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
    $on({
      name: "onMessageEvent",
      tg: this,
      success: (res: TIMMessageReceive) => {
        const data = res.data[0]
        let payloadData: any;
        try {
          payloadData = JSON.parse(data.payload.data)
        } catch (err) { }
        if (payloadData && payloadData.to === userProfile.pathId) {
          switch (payloadData.type) {
            case CustomMessageTypes.START_VIDEO:
              wx.navigateTo({
                url: `../room/room/roomId=${payloadData.roomId}`
              })
              break
            case CustomMessageTypes.NOW_BUSY:
              this.setData({
                showBusyDialog: true
              })
              break
          }
        }
      }
    })
    // if ()
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

  onUnload() {
    $remove({
      name: "onMessageEvent",
      tg: this,
    })
  },

  handleBusy() {
    this.setData({
      showDialog: false,
    })
    quitGroup(this.data.storeGroupId)
    wx.navigateBack()
  },

  async handleHangUp() {
    await sendCustomMessage({ data: CustomMessageTypes.HANG_UP, description: "succesee" }, this.data.storeGroupId, this.data.saleId, {})
    quitGroup(this.data.storeGroupId)
    clearSessionAsync()
    wx.navigateBack()
  },

  handleDialogCommit() {
    this.setData({
      showDialog: false,
    })
  },
  handleDialogCancel() {
    quitGroup(this.data.storeGroupId)
    wx.navigateBack()
  }

})