

declare class TIMSKD {
  setLogLevel: (level: number) => void

  registerPlugin: (options: {[key: string]: Function}) => void

  login: (options: {userID: string, userSig: string}) => Promise<void>

  logout: () => Promise<void>

  getMessageList: (option: {conversationID: string, count: number, nextReqMessageID?: string}) => Promise<any>

  setMessageRead: (option: {conversationID: string}) => Promise<void>

  on: <T>(eventName: String, handle: (event: TIMEvent<T>) => void, context?: TIMSKD) => void

  off: <T>(eventName: String, handle: (event: TIMEvent<T>) => void, context?: TIMSKD) => void

  destroy: () => Promise<void>

  joinGroup: (option: {groupID: string, applyMessage?: string, type: TIMGroupTypes}) => Promise<any>

  quitGroup: (groupId: string) => Promise<any>

  getMyProfile: () => Promise<TIMUserInfoRequestData>

  getUserProfile: (options: {userIDList: string[]}) => Promise<TIMUserInfoRequestData[]>

  updateMyProfile: (options: {nick: string, avatar: string}) => Promise<any>

  getConversationList: (conversationId?: string[]) => Promise<TIMConversationRes>

  createTextMessage: (options: TIMCreateTextMessageParams) => Promise<TIMMessage>

  createImageMessage: (options: TIMCreateImageMessageParams) => Promise<TIMMessage>

  createCustomMessage: (options: TIMCreateCustomMessageParams) => Promise<TIMMessage>

  getGroupList: () => Promise<any>

  sendMessage: (message: TIMMessage, option?: {onlineUserOnly?: boolean, offlinePushInfo?: {disablePush?: boolean, title?: string, description?: string}}) => Promise<TIMSendMessageRes>
}

declare interface TIMCreateMessageParams {
  to: string
  conversationType: conversationType
}

declare interface TIMCreateTextMessageParams extends TIMCreateMessageParams {
  payload: {
    text: string
  }
}

declare interface TIMCreateImageMessageParams extends TIMCreateMessageParams{
  payload: {
    file: Object
  }
  onProgress: (event: any) => void
}

declare interface TIMCreateCustomMessageParams extends TIMCreateMessageParams{
  payload: TIMCreateCustomMessageParamsPayload
}

declare interface TIMCreateCustomMessageParamsPayload {
  data: string // ??????????????????????????????
  description?: string // ??????????????????????????????
  extension?: string // ??????????????????????????????
}

declare interface TIMEvent<T> {
  name: string
  data: T[]
}

declare interface TIMRecvMsgEvent {
  name: string
  data: TIMMessageReceive[]
}

declare interface TIMUserInfo {
  adminForbidType: string
  allowType: string
  avatar: string
  birthday: number
  gender: string
  language: number // 0
  lastUpdatedTime: number
  level: number // 0
  location: string
  messageSettings: number // 0
  nick: string
  role: number // 0
  selfSignature: string
  userID: string
  profileCustomField: []
}

declare interface TIMUserInfoRequestData {
  code: number
  data: TIMUserInfo
}

// declare type TIMMessageType = ""
declare type conversationType = "C2C" | "GROUP"
declare type TIMMessageType = "TIMTextElem" | "TIMImageElem" | "TIMCustomElem" | "TIMGroupTipElem"
declare type TIMMEssageFlow = "in" | 'out' // in?????????????????????out??????????????????
declare type TIMMessageStatus = 'unSend' | 'success' | 'fail' // unsend?????????
declare type TIMGroupTypes = 'Public' | 'ChatRoom' | 'AVChatRoom' // ??????????????????????????????????????????

declare interface TIMMessageReceive {
  name: string
  data: {0: TIMMessage}
}

declare interface TIMSendMessageRes {
  name: string
  data: {message: TIMMessage}
}

declare interface TIMConversationRes {
  code: number
  data: {conversationList: TIMConversation[]}
}

declare interface TIMConversation {
  conversationID: string
  groupAtInfoList: any[]
  isPinned: boolean
  lastMessage: TIMLastMessage // ?????????????????????
  peerReadTime: number
  remark: string
  type: conversationType
  unreadCount: number // ???????????????
  userProfile: TIMUserInfo
}

declare interface TIMLastMessage {
  cloudCustomData: string
  fromAccount: string
  isRevoked: string
  lastSequence: number
  lastTime: number
  messageForShow: string // ?????????????????????
  onlineOnlyFlag: boolean
  payload: {text: string}
  type: TIMMessageType
}

declare interface TIMMessagePayload {
  text: string
  imageFormat: number
  imageInfoArray: TIMImageInfo[]
  data: string
  description: string
  extension: string
}

declare interface TIMImageInfo {
  url: string
}

declare interface TIMMessage {
  ID: string // ??????id
  type: TIMMessageType
  payload: TIMMessagePayload
  conversationID: string
  conversationType: conversationType
  to: string // ?????????UserId
  from: string // ?????????UserId
  flow: TIMMEssageFlow // 
  time: number // ???????????????
  status: TIMMessageStatus
  sequence: number
  nick: string
  avatar: string
  clientSequence: number
  cloudCustomData: string // ???????????????????????????????????????????????????????????????????????????????????????????????????v2.10.2????????????
  conversationSubType: string | undefined
  isRead: boolean // ??????????????????
}

declare type TIMHistory = {[key: string]: TIMMessage[]}

// export = TIM