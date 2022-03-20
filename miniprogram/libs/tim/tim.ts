import IMClient, { IMessageCallBack } from "./tim_core";
import CustomMessageTypes from './custom_message_types'

export const logout = () => IMClient.getInstance().logout()

export const imLogin = (userId: string) => IMClient.getInstance(true).login(userId)

export const sendCustomMessage = (options: TIMCreateCustomMessageParamsPayload, groupid: string, saleId: string, data: IMessageCallBack, inserDB: boolean = true) => IMClient.getInstance().sendGroupCustomMessage(options, groupid, saleId, data, inserDB)

export const sendTextMessage = (groupID: string, text: string) => IMClient.getInstance().sendGroupTextMessage(groupID, text)

export const joinStoreGroup = (groupID: string) => IMClient.getInstance().joinGroup(groupID, {type: 'ChatRoom'})

export const joinSessionGroup = (groupID: string) => IMClient.getInstance().joinGroup(groupID, {type: 'AVChatRoom'})

export const quitGroup = (groupId: string) => IMClient.getInstance().quitGroup(groupId)

export const sendAck = (options: TIMCreateCustomMessageParamsPayload, groupid: string, saleId: string, seq: string) => IMClient.getInstance().sendAck(options, groupid, saleId, seq)

export const clearAckTimeout = (seq: string) => IMClient.getInstance().clearAckTimeout(seq)

export const resetTimerAndSeq = () => IMClient.getInstance().resetTimerAndSeq()
// export const clearAckTimeout = (seq: string) => IMClient.getInstance().