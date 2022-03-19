import IMClient, { IMessageCallBack } from "./tim_core";
import CustomMessageTypes from './custom_message_types'

export const logout = () => IMClient.getInstance().logout()

export const imLogin = (userId: string) => IMClient.getInstance(true).login(userId)

export const sendCustomMessage = (options: TIMCreateCustomMessageParamsPayload, groupid: string, saleId: string, data: IMessageCallBack, inserDB: boolean = true) => IMClient.getInstance().sendGroupCustomMessage(options, groupid, saleId, data, inserDB)

export const joinStoreGroup = (groupID: string) => IMClient.getInstance().joinGroup(groupID, {type: 'ChatRoom'})

export const joinSessionGroup = (groupID: string) => IMClient.getInstance().joinGroup(groupID, {type: 'AVChatRoom'})

export const quitGroup = (groupId: string) => IMClient.getInstance().quitGroup(groupId)

// export const clearAckTimeout = (seq: string) => IMClient.getInstance().

export const needService = async (groupID: string, saleId: string) => {
  await IMClient.getInstance().joinGroup(groupID, {type: 'ChatRoom'})
  await IMClient.getInstance().sendGroupCustomMessage({ data: CustomMessageTypes.NEED_SERVICE, }, groupID, saleId, {
    failed: () => {
      wx.showModal({
        title: '链接失败，请重试',
        showCancel: false,
        success: async () => {
          await IMClient.getInstance().sendGroupCustomMessage({ data: CustomMessageTypes.HANG_UP, description: "succesee" }, groupID, saleId, {}, false)
          wx.setStorageSync('session', null)
          wx.navigateBack()
        }
      })
    }
  })
}

export const joinReserve = async (groupID: string, saleId: string) => {
  await IMClient.getInstance().joinGroup(groupID, {type: 'ChatRoom'})
  await IMClient.getInstance().sendGroupCustomMessage({
    data: CustomMessageTypes.RESERVE_ENTER_ROOM
  }, groupID, saleId, {
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
}

export const sessionIn = async (groupID: string) => {
  await IMClient.getInstance().joinGroup(groupID, {type: 'ChatRoom'})
}