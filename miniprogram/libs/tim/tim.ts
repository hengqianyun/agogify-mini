import IMClient from "./tim_core";
import CustomMessageTypes from './custom_message_types'

export const logout = () => IMClient.getInstance().logout()

export const login = (userId: string) => IMClient.getInstance().login(userId)

export const sendCustomMessage = () => IMClient.getInstance()

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