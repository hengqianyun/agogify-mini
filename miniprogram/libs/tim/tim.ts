import IMClient, { IMessageCallBack } from "./tim_core";
import CustomMessageTypes from './custom_message_types'
import { userProfile } from "../user/user";

export const logout = () => IMClient.getInstance().logout()

export const imLogin = (userId: string) => IMClient.getInstance(true).login(userId)

export const sendCustomMessage = (options: TIMCreateCustomMessageParamsPayload, groupid: string, saleId: string, data: IMessageCallBack, excess: Object, inserDB: boolean = true) => IMClient.getInstance().sendGroupCustomMessage(options, groupid, saleId, data, excess, inserDB)

export const sendTextMessage = (groupID: string, text: string) => IMClient.getInstance().sendGroupTextMessage(groupID, text)

export const joinStoreGroup = async (groupID: string) => await IMClient.getInstance().joinGroup(groupID, { type: 'ChatRoom' })

export const joinSessionGroup = async (groupID: string, flag = false) => {
  try {
    return await IMClient.getInstance().joinGroup(groupID, { type: 'AVChatRoom' })
  } catch (err) {
    if (!flag) {

      await IMClient.getInstance().quitGroup(groupID)
      await joinSessionGroup(groupID, !flag);
    } else {
      throw err
    }
  }
}

export const quitGroup = async (groupId: string) => await IMClient.getInstance().quitGroup(groupId)

export const sendAck = (options: TIMCreateCustomMessageParamsPayload, groupid: string, saleId: string, seq: string) => IMClient.getInstance().sendAck(options, groupid, saleId, seq)

export const sendAckAsync = async (options: TIMCreateCustomMessageParamsPayload, groupid: string, saleId: string, seq: string) => await IMClient.getInstance().sendAck(options, groupid, saleId, seq)

export const clearAckTimeout = (seq: string) => IMClient.getInstance().clearAckTimeout(seq)

export const resetTimerAndSeq = () => IMClient.getInstance().resetTimerAndSeq()

export const sendImageMessage = async (groupID: string, conversationType: conversationType, file: WechatMiniprogram.ChooseImageSuccessCallbackResult, onProgress: (percent: number) => void, sendCb: () => void) => IMClient.getInstance().sendImageMessage(groupID, conversationType, file, onProgress, sendCb)

export const updateProfile = () => IMClient.getInstance().updateProfile(userProfile.nickName, userProfile.avatar)

export const sendC2CTextMessage = (to: string, text: string) => IMClient.getInstance().sendC2CTextMessage(to, text)

export const getConversationList = (ids?: string[]) => IMClient.getInstance().getConversationList(ids)

export const getUserProfile = (ids: string[]) => IMClient.getInstance().getUserProfile(ids)

export const setMsgRead = (conversationID: string) => IMClient.getInstance().setMessageRead(conversationID)

export const getMessageList = (conversationID: string, count: number, nextReqMessageID?: string) => IMClient.getInstance().getMessageList(conversationID, count, nextReqMessageID)
// export const clearAckTimeout = (seq: string) => IMClient.getInstance().