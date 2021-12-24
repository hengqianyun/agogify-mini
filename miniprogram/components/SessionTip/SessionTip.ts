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
      wx.navigateTo({
        url: `../room/room?storeId=${code}&saleId=${salesId}&type=${1}`
      })
    },
    handleDialogCancel() {
      this.setData({
        showDialog: false
      })
    },
  }
})
