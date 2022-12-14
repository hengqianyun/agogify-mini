import TIM from '../tim_SDK.js'
import TIMUploadPlugin from 'tim-upload-plugin';
import { $emit } from '../../utils/event';
import genTestUserSig, { SDKAPPID } from '../../debug/GenerateTestUserSig.js';
import sessionModule from '../../http/module/session.js';
import { userProfile } from '../user/user.js';

let hasReady = false

 export interface IMessageCallBack {
  success?: Function,
  failed?: Function,
  send?: Function,
  avatar?: string
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

  public updateProfile(nick: string, avatar: string) {
    this.tim.updateMyProfile({
      nick,
      avatar
    })
  }

  public async quitGroup(groupID: string) {
    return await this.tim.quitGroup(groupID)
  }

  /**
   * 发送文本私聊
   * @param to 
   * @param text 
   */
  public async sendC2CTextMessage(to: string, text: string) {
    const msg = await this.createTextMessage(to, text, 'C2C')
    const res = await this.tim.sendMessage(msg)
    return res
  }

  public async createCustomMessage(options: TIMCreateCustomMessageParamsPayload, groupid: string, saleId: string, excess?: Object) {
    return await this.tim.createCustomMessage({
      to: groupid,
      conversationType: "GROUP",
      payload: { ...options, description: JSON.stringify({ userID: userProfile.pathId, saleId, ...excess }) }
    })
  }

  public async createTextMessage(groupId: string, text: string, type: conversationType = 'GROUP') {
    return await this.tim.createTextMessage({
      to: groupId,
      conversationType: type,
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
  public async sendGroupCustomMessage(options: TIMCreateCustomMessageParamsPayload, groupid: string, saleId: string, data: IMessageCallBack, excess: Object = {}, inserDB: boolean = true) {
    if (!!data.send) {
      data.send()
    }

    try {
      const message = await this.createCustomMessage(options, groupid, saleId, excess)
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
  public async sendAck(options: TIMCreateCustomMessageParamsPayload, groupid: string, saleId: string, seq: string) {
    try {
      sessionModule.createMessageLocks({
        code: seq,
        sales: saleId,
        customer: userProfile.pathId,
      })
      // const message = await this.createCustomMessage(options, groupid, saleId)
      const message = await this.tim.createCustomMessage({
        to: groupid,
        conversationType: "GROUP",
        payload: { ...options, description: JSON.stringify({ userID: userProfile.pathId, saleId, seq }) }
      })
      await this.tim.sendMessage(message)
      console.debug(`发送了seq为${seq}的ack`)
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
      let res = await this.tim.joinGroup({ groupID, type: options.type })
      return res
    } catch {
      // 加入异常处理
      console.debug('加入群聊失败')
      throw Error('加入群聊失败')
    }
  }

  public async createImageMessage(groupID: string, conversationType: conversationType, file: WechatMiniprogram.ChooseImageSuccessCallbackResult, onProgress: (percent: number) => void) {
    const res = await this.tim.createImageMessage({
      to: groupID,
      conversationType,
      payload: {
        file,
      },
      onProgress: onProgress
    })
    return res
  }

  public async sendImageMessage(groupID: string, conversationType: conversationType, file: WechatMiniprogram.ChooseImageSuccessCallbackResult, onProgress: (percent: number) => void, sendCb: () => void) {
    const message = await this.createImageMessage(groupID, conversationType, file, onProgress)
    this.tim.sendMessage(message).then(sendCb)
    return message
  }

  public async getConversationList(ids?: string[]) {
    return !!ids ? await this.tim.getConversationList(ids) : await this.tim.getConversationList()
   }

   public async getUserProfile(ids: string[]) {
     return await this.tim.getUserProfile({userIDList: ids})
   }

   public async setMessageRead(conversationID: string) {
       return await this.tim.setMessageRead({conversationID})
   }

   public async getMessageList(conversationID: string, count: number, nextReqMessageID?: string) {
       return await this.tim.getMessageList({conversationID, count, nextReqMessageID})
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
  console.log(event)
  // 分发至视频页面
  const data = event.data[0]
  let payloadData: any;
  // debugger
  if (data.conversationType === 'C2C') {
    $emit({
      name: 'C2CmessageReceive',
      data: event
    })
    return
  }
  try {
    payloadData = JSON.parse(data.payload.data)
  } catch (err) { }
  if (payloadData) {
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
  // if (payloadData && payloadData.to === userProfile.pathId) {
  //   $emit({
  //     name: 'onCustomMessageRecvEvent',
  //     data: event
  //   })
  // } else {
  //   $emit({
  //     name: 'onGroupMessageRecvEvent',
  //     data: event
  //   })
  // }
}

/**
 * 群组更新回调
 */
const groupListUpdate = () => { }



Object.seal(IMClient.getInstance())
