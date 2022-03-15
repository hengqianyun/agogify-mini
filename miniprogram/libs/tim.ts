import TIM from './tim_SDK.js'
import TIMUploadPlugin from 'tim-upload-plugin';
import { $emit } from '../utils/event';
import sessionModule from '../http/module/session.js';
import { userProfile } from './user/user.js';
// import store from '../store';

let _tim: TIMSKD
let _userID = ''
let _saleId = ''
let _AVChatGroupId = '' // 直播群id
let _StoreMeetingGroupId = '' // 店铺meeting group id
let _isReady = false
let _hasSendNeedService = false
let _timer = 0
const _timerMap: Map<String, { timer: number, success?: Function }> = new Map()

export class CustomMessageTypes {

  static NEED_SERVICE = 'NEED_SERVICE';
  /// 销售通知客户进行支付操作
  static PAY = 'PAY';

  /// 客户通知销售支付已完成
  static PAY_FINISHED = 'PAY_FINISHED';

  /// 客户通知销售订单确认完毕
  static ORDER_COMPLETE = 'ORDER_COMPLETE'

  /// 客户通知销售支付取消
  static PAY_CANCELED = 'PAY_CANCELED';

  /// 销售通知客户进入视频
  static START_VIDEO = 'START_VIDEO';

  /// 销售通知客户端离开视频
  static DISPOSE = "DISPOSE";

  static LEAVED_ROOM = "LEAVED_ROOM"

  static NOW_BUSY = 'NOW_BUSY'

  /// 客户通知销售取消通话
  static HANG_UP = 'HANG_UP'

  /// 客户通知销售自己已经通过预约进入房间
  static RESERVE_ENTER_ROOM = 'RESERVE_ENTER_ROOM';

  /// 是否ready 进入房间
  static READY_ENTER_ROOM = 'READY_ENTER_ROOM';

  /// 销售通知客户重试
  static RETRY = 'RETRY';

  /// 倒计时校准
  static TIMELEFT_CHECK = 'TIMELEFT_CHECK';

  /// 询问订单状态
  static ASK_FOR_ORDER_STATE = 'ASK_FOR_ORDER_STATE'
  static TELLING_THE_ORDER_STATE = 'TELLING_THE_ORDER_STATE'

  /// 客户没有查询到订单信息，通知销售重新发送
  static RE_SEND = 'RE_SEND'

  /// 销售通知用户扫描完毕
  static SCAN_FINISH = 'SCAN_FINISH'
}

export const initTim = (userID: string, { sdkAppID: SDKAppID, userSig }: { sdkAppID: number, userSig: string }, storeId: string, saleId: string, isReserve: boolean, isReconnect?: boolean,) => {

  _hasSendNeedService = false
  _StoreMeetingGroupId = `${storeId}_Meeting`

  _saleId = saleId
  if (_tim) {
    if (!isReconnect) neetService()
    else if (isReserve) joinReserve()
    return _tim
  }

  // 创建IM实例
  const tim = TIM.create({
    SDKAppID
  })
  // 设置日志等级
  tim.setLogLevel(0)



  // wx.defineProperty
  // Object.defineProperty(wx, 'tim', tim)
  _tim = tim

  tim.registerPlugin({ 'tim-upload-plugin': TIMUploadPlugin })

  // 初始化监听事件
  registerEvents(tim)
  // 登录im
  try {

    tim.login({
      userID,
      userSig,
    })



  } catch (err) {

    console.log(err)
  }
  _userID = userID

  if (isReserve) {
    _timer = setInterval(() => {
      if (_isReady && !_hasSendNeedService) {

        _hasSendNeedService = true
        joinReserve()
        clearInterval(_timer)
      }
    }, 500)
  } else if (!isReconnect) {
    _timer = setInterval(() => {
      if (_isReady && !_hasSendNeedService) {
        _hasSendNeedService = true
        neetService()
        clearInterval(_timer)
      }
    }, 500)
  } else {
    _timer = setInterval(() => {
      if (_isReady && !_hasSendNeedService) {
        _hasSendNeedService = true
        console.log('session in')
        joinStoreGroup()
        // session()
        clearInterval(_timer)
      }
    }, 500)
  }


  return tim
}

export const logoutTim = () => {
  // logoutEvent();
  _tim.destroy();
}

export const quiteGroup = (groupId: string) => {
  try {
    _tim.quiteGroup(groupId)
  } catch(err) {}
}

function registerEvents(tim: TIMSKD): void {
  // logoutEvent()
  tim.on(TIM.EVENT.SDK_READY, onReadyStateUpdate)
  tim.on(TIM.EVENT.SDK_NOT_READY, onReadyStateUpdate)

  tim.on(TIM.EVENT.KICKED_OUT, kickOut)
  tim.on(TIM.EVENT.ERROR, onError)

  tim.on(TIM.EVENT.MESSAGE_RECEIVED, messageReceived)
  tim.on(TIM.EVENT.GROUP_LIST_UPDATED, groupListUpdate)
}

function logoutEvent(): void {
  _tim.off(TIM.EVENT.SDK_READY, onReadyStateUpdate)
  _tim.off(TIM.EVENT.SDK_NOT_READY, onReadyStateUpdate)

  _tim.off(TIM.EVENT.KICKED_OUT, kickOut)
  _tim.off(TIM.EVENT.ERROR, onError)

  _tim.off(TIM.EVENT.MESSAGE_RECEIVED, messageReceived)
  _tim.off(TIM.EVENT.GROUP_LIST_UPDATED, groupListUpdate)
}

async function onReadyStateUpdate({ name }: TIMEvent) {
  const isSDKReady = (name === TIM.EVENT.SDK_READY)

  if (isSDKReady) {
    _isReady = isSDKReady
    _tim.getMyProfile().then((res) => {
      console.log('用户个人信息', res)
      if (res.data.nick == '') {
        _tim.updateMyProfile({ nick: userProfile.nickName, avatar: userProfile.nickName })
      }
    })

  }
}

function kickOut(event: TIMEvent) {
  // store.dispatch('resetStore')
  wx.showToast({
    title: '你已被踢下线',
    icon: 'none',
    duration: 1500
  })
  setTimeout(() => {
    wx.reLaunch({
      url: '../login/main'
    })
  }, 500)
}

function onError(event: TIMEvent) {
  // 网络错误不弹toast && sdk未初始化完全报错
  if (event.data?.message && event.data.code && event.data.code !== 2800 && event.data.code !== 2999) {
    // store.commit('showToast', {
    //   title: event.data.message,
    //   duration: 2000
    // })
  }
}

function messageReceived(event: TIMEvent) {
  $emit({
    name: 'onMessageEvent',
    data: event
  })
}

function groupListUpdate(event: TIMEvent) {
  // store.commit('updateGroupList', event.data)
}

export async function getHistory(groupId: string) {
  try {
    const historyList: TIMHistory = await wx.getStorageSync('group_history')
    if (historyList[groupId]) {
      return historyList[groupId]
    } else {
      return []
    }
  } catch {
    return []
  }
}

export async function setHistory(message: TIMMessage) {
  const { conversationID } = message
  let historyList: TIMHistory = await wx.getStorageSync('group_history')
  historyList = clearHistort(historyList)
  if (historyList) {
    let conversationHistory = historyList[conversationID]
    if (conversationHistory && conversationHistory[conversationHistory.length - 1].ID !== message.ID) {
      conversationHistory.push(message)
    } else {
      historyList[conversationID] = [message]
    }
    wx.setStorageSync('group_history', historyList)
  } else {
    const historyLisyData: TIMHistory = {}
    historyLisyData[conversationID] = [message]
    wx.setStorageSync('group_history', historyLisyData)
  }
}

function clearHistort(historyList: TIMHistory) {
  for (let key in historyList) {
    const item = historyList[key][0]
    if (item) {
      const { time } = item
      const date = Date.now() / 1000
      if (time + 86400 < date) {
        delete historyList[key]
      }
    } else {
      delete historyList[key]
    }
  }
  return historyList
}

const joinStoreGroup = async () => {
  try {
    // 加入店铺Meeting 群
    const res = await _tim.joinGroup({ groupID: _StoreMeetingGroupId, type: 'ChatRoom' })
  } catch {
    // 加入异常处理
    console.log('加入群聊失败')
  }
}

// const session = async () => {
//   await sendCustomMessage({ data: CustomMessageTypes.ASK_FOR_ORDER_STATE, }, _StoreMeetingGroupId, _userID, _saleId, {})
// }

const neetService = async () => {
  await joinStoreGroup()
  // 创建自定义信息
  await sendCustomMessage({ data: CustomMessageTypes.NEED_SERVICE, }, _StoreMeetingGroupId, _userID, _saleId, {
    failed: () => {
      wx.showModal({
        title: '链接失败，请重试',
        showCancel: false,
        success: async () => {
          await sendCustomMessage({ data: CustomMessageTypes.HANG_UP, description: "succesee" }, _StoreMeetingGroupId, _userID, _saleId, {}, false)
          wx.setStorageSync('session', null)
          wx.navigateBack()
        }
      })
    }
  })
  // const message = await _tim.createCustomMessage({
  //   to: _StoreMeetingGroupId,
  //   conversationType: "GROUP",
  //   payload: {
  //     data: CustomMessageTypes.NEED_SERVICE,
  //     description: JSON.stringify({ userID: _userID, saleId: _saleId })
  //   }
  // })
  // // 发送信息
  // try {
  //   const res = await _tim.sendMessage(message)
  // } catch (err) {
  //   console.log('发送消息失败')
  // }
}

const joinReserve = async () => {
  await joinStoreGroup()

  await sendCustomMessage({
    data: CustomMessageTypes.RESERVE_ENTER_ROOM
  }, _StoreMeetingGroupId, _userID, _saleId, {
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

  // const message = await _tim.createCustomMessage({
  //   to: _StoreMeetingGroupId,
  //   conversationType: "GROUP",
  //   payload: {
  //     data: CustomMessageTypes.RESERVE_ENTER_ROOM,
  //     description: JSON.stringify({ userID: _userID, saleId: _saleId })
  //   }
  // })


  // try {
  //   const res = await _tim.sendMessage(message)
  // } catch (err) {
  //   console.log('发送消息失败')
  // }
}

export const sendCustomMessage = async (options: TIMCreateCustomMessageParamsPayload, groupid: string, userID: string, saleId: string, data: {
  success?: Function,
  failed?: Function,
  send?: Function,
}, inserDB: boolean = true) => {
  if (!!data.send) {
    data.send()
  }
  
  try {
    const message = await _tim.createCustomMessage({
      to: groupid,
      conversationType: "GROUP",
      payload: { ...options, description: JSON.stringify({ userID, saleId }) }
    })
    const res = await _tim.sendMessage(message)
    if (inserDB) {
      console.debug('开始设置timer')
      let seq = res.data.message.time.toString()
      _timerMap.set(seq, {
        timer: setTimeout(async () => {
          console.log('success 触发了')
          try {
            await sessionModule.createMessageLocks({
              code: seq,
              customer: userID,
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
            clearAckTimeout(seq)
            wx.hideLoading()
          }
        }, 8000), success: data.success
      })
    }
    return res
  } catch {
    if (!!data.failed) {
      data.failed()
    }
  }
  // if (item && item.status === 'success') {}
}

export const sendAck = async (options: TIMCreateCustomMessageParamsPayload, groupid: string, userID: string, saleId: string, seq: string) => {
  try {
    sessionModule.createMessageLocks({
      code: seq,
      sales: saleId,
      customer: userID,
    })
    const message = await _tim.createCustomMessage({
      to: groupid,
      conversationType: "GROUP",
      payload: { ...options, description: JSON.stringify({ userID, saleId, seq }), }
    })
    const res = await _tim.sendMessage(message)
    return res
  } catch { }
}

export const clearAckTimeout = (seq: string) => {
  if (_timerMap.has(seq)) {
    if (!!_timerMap.get(seq)!.success) {
      _timerMap.get(seq)!.success!()
    }
    clearTimeout(_timerMap.get(seq)!.timer)
    _timerMap.delete(seq)
    console.debug(seq + 'timer cleared')
  }
}

export const sendTextMessage = async (groupId: string, text: string) => {
  const message = await _tim.createTextMessage({
    to: groupId,
    conversationType: "GROUP",
    payload: {
      text: text
    }
  })

  const res = await _tim.sendMessage(message)

  return res
}

export const resetTimerAndSeq = () => {
  _timerMap.clear()
}
