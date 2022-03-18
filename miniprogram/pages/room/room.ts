// pages/room/room.ts
import genTestUserSig from '../../debug/GenerateTestUserSig.js'
import TRTC from 'trtc-wx-sdk'
import { $emit } from '../../utils/event.js'
import { IMAGEBASEURL, IMAGEPATHS } from '../../http/index.js'
import storeModule from '../../http/module/store.js'
import { $on, $remove } from '../../utils/event'
import { shareVideo } from '../../libs/share.js'
import { userProfile } from '../../libs/user/user.js'
import { CustomMessageTypes } from '../../libs/tim.js'

let trtcClient: TRTC
Page({
  data: {
    _rtcConfig: {
      sdkAppID: '', // 必要参数 开通实时音视频服务创建应用后分配的 sdkAppID
      userID: '', // 必要参数 用户 ID 可以由您的帐号系统指定
      userSig: '', // 必要参数 身份签名，相当于登录密码的作用
    },
    groupId: '',
    userId: '',
    roomId: null as unknown as string,
    pusher: null as any,
    playerList: [] as PlayerListItem[],
    // store
    store: { name: '', avatar: '', id: '' },
    isWaiting: false, // false
    showDialog: true,
    isReconnect: false,
    isReserve: false,
    showChat: false,
    canTap: true,
    canLeave: true,
    showBusyDialog: false,
    saleId: '',
    storeId: '',
    firstIn: true,
  },

  /**
   * 生命周期函数--监听页面加载
   * @param {String} type
   */
  async onLoad() {

    const { storeId, saleId, type } = this.options as { storeId: string, saleId: string, type: string }
    if (type === '1') {
      this.setData({
        isReconnect: true,
      })
    } else if (type === '2') {

      this.setData({
        isReconnect: true,
        isReserve: true
      })
    } else if (type === '3') {
      const { roomId } = this.options
    }
    this.queryStore(storeId)
    wx.setKeepScreenOn({
      keepScreenOn: true,

    })


    this.setData({
      userId: userProfile.pathId,
      saleId,
      storeId,
      firstIn: false
    })


    const { userSig, sdkAppID } = genTestUserSig(userProfile.pathId)
    // tim = initTim(user.customer, { sdkAppID, userSig }, storeId, saleId, this.data.isReserve, this.data.isReconnect)
    trtcClient = new TRTC(this)
    this.init({ userID: userProfile.pathId, userSig, sdkAppID: sdkAppID + '' })
    this.bindTRTCRoomEvent()
    const that = this
    $on({
      name: "onMessageEvent",
      tg: this,
      success: (res: TIMMessageReceive) => {
        const data = res.data[0]
        let payloadData: any;
        try {
          payloadData = JSON.parse(data.payload.data)
        } catch (err) { }
        if (payloadData && payloadData.to === this.properties.userId) {
          switch (payloadData.type) {
            case CustomMessageTypes.START_VIDEO:
                // 进入房间
                this.startVideo(payloadData.groupId, payloadData.roomId)
                break
                case CustomMessageTypes.NOW_BUSY:
                  this.handleShowBusyDialog()
                  break
          }
        }
      }
    })

  },

  onShow() {
    if (this.data.firstIn) return
    // trtcClient.getPusherInstance().start()
    setTimeout(() => {
      this.setData({
        playerList: this.data.playerList
      })
    }, 1000)
  },

  onReady() {
    console.debug('room ready')
  },
  onUnload() {
    console.debug('room unload')
    $remove({
      name: "onMessageEvent",
      tg: this,
    })
  },

  onShareAppMessage(option) {
    const { from } = option
    if (from === 'button') {
      return shareVideo(userProfile.nickName!, this.data.groupId.split('Meeting-')[1], '/pages/share/share', this.data.groupId, { salesId: this.data.saleId, storeId: this.data.storeId })
    }
  },

  startVideo(publicGroupId: string, roomId: string) {
    // const { publicGroupId, roomId } = option.detail as { publicGroupId: string, roomId: string }
    // console.log('room console: option -->', option)
    this.setData({
      groupId: publicGroupId,
      roomId: roomId,
      strRoomID: roomId,
      isWaiting: false
    })
    console.log('start video --->', roomId)
    this.enterRoom({ roomID: roomId })
    $emit({
      name: 'joined_room'
    })
  },

  handleDialogCommit() {
    // if (this.data.isReconnect) {
    //   const id = `${this.data.storeId}_Meeting-${getIdFromString(this.data.saleId)}`
    //   console.log( 'commit  --->', id)
    //   this.startVideo({ publicGroupId: id, roomId: id })
    // } 
    if (!this.data.canTap) return;
    let flag = true
    if (this.data.isReserve && this.data.isReconnect) flag = false

    this.setData({
      isWaiting: flag,
      showDialog: false,
      showChat: true,
    })
  },

  handleDialogCancel() {
    if (!this.data.canTap) return;
    wx.navigateBack()
  },

  async queryStore(code: string) {
    this.data.canTap = false
    wx.showLoading({ title: '' })
    const resData = await storeModule.queryStoreDetails(code)
    if (resData.data.logo)
      resData.data.logo.path = IMAGEBASEURL + IMAGEPATHS.storeNormal1x + resData.data?.logo?.path
    if (resData.data.images.length > 0) {
      resData.data.images[0].path = IMAGEBASEURL + IMAGEPATHS.storeSmall1x + resData.data.images[0].path
    }
    this.data.canTap = true
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
    const trtcConfig = { ...this.data._rtcConfig, strRoomID: roomID } as EnterRoomParams
    console.log('trtcConfig ---->', trtcConfig)
    this.setData({
      pusher: trtcClient.enterRoom(trtcConfig),
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
    // trtcClient.on(TRTC_EVENT.LOCAL_JOIN, (event: OnEvent) => {
    // })
    // trtcClient.on(TRTC_EVENT.LOCAL_LEAVE, (event: OnEvent) => {
    // })
    // trtcClient.on(TRTC_EVENT.ERROR, (event: OnEvent) => {
    // })
    trtcClient.on(TRTC_EVENT.REMOTE_USER_JOIN, (event: OnEvent) => {
      const { userID } = event.data
      wx.showToast({
        title: `${userID} 进入了房间`,
        icon: 'none',
        duration: 2000,
      })
    })
    // 远端用户退出
    trtcClient.on(TRTC_EVENT.REMOTE_USER_LEAVE, (event: OnEvent) => {
      const { userID, playerList } = event.data
      this.setData({
        playerList: playerList
      })
      wx.showToast({
        title: `${userID} 离开了房间`,
        icon: 'none',
        duration: 2000,
      })
    })
    // 远端用户推送视频
    trtcClient.on(TRTC_EVENT.REMOTE_VIDEO_ADD, (event: OnEvent) => {
      const { player } = event.data
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



  // 挂断退出房间
  _hangUp() {
    if (!this.data.canLeave) {
      wx.showLoading({
        title: '销售还未操作完，请勿挂断电话'
      })
      return
    }
    this.exitRoom()
    wx.navigateBack({
      delta: 1,
    })
  },

  handleShowBusyDialog() {
    this.setData({
      showBusyDialog: true
    })
  },

  handleBusy() {
    this.setData({
      showDialog: false,
    })
    wx.navigateBack()
  },

  setCanLeaveState(status: boolean) {
    this.data.canLeave = status
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