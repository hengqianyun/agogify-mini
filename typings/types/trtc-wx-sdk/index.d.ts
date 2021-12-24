/// <reference path="./params.d.ts" />

declare module 'trtc-wx-sdk' {
  class TRTC {
    constructor(context: WechatMiniprogram.Page.Instance<{}, {}>)

    createPusher(pusherConfig: PusherAttributesParams): PusherInstance

    enterRoom(params: EnterRoomParams): PusherAttributes

    exitRoom(): {pusher: PusherInstance, playerList: PlayerListItem[]}

    getPusherInstance(): PusherInstance

    getPlayerInstance(id: string): PlayerInstance

    setPusherAttributes(params: PusherAttributesParams): PusherAttributes

    setPlayerAttributes(id: string, params: PlayerAttributesParams): PlayerListItem[]

    getPlayerList(): PlayerListItem[]

    on(EventCode: TRTCEvent, handler: Function, context: WechatMiniprogram.Page.Instance<{}, {}>): void

    off(EventCode: TRTCEvent, handler: Function): void

    pusherEventHandler(event: WechatMiniprogram.TouchEvent): void
    pusherNetStatusHandler(event: WechatMiniprogram.TouchEvent): void
    pusherErrorHandler(event: WechatMiniprogram.TouchEvent): void
    pusherBGMStartHandler(event: WechatMiniprogram.TouchEvent): void
    pusherBGMProgressHandler(event: WechatMiniprogram.TouchEvent): void
    pusherBGMCompleteHandler(event: WechatMiniprogram.TouchEvent): void
    pusherAudioVolumeNotify(event: WechatMiniprogram.TouchEvent): void

    playerEventHandler(event: WechatMiniprogram.TouchEvent): void
    playerFullscreenChange(event: WechatMiniprogram.TouchEvent): void
    playerNetStatus(event: WechatMiniprogram.TouchEvent): void
    playerAudioVolumeNotify(event: WechatMiniprogram.TouchEvent): void

    // eventBind() {}
    EVENT: {
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
  }

  export = TRTC
}
