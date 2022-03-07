

declare class TIMSKD {
  setLogLevel: (level: number) => void

  registerPlugin: (options: {[key: string]: Function}) => void

  login: (options: {userID: string, userSig: string}) => Promise<void>

  logout: () => Promise<void>

  on: (eventName: String, handle: (event: TIMEvent) => void, context?: TIMSKD) => void

  off: (eventName: String, handle: (event: TIMEvent) => void, context?: TIMSKD) => void

  destroy: () => void

  joinGroup: (option: {groupID: string, applyMessage?: string, type: TIMGroupTypes}) => Promise<any>

  quiteGroup: (groupId: string) => Promise<any>

  getMyProfile: () => Promise<TIMUserInfoRequestData>

  updateMyProfile: (options: {nick: string, avatar: string}) => Promise<any>

  getConversationList: (conversationId: string[]) => Promise<any>

  createTextMessage: (options: TIMCreateTextMessageParams) => Promise<TIMMessage>

  createImageMessage: (options: TIMCreateImageMessageParams) => Promise<TIMMessage>

  createCustomMessage: (options: TIMCreateCustomMessageParams) => Promise<TIMMessage>

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
  data: string // 自定义消息的数据字段
  description?: string // 自定义消息的说明字段
  extension?: string // 自定义消息的扩展字段
}

declare interface TIMEvent {
  name: string
  data?: TIMEventData
}

declare interface TIMEventData {
  code: number
  message: string
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
declare type TIMMEssageFlow = "in" | 'out' // in为收到的消息，out为发出的消息
declare type TIMMessageStatus = 'unSend' | 'success' | 'fail' // unsend未发送
declare type TIMGroupTypes = 'Public' | 'ChatRoom' | 'AVChatRoom' // 陌生人群、临时会议群、直播群

declare interface TIMMessageReceive {
  name: string
  data: {0: TIMMessage}
}

declare interface TIMSendMessageRes {
  name: string
  data: {message: TIMMessage}
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
  ID: string // 消息id
  type: TIMMessageType
  payload: TIMMessagePayload
  conversationID: string
  conversationType: conversationType
  to: string // 接收方UserId
  from: string // 发送方UserId
  flow: TIMMEssageFlow // 
  time: number // 消息时间戳
  status: TIMMessageStatus
  sequence: number
  nick: string
  avatar: string
  clientSequence: number
  cloudCustomData: string // 消息自定义数据（云端保存，会发送到对端，程序卸载重装后还能拉取到，v2.10.2起支持）
  conversationSubType: string | undefined
}

declare type TIMHistory = {[key: string]: TIMMessage[]}

// export = TIM