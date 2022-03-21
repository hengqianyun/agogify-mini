import sessionModule from "../../http/module/session"
import { clearSessionAsync } from "../../utils/querySession"
import { getIdFromString } from "../../utils/util"

// components/SessionTip/SessionTip.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    showDialog: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleShow() {
      this.setData({
        showDialog: true
      })
    },
    handleDialogCommit() {
      const session = wx.getStorageSync<sessionDesign.session>('session')
      const {"@id": salesId, store} = session.sales
      const {code} = store
      const meetingGroup = `${code}_Meeting`
      const avchatGroupId = `${meetingGroup}-${getIdFromString(salesId)}`
      console.log(meetingGroup)
      console.log(avchatGroupId)
      this.setData({
        showDialog: false
      })
      // const type = session.type === 'booking' ? 2 : '1'
      
      wx.navigateTo({
        url: `../roomWaiting/roomWaiting?storeId=${code}&saleId=${salesId}&type=sessionIn&sessionCode=${session.code}`
      })
    },
    async handleDialogCancel() {
      const session = wx.getStorageSync<sessionDesign.session>('session')
      const {code} = session
      console.log(code)
      try {
        wx.showLoading({title: '处理中...'})
        await sessionModule.putSession({
          droppedByCustomer: true
          // endTime: (new Date()).toISOString(),
          // state: 'ended',
        }, code)
        wx.hideLoading()
        this.setData({
          showDialog: false
        })
        clearSessionAsync()
        this.triggerEvent('handleCancel', true)
      } catch {
        wx.hideLoading()
        wx.showToast({
          title: '处理失败，请重试',
          icon: 'error'
        })
      }
    },
  }
})
