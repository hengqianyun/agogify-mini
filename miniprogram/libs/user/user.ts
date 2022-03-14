import loginModule from "../../http/module/login";
import http from "../../libs/http";
import { getIdFromString } from "../../utils/util";

interface IUser {
  id: number
  pathId: string
  avatar: string
  nickname: string
  defaultAddressId: number
  login: () => void
  logout: () => void
}

type LoginType = 'wxLogin' | 'mobileLogin'

type OauthProviderPathsKey = 'wechat_mini_program' | 'mobile'

// class User implements IUser {
//   _id: number
//   _pathId: string
//   _wxAvatar: string
//   _serviceAvatar?: string
//   _wxNickName: string
//   _serviceNickName?: string
//   _defaultAddressId: number;

//   get id() {
//     return this._id
//   }

//   get pathId() {
//     return this._pathId
//   }

//   get avatar() {
//     return this._serviceAvatar ?? this._wxAvatar
//   }

//   get nickname() {
//     return this._serviceNickName ?? this._wxNickName
//   }
// }

const LoginKey = {
  oauthDataKey: 'oauth.data',
  wechatMiniProgramProvider: 'wechat_mini_program' as OauthProviderPathsKey,
  mobileProvider: 'mobile',
  indexPage: '../../homepage/homepage',
  isMobileNumberRequired: false,
  oauthProviderPaths: {
    wechat_mini_program: 'wxLogin' as LoginType,
    mobile: 'mobileLogin' as LoginType
  } as OauthProviderPaths
}

const userProfile = {
  nickName: '',
  avatar: '',
  hasTheRealNameBeenCertified: false,
}

const userData = {
  id: null as unknown as number,
  pathId: '',
}

Object.seal(userProfile)
Object.seal(userData)

// const 

type OauthProviderPaths = {
  [key in OauthProviderPathsKey]: LoginType;
};

const login = async ({
  mobileNumber = null,
  isMobileNumberRequired = false,
  verificationCode = null,
  provider = LoginKey.mobileProvider as OauthProviderPathsKey
}) => {
  wx.login({
    async success(res) {
      const loginRes = await loginModule[LoginKey.oauthProviderPaths[provider]]({
        code: res.code,
        mobile_number: mobileNumber,
        is_mobile_number_required: isMobileNumberRequired,
        verification_code: verificationCode,
        verification_type: 'login',
      })
      setOautoData(loginRes.data)
      http.setToken(loginRes.data.token)
      queryUserInfo(loginRes.data.customer);
      return loginRes
    }

  })
}

export const autoLogin = async () => {
  const oauth = wx.getStorageSync(LoginKey.oauthDataKey);
  if (oauth && oauth.providers && oauth.providers.includes(LoginKey.wechatMiniProgramProvider)) {
    // const resData = await login({
    //   provider: LoginKey.wechatMiniProgramProvider
    // })
    const {code} = await wx.login()
    console.log(code)
    try {
      const resData = await loginModule.wxLogin({
        code,
        mobile_number: null,
        is_mobile_number_required: false,
        verification_code: null,
        verification_type: 'login'
      })
      console.log(resData)
      setOautoData(resData.data)
      http.setToken(resData.data.token)
      queryUserInfo(resData.data.customer);
    } catch {
      wx.clearStorage()
    }
  } else {
    wx.clearStorage()
  }
}

export const queryUserInfo = async (strId: string) => {
  const id = getIdFromString(strId)
  try {
    const res = await loginModule.getUserInfo(id)
    const {user} = res.data
    if (user.verifiedAt !== null) {
      setIfUserHasTheRealNameBeenCertified(true)
    }
    // if (!!identityNumber && (identityNumber.length === 18 || identityNumber.length === 15)) {
    //   setIfUserHasTheRealNameBeenCertified(true)
    // }
  } catch (err) {

  }
}

export const setOautoData = async (data: userDesign.loginRes) => {
  await wx.setStorageSync('oauth.data', data)
}

export const setIfUserHasTheRealNameBeenCertified = (status: boolean) => {
  if (status) {
    wx.setStorageSync('realNameCertified', true)
  } else {
    wx.removeStorageSync('realNameCertified');
  }
}

export const getIfUserHasTheRealNameBeenCertified = () => {
  const status = wx.getStorageSync<boolean | undefined>('realNameCertified')
  return !!status
}