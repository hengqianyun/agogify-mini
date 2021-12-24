///<reference path="./debug.d.ts" />

// declare interface RSSAppOptions<T> extends IAppOption {
//   globalData: {
//     isIOS: boolean
//     userInfo?: WechatMiniprogram.UserInfo
//     hasLaunched: boolean,
//     height: number
//   },
//   store?: T
// }

declare namespace RSSDesign {
  interface RSSAppOptions<T> extends IAppOption {
    globalData: {
      isIOS: boolean
      userInfo?: WechatMiniprogram.UserInfo
      hasLaunched: boolean,
      height: number
    },
    store?: T
    tokenCallback?: () => void
  }

  type EventBusFuns = "onMessageEvent"

  type EventBus = {
    [key in EventBusFuns]: [any];
  };

  interface EventOnParams<T> {
    name?: EventBusFuns
    tg: WechatMiniprogram.Page.Instance<{}, {}> | WechatMiniprogram.Component.Instance<{}, {}, {}>
    success: (res: T) => void
  }
  interface EventEmitParams<T> {
    name?: EventBusFuns
    data: T
  }
  interface EventRemoveParams {
    name?: EventBusFuns
    tg: WechatMiniprogram.Page.Instance<{}, {}> | WechatMiniprogram.Component.Instance<{}, {}, {}>
  }
  interface txMapLocation {
    province: string 
    city: string 
    district: string 
    name: string
  }
}



// export = RSSAppOptions