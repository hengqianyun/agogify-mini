import TIM from '../tim_SDK.js'
import TIMUploadPlugin from 'tim-upload-plugin';
import { $emit } from '../../utils/event';
import genTestUserSig, { SDKAPPID } from '../../debug/GenerateTestUserSig.js';
import sessionModule from '../../http/module/session.js';
import CustomMessageTypes from './custom_message_types'
import { userProfile } from '../user/user.js';

let hasReady = false

 export interface IMessageCallBack {
  success?: Function,
  failed?: Function,
  send?: Function,
}

export default class IMClient {
  private static instance: IMClient

  private tim: TIMSKD
  private timerMap: Map<String, { timer: number, success?: Function }> = new Map()

  private constructor() {
    this.tim = TIM.create({
      SDKAppID: SDKAPPID
    })
    this.tim.registerPlugin({ 'tim-upload-plugin': TIMUploadPlugin })
    registerEvents(this.tim)
  }

  public static getInstance(isLogin = false): IMClient {
    if (isLogin) {
      return this.instance
    }
    if (!this.instance) {
      this.instance = new IMClient()
      return this.instance
    } else if (!hasReady) {
      throw Error('IMSDK not ready')
    } else {
      console.debug('获取到了IMClient 的 instance')
      return this.instance
    }
  }

  public logout() {
    this.tim.logout()
  }

  public login(userID: string) {
    const { userSig } = genTestUserSig(userID)
    try {
      this.tim.login({
        userID,
        userSig,
      })
    } catch {
      throw Error('im login 失败')
    }
  }

  public quitGroup(groupID: string) {
    this.tim.quitGroup(groupID)
  }

  public async createCustomMessage(options: TIMCreateCustomMessageParamsPayload, groupid: string, saleId: string) {
    return await this.tim.createCustomMessage({
      to: groupid,
      conversationType: "GROUP",
      payload: { ...options, description: JSON.stringify({ userID: userProfile.pathId, saleId }) }
    })
  }

  public async createTextMessage(groupId: string, text: string) {
    return await this.tim.createTextMessage({
      to: groupId,
      conversationType: "GROUP",
      payload: {
        text: text
      }
    })
  }

  /**
   * 发送群组文本消息
   * @param groupId 
   * @param text 
   * @returns TIMSendMessageRes
   */
  public async sendGroupTextMessage(groupId: string, text: string) {
    const message = await this.createTextMessage(groupId, text)
    const res = await this.tim.sendMessage(message)
    return res
  }

  /**
   * 发送自定义群消息
   * @param options 
   * @param groupid 
   * @param userID 
   * @param saleId 
   * @param data 
   * @param inserDB 
   */
  public async sendGroupCustomMessage(options: TIMCreateCustomMessageParamsPayload, groupid: string, saleId: string, data: IMessageCallBack, inserDB: boolean = true) {
    if (!!data.send) {
      data.send()
    }

    try {
      const message = await this.createCustomMessage(options, groupid, saleId)
      const res = await this.tim.sendMessage(message)

      if (inserDB) {
        console.debug('开始设置timer')
        let seq = res.data.message.time.toString()
        this.timerMap.set(seq, {
          timer: setTimeout(async () => {
            console.log('success 触发了')
            try {
              await sessionModule.createMessageLocks({
                code: seq,
                customer: userProfile.pathId,
                sales: saleId,
              })
              console.debug('创建messageLock成功，说明对方未收到消息，执行failed')
              if (!!data.failed) {
                data.failed()
              }

            } catch (err: any) {
              console.debug('创建messageLock失败，说明对方收到了消息，执行success')
              if (err.data.statusCode == 422 && !!data.success) {
                data.success()
              }
            } finally {
              this.clearAckTimeout(seq)
              wx.hideLoading()
            }
          }, 8000), success: data.success
        })
      }
    } catch {
      if (!!data.failed) {
        data.failed()
      }
    }
  }

  /**
   * 发送回执
   * @param options 
   * @param groupid 
   * @param userID 
   * @param saleId 
   * @param seq 
   */
  public async sendAck(options: TIMCreateCustomMessageParamsPayload, groupid: string, userID: string, saleId: string, seq: string) {
    try {
      sessionModule.createMessageLocks({
        code: seq,
        sales: saleId,
        customer: userID,
      })
      const message = await this.createCustomMessage(options, groupid, saleId)
      await this.tim.sendMessage(message)
    } catch { }
  }

  /**
   * 清除计时器
   * @param seq 设置定时器，自定义消息需要严格同步
   */
  public clearAckTimeout(seq: string) {
    if (this.timerMap.has(seq)) {
      if (!!this.timerMap.get(seq)!.success) {
        this.timerMap.get(seq)!.success!()
      }
      clearTimeout(this.timerMap.get(seq)!.timer)
      this.timerMap.delete(seq)
      console.debug(seq + 'timer cleared')
    }
  }

  /**
   * 重置计时器map
   */
  public resetTimerAndSeq() {
    this.timerMap.clear()
  }

  /**
   * 加入群组
   * @param groupID 
   * @param options
   */
  public async joinGroup(groupID: string, options: { type: TIMGroupTypes }) {
    try {
      await this.tim.joinGroup({ groupID, type: options.type })
    } catch {
      // 加入异常处理
      console.debug('加入群聊失败')
      throw Error('加入群聊失败')
    }
  }

}



const registerEvents = (tim: TIMSKD) => {
  console.debug('im bind event')
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
const onReadyStateUpdate = ({ name }: TIMEvent<Array<any>>) => {
  const isSDKReady = (name === TIM.EVENT.SDK_READY)
  console.debug('IM SDK ready')
  console.debug(isSDKReady)
  if (isSDKReady) {
    wx.hideLoading()
    hasReady = true
    // _hasReady = true
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
const messageReceived = (event: TIMEvent<TIMMessage>) => {
  // 分发至视频页面
  let payloadData: any;
  if (payloadData && payloadData.to === userProfile.pathId) {

    $emit({
      name: 'onMessageEvent',
      data: event
    })
    $emit({
      name: 'onCustomMessageRecvEvent',
      data: event
    })
  } else {
    $emit({
      name: 'onGroupMessageRecvEvent',
      data: event
    })
  }
}

/**
 * 群组更新回调
 */
const groupListUpdate = () => { }



Object.seal(IMClient.getInstance())
