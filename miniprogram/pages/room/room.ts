// pages/room/room.ts
import genTestUserSig from '../../debug/GenerateTestUserSig.js'
import TRTC from 'trtc-wx-sdk'
import store from '../../store/index.js'
import { $emit } from '../../utils/event.js'
import { IMAGEBASEURL } from '../../http/index.js'
import storeModule from '../../http/module/store.js'

let trtcClient: TRTC
Page({
  data: {
    _rtcConfig: {
      sdkAppID: '', // 必要参数 开通实时音视频服务创建应用后分配的 sdkAppID
      userID: '', // 必要参数 用户 ID 可以由您的帐号系统指定
      userSig: '', // 必要参数 身份签名，相当于登录密码的作用
    },
    groupId: '',
    userId: 'user0',
    roomId: null as unknown as number,
    pusher: null as any,
    playerList: [] as PlayerListItem[],
    // store
    store: { name: 'alsjdlkasjdlsaj', avatar: 'http://dummyimage.com/200x200/50B347/FFF&text=avatar', id: '1' },
    isWaiting: true,
    showDialog: true,
    isReconnect: false,
    showChat: false,
    saleId: '',
  },
  store: store,

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    const {storeId, saleId, type} = this.options as {storeId: string, saleId: string, type: string}
    if (type === '1') {
      this.setData({
        isReconnect: true,
      })
    }
    await this.queryStore(storeId)
    // debugger
    wx.setKeepScreenOn({
      keepScreenOn: true,
    })
    const { user } = store.getState()
    this.setData({
      userId: user.customer,
      // store: {id: storeId, avatar: IMAGEBASEURL + avatar, name: storeName},
      saleId,
    })
    // if (this.options.publicGroupId) {
    //   this.setData({
    //     groupId: this.options.publicGroupId,
    //     roomId: Number(this.options.roomId)
    //   })

    //   const {userId, roomId} = this.data
    //   const {userSig, sdkAppID} = genTestUserSig(userId)
    //   trtcClient = new TRTC(this)
    //   this.init({userID: userId, userSig, sdkAppID: sdkAppID + ''})
    //   this.bindTRTCRoomEvent()
    //   this.enterRoom({ roomID: roomId })
    // }

    // wx.showLoading({
    //   title: "等待接通..."
    // })

    // const userID = 'user0', roomID = 5555
    // const {userSig, sdkAppID} = genTestUserSig(userID)

    // this.init({userID, userSig, sdkAppID: sdkAppID + ''})
    // this.bindTRTCRoomEvent()
    // this.enterRoom({ roomID })
  },

  onReady() {
    console.log('room ready')
  },
  onUnload() {
    console.log('room unload')
  },

  startVideo({ detail }: WechatMiniprogram.TouchEvent) {
    // debugger
    const { publicGroupId, roomId } = detail as { publicGroupId: string, roomId: number }
    this.setData({
      groupId: publicGroupId,
      roomId: roomId,
      strRoomID: roomId,
      isWaiting: false
    })
    const { userId } = this.data
    const { userSig, sdkAppID } = genTestUserSig(userId)
    trtcClient = new TRTC(this)
    this.init({ userID: userId, userSig, sdkAppID: sdkAppID + '' })
    this.bindTRTCRoomEvent()
    this.enterRoom({ roomID: roomId })
    $emit({
      name: 'joined_room'
    })
  },

  handleDialogCommit() {
    this.setData({
      showDialog: false,
      showChat: true
    })
  },

  handleDialogCancel() {
    wx.navigateBack()
  },

  async queryStore(code: string) {
    const resData = await storeModule.queryStoreDetails(code)
    if (resData.data.logo)
      resData.data.logo.path = IMAGEBASEURL + resData.data?.logo?.path
    if (resData.data.images.length > 0) {
      resData.data.images[0].path = IMAGEBASEURL + resData.data.images[0].path
    }
    this.setData({
      store: {id: code, avatar: resData.data.images[0].path, name: resData.data.name},
    })
  },

  init(options: { userSig: string, sdkAppID: string, userID: string }) {
    const pusherConfig: PusherAttributesParams = {
      mode: 'live', // RTC：实时通话，live：直播模式
      enableCamera: false, // 是否开启摄像头
      enableMic: false, // 是否开启麦克风
      enableAgc: false, // 是否开启音频自动增益，该特性可以补偿部分手机麦克风音量太小的问题，但也会放大噪音，建议配合 ANS 同时开启
      enableAns: false, // 是否开启音频噪声抑制，该特性会自动检测背景噪音并进行过滤，但也会误伤周围的音乐，只有会议、教学等场景才适合开启
      minBitrate: 600, // 
      beautyLevel: 0, // 美颜 0-9 0关闭
      whitenessLevel: 0, // 美白 0-9 0关闭
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

  enterRoom({ roomID }: { roomID: number }) {
    const config = Object.assign(this.data._rtcConfig, { roomID, scene: 'live' as EnterRoomScene })
    this.setData({
      pusher: trtcClient.enterRoom({ ...config }),
    }, () => {
      trtcClient.getPusherInstance().start() // 开始推流
    })
  },

  exitRoom() {
    const result = trtcClient.exitRoom()
    wx.setStorageSync('session', null)
    this.setData({
      pusher: result.pusher,
      playerList: result.playerList,
    })
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
    trtcClient.on(TRTC_EVENT.LOCAL_JOIN, (event: OnEvent) => {
      console.log('* room LOCAL_JOIN', event)
      // if (this.data.localVideo) {
      // this.setPusherAttributesHandler({ enableCamera: true })
      // }
      // if (this.data.localAudio) {
      // this.setPusherAttributesHandler({ enableMic: true })
      // }
    }, this)
    trtcClient.on(TRTC_EVENT.LOCAL_LEAVE, (event: OnEvent) => {
      console.log('* room LOCAL_LEAVE', event)
    }, this)
    trtcClient.on(TRTC_EVENT.ERROR, (event: OnEvent) => {
      console.log('* room ERROR', event)
    }, this)
    trtcClient.on(TRTC_EVENT.REMOTE_USER_JOIN, (event: OnEvent) => {
      console.log('* room REMOTE_USER_JOIN', event)
      const { userID } = event.data
      wx.showToast({
        title: `${userID} 进入了房间`,
        icon: 'none',
        duration: 2000,
      })
    }, this)
    // 远端用户退出
    trtcClient.on(TRTC_EVENT.REMOTE_USER_LEAVE, (event: OnEvent) => {
      console.log('* room REMOTE_USER_LEAVE', event)
      const { userID, playerList } = event.data
      this.setData({
        playerList: playerList
      })
      wx.showToast({
        title: `${userID} 离开了房间`,
        icon: 'none',
        duration: 2000,
      })
    }, this)
    // 远端用户推送视频
    trtcClient.on(TRTC_EVENT.REMOTE_VIDEO_ADD, (event: OnEvent) => {
      console.log('* room REMOTE_VIDEO_ADD', event)
      const { player } = event.data
      // 开始播放远端的视频流，默认是不播放的
      this.setPlayerAttributesHandler(player, { muteVideo: false })
    }, this)
    // 远端用户取消推送视频
    trtcClient.on(TRTC_EVENT.REMOTE_VIDEO_REMOVE, (event: OnEvent) => {
      console.log('* room REMOTE_VIDEO_REMOVE', event)
      const { player } = event.data
      this.setPlayerAttributesHandler(player, { muteVideo: true })
    }, this)
    // 远端用户推送音频
    trtcClient.on(TRTC_EVENT.REMOTE_AUDIO_ADD, (event: OnEvent) => {
      console.log('* room REMOTE_AUDIO_ADD', event)
      const { player } = event.data
      this.setPlayerAttributesHandler(player, { muteAudio: false })
    }, this)
    // 远端用户取消推送音频
    trtcClient.on(TRTC_EVENT.REMOTE_AUDIO_REMOVE, (event: OnEvent) => {
      console.log('* room REMOTE_AUDIO_REMOVE', event)
      const { player } = event.data
      this.setPlayerAttributesHandler(player, { muteAudio: true })
    }, this)
    trtcClient.on(TRTC_EVENT.REMOTE_AUDIO_VOLUME_UPDATE, (event: OnEvent) => {
      console.log('* room REMOTE_AUDIO_VOLUME_UPDATE', event)
      const { playerList } = event.data
      this.setData({
        playerList: playerList
      })
    }, this)
    trtcClient.on(TRTC_EVENT.LOCAL_AUDIO_VOLUME_UPDATE, (event: OnEvent) => {
      // console.log('* room LOCAL_AUDIO_VOLUME_UPDATE', event)
      const { pusher } = event.data
      this.setData({
        pusher: pusher
      })
    }, this)
  },



  // 挂断退出房间
  _hangUp() {
    this.exitRoom()
    wx.navigateBack({
      delta: 1,
    })
  },

  // 请保持跟 wxml 中绑定的事件名称一致
  _pusherStateChangeHandler(event: WechatMiniprogram.TouchEvent) {
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