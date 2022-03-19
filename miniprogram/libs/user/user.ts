import loginModule from "../../http/module/login";
import http from "../../libs/http";
import { querySessionAsync } from "../../utils/querySession";
import { getIdFromString } from "../../utils/util";
import { imLogin } from "../tim/tim";

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

export const userProfile = {
  nickName: '',
  avatar: '',
  id: -1,
  pathId: '',
  defaultAddressId: -1,
  hasTheRealNameBeenCertified: false,
  firstName: '',
  lastName: '',
  identityNumber: '',
  token: ''
}
Object.seal(userProfile)

export const LoginKey = {
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

// const 

type OauthProviderPaths = {
  [key in OauthProviderPathsKey]: LoginType;
};

interface ILoginFnParams {
  mobileNumber?: null | number
  isMobileNumberRequired?: boolean
  verificationCode?: null | number
  provider: OauthProviderPathsKey
}

const wxLogin = (): Promise<WechatMiniprogram.LoginSuccessCallbackResult> => {
  return new Promise((resolve, rej) => {
    wx.login({
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        rej(err)
      }
    })
  }) 
}

export const login = async ({
  mobileNumber = null,
  isMobileNumberRequired = false,
  verificationCode = null,
  provider = LoginKey.mobileProvider as OauthProviderPathsKey
}: ILoginFnParams) => {
  const res = await wxLogin()
      try {
        const loginRes = await loginModule[LoginKey.oauthProviderPaths[provider]]({
          code: res.code,
          mobile_number: mobileNumber,
          is_mobile_number_required: isMobileNumberRequired,
          verification_code: verificationCode,
          verification_type: 'login',
        })
        setOautoData(loginRes.data)
        http.setToken(loginRes.data.token)
        userProfile.pathId = loginRes.data.customer
        userProfile.token = loginRes.data.token
        userProfile.id = getIdFromString(userProfile.pathId)
        await queryUserInfo(userProfile.id);
        // imLogin(userProfile.pathId)
        getWxProfile()
        await querySessionAsync()
        // return loginRes
      } catch {
        wx.clearStorage()
      }
      
}

export const autoLogin = async () => {
  const oauth = wx.getStorageSync(LoginKey.oauthDataKey);
  if (oauth && oauth.providers && oauth.providers.includes(LoginKey.wechatMiniProgramProvider)) {
    // const resData = await login({
    //   provider: LoginKey.wechatMiniProgramProvider
    // })
    await login({
      provider: LoginKey.wechatMiniProgramProvider
    })
    // const {code} = await wx.login()
    // console.log(code)
    // try {
    //   const resData = await loginModule.wxLogin({
    //     code,
    //     mobile_number: null,
    //     is_mobile_number_required: false,
    //     verification_code: null,
    //     verification_type: 'login'
    //   })
    //   console.log(resData)
    //   setOautoData(resData.data)
    //   http.setToken(resData.data.token)
    // } catch {
    //   wx.clearStorage()
    // }
  } else {
    wx.clearStorage()
  }
}

export const queryUserInfo = async (id: number) => {
  try {
    const res = await loginModule.getUserInfo(id)
    const {user} = res.data
    userProfile.defaultAddressId = res.data.defaultAddress.id
    const avatarRes = await loginModule.getCustomerAvatar(userProfile.id)
    console.log(avatarRes)
    if (user.verifiedAt !== null) {
      userProfile.hasTheRealNameBeenCertified = true
      userProfile.firstName = res.data.firstName
      userProfile.lastName = res.data.lastName
      userProfile.identityNumber = res.data.identityNumber
      setIfUserHasTheRealNameBeenCertified(true)
    }
    
  } catch (err) {

  }
}

const getWxProfile = () => {
  const userInfo = wx.getStorageSync<WechatMiniprogram.UserInfo>('userInfo')
  userProfile.nickName = userInfo.nickName
  userProfile.avatar = userInfo.avatarUrl
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