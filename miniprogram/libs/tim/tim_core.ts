import TIM from '../tim_SDK.js'
import TIMUploadPlugin from 'tim-upload-plugin';
import { $emit } from '../../utils/event';
import genTestUserSig from '../../debug/GenerateTestUserSig.js';

interface TimSkdSign {
  SDKAppID: number
  userSig: string
}

let _tim: TIMSKD
let _userID: string
let _hasReady = false

export default class IMClient {
  private static instance: IMClient

  private tim: TIMSKD
  private userId: string

  private constructor() {
    this.tim = _tim
    this.userId = _userID
  }

  public static getInstance(): IMClient {
    if (!this.instance) {
      this.instance  = new IMClient()
    }
    return this.instance
  }

  public logout() {
    this.tim.logout()
  }

  public login(userID: string) {
    const { userSig } = genTestUserSig(userID)
    this.userId = userID
    try {
      this.tim.login({
        userID,
        userSig,
      })
    } catch {}
  }
}

IMClient.getInstance()


/**
 * 
 * @param userID 
 * @param sign 
 * @returns TIMSKD instance
 */
export const init = (userID: string, sign: TimSkdSign) => {
  if (!!_tim) {
    return _tim
  }

  const { SDKAppID, userSig } = sign

  // 创建IM实例
  _tim = TIM.create({
    SDKAppID
  })
  // 设置日志等级
  _tim.setLogLevel(0)

  _tim.registerPlugin({ 'tim-upload-plugin': TIMUploadPlugin })

  // 初始化监听事件
  registerEvents(_tim)

  _userID = userID

  return _tim
}

export const imLoing = (userID: string) => {
  const { userSig } = genTestUserSig(userID)
  try {
    _tim.login({
      userID,
      userSig
    })
  } catch {}
}

export const imLogout = () => {
  _tim.logout()
  _userID = ''
}

const registerEvents = (tim: TIMSKD) => {
  tim.on(TIM.EVENT.SDK_READY, onReadyStateUpdate)
  tim.on(TIM.EVENT.SDK_NOT_READY, onReadyStateUpdate)

  tim.on(TIM.EVENT.KICKED_OUT, kickOut)
  tim.on(TIM.EVENT.ERROR, onError)

  tim.on(TIM.EVENT.MESSAGE_RECEIVED, messageReceived)
  tim.on(TIM.EVENT.GROUP_LIST_UPDATED, groupListUpdate)
}

/**
 * tim sdk ready 回调
 * @param param0 
 */
const onReadyStateUpdate = ({ name }: TIMEvent) => {
  const isSDKReady = (name === TIM.EVENT.SDK_READY)

  if (isSDKReady) {
    wx.hideLoading()
    _hasReady = true
  } else {
    /// TODO 小程序需要重新login
    wx.hideLoading()
    wx.showModal({
      title: '登录失败，请重新登录',
      showCancel: false,
      success() {
        /// TODO 清除登录信息
      }
    })
  }
}

/**
 * 被踢下线回调
 */
const kickOut = () => {
  wx.showModal({
    title: '您在账号在别处登录',
    confirmText: '重新登录',
    cancelText: '我知道了',
    success: (res) => {
      if (res.confirm) {
        /// TODO relogin
      } else {
        /// TODO logout and back to homepage 
      }
    }
  })
}

/**
 * tim 各种错误回调
 */
const onError = () => { }

/**
 * tim收到消息回调
 * @param event 
 */
const messageReceived = (event: TIMEvent) => {
  // 分发至视频页面
  $emit({
    name: 'onMessageEvent',
    data: event
  })
}

/**
 * 群组更新回调
 */
const groupListUpdate = () => { }
