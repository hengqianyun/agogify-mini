// pages/room/room.ts
import genTestUserSig from '../../debug/GenerateTestUserSig.js'
import TRTC from 'trtc-wx-sdk'
import { $emit } from '../../utils/event.js'
import { IMAGEBASEURL, IMAGEPATHS } from '../../http/index.js'
import storeModule from '../../http/module/store.js'
import { shareVideo } from '../../libs/share.js'
import { userProfile } from '../../libs/user/user.js'
import { joinSessionGroup, sendCustomMessage } from '../../libs/tim/tim.js'
import CustomMessageTypes from '../../libs/tim/custom_message_types.js'
import sessionModule from '../../http/module/session.js'
import { clearSessionAsync } from '../../utils/querySession.js'

let trtcClient: TRTC
Page({
  data: {
    _rtcConfig: {
      sdkAppID: '', // 必要参数 开通实时音视频服务创建应用后分配的 sdkAppID
      userID: '', // 必要参数 用户 ID 可以由您的帐号系统指定
      userSig: '', // 必要参数 身份签名，相当于登录密码的作用
    },
    groupId: '',
    roomId: null as unknown as string,
    preRoomId: '', // 原始房间
    preSalesId: '', // artist
    pusher: null as any,
    playerList: [] as PlayerListItem[],
    // store
    store: { name: '', avatar: '', id: '' },
    isReconnect: false,
    saleId: '',
    storeId: '',
    enableAlertBeforeUnloadMsg: '',
    isGuest: false, // 是否为被邀请用户
    isLive: false, // 是否为直播类型
    enabledMic: true,
    isFirstIn: true,
    sessionCode: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

    const { roomId, saleId, storeId, avGroupId, storeGroupId, sessionCode, share, isLive } = this.options as { roomId: string, storeId: string, saleId: string, avGroupId: string, storeGroupId: string, sessionCode: string, share?: string, isLive?: string }
    joinSessionGroup(avGroupId)
    // 查询店铺信息
    this.queryStore(storeId)
    wx.setKeepScreenOn({
      keepScreenOn: true,
    })

    // 初始化部分数据
    this.setData({
      saleId,
      storeId,
      groupId: avGroupId,
      roomId: roomId,
      strRoomID: roomId,
      isReconnect: !!sessionCode && !share,
      isGuest: !!share,
      isLive: !!isLive,
      sessionCode
    })
    const { userSig, sdkAppID } = genTestUserSig(userProfile.pathId)
    trtcClient = new TRTC(this)
    console.log(trtcClient)
    this.init({ userID: userProfile.pathId, userSig, sdkAppID: sdkAppID + '' })
    this.bindTRTCRoomEvent()

    const that = this
    /**
     * 返回时间拦截
     */
    wx.enableAlertBeforeUnload({
      message: '是否离开房间？',
      success() {
        if (that.data.isFirstIn) {
          that.setData({
            isFirstIn: false
          })
        } else {
          console.log('触发 enableAlertBeforeUnload')
          that.exitRoom()
        }
        // if (!that.data.isGuest) {
        //   sendCustomMessage({ data: CustomMessageTypes.LEAVED_ROOM }, that.data.groupId, that.data.saleId, {}, {})
        //   const code = that.data.groupId.split('Meeting-')[1]
        //   sessionModule.putSession({
        //     droppedByCustomer: true
        //   }, code)
        //   clearSessionAsync()
        // }
        
      }
    })
  },

  onShow() {
    setTimeout(() => {
      this.setData({
        playerList: this.data.playerList
      })
    }, 1000)
  },

  changeRoom(e: any) {
    const detail = e.detail
    console.log(detail)
    let preRoomId = this.data.roomId
    let preSalesId = this.data.saleId
    this.setData({
      roomId: detail.roomId,
      preRoomId,
      preSalesId,
      saleId: detail.saleId
    })
    trtcClient.exitRoom()
    this.enterRoom({ roomID: this.data.roomId })
    wx.createLivePusherContext().setMICVolume({
      volume: Number(!this.data.enabledMic)
    })
  },

  backRoom() {
    this.setData({
      roomId: this.data.preRoomId,
      saleId: this.data.preSalesId
    })
    trtcClient.exitRoom()
    this.enterRoom({ roomID: this.data.roomId })
    wx.createLivePusherContext().setMICVolume({
      volume: Number(this.data.enabledMic)
    })
  },

  onReady() {
    console.debug('room ready')
    setTimeout(() => {
      this.enterRoom({ roomID: this.data.roomId })
    }, 0)
  },
  onUnload() {
    console.debug('room unload')
    // this.exitRoom()
  },

  onShareAppMessage(option) {
    const { from } = option
    if (from === 'button') {
      return shareVideo(userProfile.nickName!, this.data.sessionCode, '/pages/share/share', this.data.groupId, { salesId: this.data.saleId, storeId: this.data.storeId })
    }
  },

  async queryStore(code: string) {
    wx.showLoading({ title: '' })
    const resData = await storeModule.queryStoreDetails(code)
    if (resData.data.logo)
      resData.data.logo.path = IMAGEBASEURL + IMAGEPATHS.storeNormal1x + resData.data?.logo?.path
    if (resData.data.images.length > 0) {
      resData.data.images[0].path = IMAGEBASEURL + IMAGEPATHS.storeSmall1x + resData.data.images[0].path
    }
    wx.hideLoading()
    this.setData({
      store: { id: code, avatar: resData.data.logo.path, name: resData.data.name },
    })
  },

  init(options: { userSig: string, sdkAppID: string, userID: string }) {
    const pusherConfig: PusherAttributesParams = {
      mode: 'live', // RTC：实时通话，live：直播模式
      enableCamera: false, // 是否开启摄像头
      enableMic: true, // 是否开启麦克风
      enableAgc: false, // 是否开启音频自动增益，该特性可以补偿部分手机麦克风音量太小的问题，但也会放大噪音，建议配合 ANS 同时开启
      enableAns: false, // 是否开启音频噪声抑制，该特性会自动检测背景噪音并进行过滤，但也会误伤周围的音乐，只有会议、教学等场景才适合开启
      minBitrate: 600, // 
      beautyLevel: 0, // 美颜 0-9 0关闭
      whitenessLevel: 0, // 美白 0-9 0关闭
    }
    if (this.data.isLive) {
      wx.createLivePusherContext().setMICVolume({
        volume: Number(this.data.enabledMic)
      })
    }
    const pusher = trtcClient.createPusher(pusherConfig)
    this.setData({
      _rtcConfig: {
        userID: options.userID,
        sdkAppID: options.sdkAppID,
        userSig: options.userSig,
      },
      pusher: pusher.pusherAttributes
    })
  },

  enterRoom({ roomID }: { roomID: string }) {
    console.debug('enter room');
    console.log('roomID', roomID)
    const trtcConfig = { ...this.data._rtcConfig, strRoomID: roomID } as EnterRoomParams
    this.setData({
      pusher: trtcClient.enterRoom(trtcConfig),
    }, () => {
      wx.createLivePusherContext().start()
      // trtcClient.getPusherInstance().start() // 开始推流
    })

  },

  setMicStatus() {
    console.debug('触发更改mic事件')
    this.setData({
      enabledMic: !this.data.enabledMic
    }, () => {
      wx.createLivePusherContext().setMICVolume({
        volume: Number(this.data.enabledMic)
      })
    })
  },

  exitRoom() {
    const result = trtcClient.exitRoom()
    wx.setStorageSync('session', null)
    this.setData({
      pusher: result.pusher,
      playerList: result.playerList,
    })
    const code = this.data.sessionCode
    sessionModule.putSession({
      droppedByCustomer: true
    }, code)
    clearSessionAsync()
  },

  // 设置 pusher 属性
  setPusherAttributesHandler(options: PusherAttributesParams) {
    this.setData({
      pusher: trtcClient.setPusherAttributes(options),
    })
  },

  // 设置某个 player 属性
  setPlayerAttributesHandler(player: PlayerListItem, options: PlayerAttributesParams) {
    this.setData({
      playerList: trtcClient.setPlayerAttributes(player.streamID, options),
    })
  },
  // 事件监听
  bindTRTCRoomEvent() {
    const TRTC_EVENT = trtcClient.EVENT
    // 初始化事件订阅
    trtcClient.on(TRTC_EVENT.LOCAL_JOIN, (_: OnEvent) => {
      // wx.showToast({
      //   title: `进入了房间成功`,
      //   icon: 'none',
      //   duration: 2000,
      // })
    })
    // trtcClient.on(TRTC_EVENT.LOCAL_LEAVE, (event: OnEvent) => {
    // })
    // trtcClient.on(TRTC_EVENT.ERROR, (event: OnEvent) => {
    // })
    trtcClient.on(TRTC_EVENT.REMOTE_USER_JOIN, (event: OnEvent) => {
      const { userID } = event.data
      console.log(event.data)
      // wx.showToast({
      //   title: `${userID} 进入了房间`,
      //   icon: 'none',
      //   duration: 2000,
      // })
    })
    // 远端用户退出
    trtcClient.on(TRTC_EVENT.REMOTE_USER_LEAVE, (event: OnEvent) => {
      const { userID, playerList } = event.data
      console.log('用户退出',event.data)
      this.setData({
        playerList: playerList
      })
      // wx.showToast({
      //   title: `${userID} 离开了房间`,
      //   icon: 'none',
      //   duration: 2000,
      // })
    })
    // 远端用户推送视频
    trtcClient.on(TRTC_EVENT.REMOTE_VIDEO_ADD, (event: OnEvent) => {
      const { player } = event.data
      console.log('用户开始推送',event.data)
      // 开始播放远端的视频流，默认是不播放的
      this.setPlayerAttributesHandler(player, { muteVideo: false })
    })
    // 远端用户取消推送视频
    trtcClient.on(TRTC_EVENT.REMOTE_VIDEO_REMOVE, (event: OnEvent) => {
      const { player } = event.data
      this.setPlayerAttributesHandler(player, { muteVideo: true })
    })
    // 远端用户推送音频
    trtcClient.on(TRTC_EVENT.REMOTE_AUDIO_ADD, (event: OnEvent) => {
      const { player } = event.data
      this.setPlayerAttributesHandler(player, { muteAudio: false })
    })
    // 远端用户取消推送音频
    trtcClient.on(TRTC_EVENT.REMOTE_AUDIO_REMOVE, (event: OnEvent) => {
      const { player } = event.data
      this.setPlayerAttributesHandler(player, { muteAudio: true })
    })
    trtcClient.on(TRTC_EVENT.REMOTE_AUDIO_VOLUME_UPDATE, (event: OnEvent) => {
      const { playerList } = event.data
      console.log('用户音量变化',playerList)
      this.setData({
        playerList: playerList
      })
    })
    trtcClient.on(TRTC_EVENT.LOCAL_AUDIO_VOLUME_UPDATE, (event: OnEvent) => {
      const { pusher } = event.data
      this.setData({
        pusher: pusher
      })
    })
  },

  // 请保持跟 wxml 中绑定的事件名称一致
  _pusherStateChangeHandler(event: WechatMiniprogram.TouchEvent) {
    console.log(event)
    trtcClient.pusherEventHandler(event)
  },
  _pusherNetStatusHandler(event: WechatMiniprogram.TouchEvent) {
    trtcClient.pusherNetStatusHandler(event)
  },
  _pusherErrorHandler(event: WechatMiniprogram.TouchEvent) {
    trtcClient.pusherErrorHandler(event)
  },
  _pusherBGMStartHandler(event: WechatMiniprogram.TouchEvent) {
    trtcClient.pusherBGMStartHandler(event)
  },
  _pusherBGMProgressHandler(event: WechatMiniprogram.TouchEvent) {
    trtcClient.pusherBGMProgressHandler(event)
  },
  _pusherBGMCompleteHandler(event: WechatMiniprogram.TouchEvent) {
    trtcClient.pusherBGMCompleteHandler(event)
  },
  _pusherAudioVolumeNotify(event: WechatMiniprogram.TouchEvent) {
    trtcClient.pusherAudioVolumeNotify(event)
  },
  _playerStateChange(event: WechatMiniprogram.TouchEvent) {
    trtcClient.playerEventHandler(event)
  },
  _playerFullscreenChange(event: WechatMiniprogram.TouchEvent) {
    trtcClient.playerFullscreenChange(event)
  },
  _playerNetStatus(event: WechatMiniprogram.TouchEvent) {
    trtcClient.playerNetStatus(event)
  },
  _playerAudioVolumeNotify(event: WechatMiniprogram.TouchEvent) {
    trtcClient.playerAudioVolumeNotify(event)
  },


})