/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
  settings: {
    apiPath: string
    apiHosts: {
        develop: string
        trail: string
        release: string
    }
    imageAliasPath: string
  }
}