import TRTC from 'trtc-wx-sdk'


export default class TRTCClient {
  _context: WechatMiniprogram.Page.Instance<{}, {}>
  _trtc: TRTC
  constructor(context: WechatMiniprogram.Page.Instance<{}, {}>) {
    this._trtc = new TRTC(context)
    this._context = context
  }

  EVENT: {[key: string]: TRTCEvent} = {
    BGM_PLAY_COMPLETE: "BGM_PLAY_COMPLETE",
    BGM_PLAY_FAIL: "BGM_PLAY_FAIL",
    BGM_PLAY_PROGRESS: "BGM_PLAY_PROGRESS",
    BGM_PLAY_START: "BGM_PLAY_START",
    ERROR: "ERROR",
    IM_ERROR: "IM_ERROR",
    IM_KICKED_OUT: "IM_KICKED_OUT",
    IM_MESSAGE_RECEIVED: "IM_MESSAGE_RECEIVED",
    IM_NOT_READY: "IM_NOT_READY",
    IM_READY: "IM_READY",
    KICKED_OUT: "KICKED_OUT",
    LOCAL_AUDIO_VOLUME_UPDATE: "LOCAL_AUDIO_VOLUME_UPDATE",
    LOCAL_JOIN: "LOCAL_JOIN",
    LOCAL_LEAVE: "LOCAL_LEAVE",
    LOCAL_NET_STATE_UPDATE: "LOCAL_NET_STATE_UPDATE",
    REMOTE_AUDIO_ADD: "REMOTE_AUDIO_ADD",
    REMOTE_AUDIO_REMOVE: "REMOTE_AUDIO_REMOVE",
    REMOTE_AUDIO_VOLUME_UPDATE: "REMOTE_AUDIO_VOLUME_UPDATE",
    REMOTE_NET_STATE_UPDATE: "REMOTE_NET_STATE_UPDATE",
    REMOTE_STATE_UPDATE: "REMOTE_STATE_UPDATE",
    REMOTE_USER_JOIN: "REMOTE_USER_JOIN",
    REMOTE_USER_LEAVE: "REMOTE_USER_LEAVE",
    REMOTE_VIDEO_ADD: "REMOTE_VIDEO_ADD",
    REMOTE_VIDEO_REMOVE: "REMOTE_VIDEO_REMOVE",
    VIDEO_FULLSCREEN_UPDATE: "VIDEO_FULLSCREEN_UPDATE",
  }

  createPusher(params: PusherAttributesParams): PusherInstance {
    return this._trtc.createPusher(params)
  }

  start(option: EnterRoomParams): PusherAttributes {
    return this._trtc.enterRoom(option)
  }

  end() {
    return this._trtc.exitRoom()
  }

  on(EventCode: TRTCEvent, handler: (event: OnEvent) => void) {
    this._trtc.on(EventCode, handler, this._context)
  }

  getPusherInstance() {
    return this._trtc.getPusherInstance()
  }

  setPusherAttributes(params: PusherAttributesParams) {
    return this._trtc.setPusherAttributes(params)
  }

  setPlayerAttributes(id: string, params: PlayerAttributesParams) {
    this._trtc.setPlayerAttributes(id, params)
  }

  pusherEventHandler(event: WechatMiniprogram.TouchEvent) {
    this._trtc.pusherEventHandler(event)
  }
  pusherNetStatusHandler(event: WechatMiniprogram.TouchEvent) {
    this._trtc.pusherNetStatusHandler(event)
  }
  pusherErrorHandler(event: WechatMiniprogram.TouchEvent) {
    this._trtc.pusherErrorHandler(event)
  }
  pusherBGMStartHandler(event: WechatMiniprogram.TouchEvent) {
    this._trtc.pusherBGMStartHandler(event)
  }
  pusherBGMProgressHandler(event: WechatMiniprogram.TouchEvent) {
    this._trtc.pusherBGMProgressHandler(event)
  }
  pusherBGMCompleteHandler(event: WechatMiniprogram.TouchEvent) {
    this._trtc.pusherBGMCompleteHandler(event)
  }
  pusherAudioVolumeNotify(event: WechatMiniprogram.TouchEvent) {
    this._trtc.pusherAudioVolumeNotify(event)
  }

  playerEventHandler(event: WechatMiniprogram.TouchEvent) {
    this._trtc.playerEventHandler(event)
  }
  playerFullscreenChange(event: WechatMiniprogram.TouchEvent) {
    this._trtc.playerFullscreenChange(event)
  }
  playerNetStatus(event: WechatMiniprogram.TouchEvent) {
    this._trtc.playerNetStatus(event)
  }
  playerAudioVolumeNotify(event: WechatMiniprogram.TouchEvent) {
    this._trtc.playerAudioVolumeNotify(event)
  }
}