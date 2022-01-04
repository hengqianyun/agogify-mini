declare interface EnterRoomParams {
  sdkAppID: string // 您的腾讯云账号的 sdkAppID
  userID: string // 您进房的 userID
  userSig: string // 您服务器签发的 userSig
  roomID?: number // 您要进入的房间号，如该房间不存在，系统会为您自动创建
  strRoomID?: string // 您要进入的字符串房间号，如填写该参数，将优先进入字符串房间
  userDefineRecordId?: string // 设置云端录制完成后的回调消息中的 "userdefinerecordid" 字段内容，便于您更方便的识别录制回调。
  scene: EnterRoomScene // rtc：实时通话，采用优质线路，同一房间中的人数不应超过300人。 live：直播模式，采用混合线路，支持单一房间十万人在线（同时上麦的人数应控制在50人以内）
}

declare type EnterRoomScene = 'rtx' | 'live'

declare interface PusherInstance extends WechatMiniprogram.LivePusherContext {
  pusherAttributes: PusherAttributes
}

declare type MediaMode = "RTC" | 'live'
declare type PusherFrontCamera = 'front' | 'back'
declare type PusherBeautyLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0
declare type VideoOrientation = 'vertical' | 'horizontal'
declare type PusherLocalMirror = 'auto' | 'enable' | 'disable'
declare type PusherAudioQuality = 'high' | 'low'
declare type PusherAudioVolumeType = 'media' | 'voicecall'
declare type PusherAudioReverbType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
declare type PusherBeautyStyle = 'smooth' | 'nature'
declare type PusherFilter = '' | 'standard' | 'pink' | 'nostalgia' | 'blues' | 'romantic' | 'cool' | 'fresher' | 'solor' | 'aestheticism' | 'whitening' | 'cerisered'
declare type VideoObjectFit = 'contain' | 'fillCrop'
declare type VideoSoundMode = 'speaker' | 'ear'

declare interface PusherAttributes {
  mode: MediaMode //	RTC	RTC：实时通话，live：直播模式
  enableCamera: Boolean	//	false	是否开启摄像头
  enableMic: Boolean	//	false	是否开启麦克风
  enableAgc: Boolean	//	false	是否开启音频自动增益，该特性可以补偿部分手机麦克风音量太小的问题，但也会放大噪音，建议配合 ANS 同时开启
  enableAns: Boolean	//	false	是否开启音频噪声抑制，该特性会自动检测背景噪音并进行过滤，但也会误伤周围的音乐，只有会议、教学等场景才适合开启
  minBitrate: Number	//	600	最小码率，不建议设置太低
  maxBitrate: Number	//	900	最大码率，需要跟分辨率相匹配，请参见 分辨率码率参照表
  frontCamera: PusherFrontCamera	//	front	前置或后置摄像头，可选值：front，back
  enableZoom: Boolean	//	false	是否支持双手滑动调整摄像头焦距
  videoWidth: Number	//	360	视频宽（若设置了视频宽高就会忽略 aspect）
  videoHeight: Number	//	640	视频高（若设置了视频宽高就会忽略 aspect）
  beautyLevel: PusherBeautyLevel	//	0	美颜。取值范围 0-9 ，0 表示关闭
  whitenessLevel: PusherBeautyLevel	//	0	美白。取值范围 0-9 ，0 表示关闭
  videoOrientation: VideoOrientation	//	vertical	推流方向。vertical：垂直方向，horizontal：水平方向
  enableRemoteMirror: Boolean	//	false	设置推流画面是否镜像，产生的效果会表现在 live-player
  localMirror: PusherLocalMirror	//	'auto'	设置主播本地摄像头预览画面的镜像效果，支持如下取值：auto：前置摄像头镜像，后置摄像头不镜像（系统相机的表现 ）;enable：前置摄像头和后置摄像头都镜像 disable: 前置摄像头和后置摄像头都不镜像
  audioQuality: PusherAudioQuality	//	'high'	高音质（48KHz）或低音质（16KHz），可选值：high、low
  audioVolumeType: PusherAudioVolumeType	//	'voicecall'	声音类型。可选值： media: 媒体音量，voicecall: 通话音量
  audioReverbType: PusherAudioReverbType	//	0	音频混响类型。0：关闭，1：KTV，2：小房间，3：大会堂，4：低沉，5：洪亮，6：金属声，7：磁性
  beautyStyle: PusherBeautyStyle	//	'smooth'	美颜类型。取值有：smooth：光滑，nature：自然
  filter: PusherFilter	//	''	滤镜类型。standard：标准，pink：粉嫩，nostalgia：怀旧，blues：蓝调，romantic：浪漫，cool：清凉，fresher：清新，solor：日系，aestheticism：唯美，whitening：美白，cerisered：樱红
}

declare interface PusherAttributesParams {
  mode?: MediaMode //	RTC	RTC：实时通话，live：直播模式
  enableCamera?: Boolean	//	false	是否开启摄像头
  enableMic?: Boolean	//	false	是否开启麦克风
  enableAgc?: Boolean	//	false	是否开启音频自动增益，该特性可以补偿部分手机麦克风音量太小的问题，但也会放大噪音，建议配合 ANS 同时开启
  enableAns?: Boolean	//	false	是否开启音频噪声抑制，该特性会自动检测背景噪音并进行过滤，但也会误伤周围的音乐，只有会议、教学等场景才适合开启
  minBitrate?: Number	//	600	最小码率，不建议设置太低
  maxBitrate?: Number	//	900	最大码率，需要跟分辨率相匹配，请参见 分辨率码率参照表
  frontCamera?: PusherFrontCamera	//	front	前置或后置摄像头，可选值：front，back
  enableZoom?: Boolean	//	false	是否支持双手滑动调整摄像头焦距
  videoWidth?: Number	//	360	视频宽（若设置了视频宽高就会忽略 aspect）
  videoHeight?: Number	//	640	视频高（若设置了视频宽高就会忽略 aspect）
  beautyLevel?: PusherBeautyLevel	//	0	美颜。取值范围 0-9 ，0 表示关闭
  whitenessLevel?: PusherBeautyLevel	//	0	美白。取值范围 0-9 ，0 表示关闭
  videoOrientation?: VideoOrientation	//	vertical	推流方向。vertical：垂直方向，horizontal：水平方向
  enableRemoteMirror?: Boolean	//	false	设置推流画面是否镜像，产生的效果会表现在 live-player
  localMirror?: PusherLocalMirror	//	'auto'	设置主播本地摄像头预览画面的镜像效果，支持如下取值：auto：前置摄像头镜像，后置摄像头不镜像（系统相机的表现 ）;enable：前置摄像头和后置摄像头都镜像 disable: 前置摄像头和后置摄像头都不镜像
  audioQuality?: PusherAudioQuality	//	'high'	高音质（48KHz）或低音质（16KHz），可选值：high、low
  audioVolumeType?: PusherAudioVolumeType	//	'voicecall'	声音类型。可选值： media: 媒体音量，voicecall: 通话音量
  audioReverbType?: PusherAudioReverbType	//	0	音频混响类型。0：关闭，1：KTV，2：小房间，3：大会堂，4：低沉，5：洪亮，6：金属声，7：磁性
  beautyStyle?: PusherBeautyStyle	//	'smooth'	美颜类型。取值有：smooth：光滑，nature：自然
  filter?: PusherFilter	//	''	滤镜类型。standard：标准，pink：粉嫩，nostalgia：怀旧，blues：蓝调，romantic：浪漫，cool：清凉，fresher：清新，solor：日系，aestheticism：唯美，whitening：美白，cerisered：樱红
}

declare interface PlayerInstance extends WechatMiniprogram.LivePlayerContext {
  playerAttributes: PlayerAttributes
}

declare interface PlayerAttributes {
  mode: MediaMode //	RTC	RTC：实时通话， live：直播模式
  autoplay: Boolean	//	true	有音频流下行后，是否自动播放
  muteAudio: Boolean	//	true	默认不主动拉音频流，需要您手动进行订阅
  muteVideo: Boolean	//	true	默认不主动拉视频流，需要您手动进行订阅
  orientation: VideoOrientation	//	//	vertical	player 方向。vertical：垂直方向，horizontal：水平方向
  objectFit: VideoObjectFit	//	fillCrop	填充模式，可选值有 contain，fillCrop
  minCache: Number	//	1	最小缓冲区，单位：s
  maxCache: Number	//	2	最大缓冲区，单位：s
  soundMode: VideoSoundMode // speaker	声音输出方式，speaker：扬声器，ear：听筒 （通话音量模式下听筒才有效，对应 RTC 模式）
  enableRecvMessage: Boolean	//	false	是否接收 SEI 消息
  autoPauseIfNavigate: Boolean	//	true	当跳转到其它小程序页面时，是否自动暂停本页面的实时音视频播放
  autoPauseIfOpenNative: Boolean	//	true	当跳转到其它微信原生页面时，是否自动暂停本页面的实时音视频播放
}

declare interface PlayerAttributesParams {
  mode?: MediaMode //	RTC	RTC：实时通话， live：直播模式
  autoplay?: Boolean	//	true	有音频流下行后，是否自动播放
  muteAudio?: Boolean	//	true	默认不主动拉音频流，需要您手动进行订阅
  muteVideo?: Boolean	//	true	默认不主动拉视频流，需要您手动进行订阅
  orientation?: VideoOrientation	//	//	vertical	player 方向。vertical：垂直方向，horizontal：水平方向
  objectFit?: VideoObjectFit	//	fillCrop	填充模式，可选值有 contain，fillCrop
  minCache?: Number	//	1	最小缓冲区，单位：s
  maxCache?: Number	//	2	最大缓冲区，单位：s
  soundMode?: VideoSoundMode // speaker	声音输出方式，speaker：扬声器，ear：听筒 （通话音量模式下听筒才有效，对应 RTC 模式）
  enableRecvMessage?: Boolean	//	false	是否接收 SEI 消息
  autoPauseIfNavigate?: Boolean	//	true	当跳转到其它小程序页面时，是否自动暂停本页面的实时音视频播放
  autoPauseIfOpenNative?: Boolean	//	true	当跳转到其它微信原生页面时，是否自动暂停本页面的实时音视频播放
}

declare interface PlayerListItem extends PlayerAttributes {
  id: string
  userID: string
  streamType: string
  src: string
  streamID: string
}

type TRTCEvent = "BGM_PLAY_COMPLETE"
  | "BGM_PLAY_FAIL" 
  | "BGM_PLAY_PROGRESS"
  | "BGM_PLAY_START" 
  | "ERROR" 
  | "IM_ERROR" 
  | "IM_KICKED_OUT" 
  | "IM_MESSAGE_RECEIVED" 
  | "IM_NOT_READY" 
  | "IM_READY" 
  | "KICKED_OUT" 
  | "LOCAL_AUDIO_VOLUME_UPDATE" 
  | "LOCAL_JOIN" 
  | "LOCAL_LEAVE"
  | "LOCAL_NET_STATE_UPDATE"
  | "REMOTE_AUDIO_ADD"
  | "REMOTE_AUDIO_REMOVE"
  | "REMOTE_AUDIO_VOLUME_UPDATE"
  | "REMOTE_NET_STATE_UPDATE"
  | "REMOTE_STATE_UPDATE"
  | "REMOTE_USER_JOIN"
  | "REMOTE_USER_LEAVE"
  | "REMOTE_VIDEO_ADD"
  | "REMOTE_VIDEO_REMOVE"
  | "VIDEO_FULLSCREEN_UPDATE"

declare interface OnEvent {
  data: OnEventData
}

declare interface OnEventData {
  userID: string
  playerList: PlayerListItem[]
  player: PlayerListItem
  pusher: any
}