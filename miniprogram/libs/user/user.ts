import { IMAGEBASEURL, IMAGEPATHS } from "../../http/index";
import loginModule from "../../http/module/login";
import userModule from "../../http/module/user";
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

const _userProfile = {
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
    try {
      await getWxProfile()
    } catch(err) {
      throw err
    }
    imLogin(userProfile.pathId)
    // await getServiceAvatar()
    await querySessionAsync()
    // return loginRes
  } catch {
    Object.assign(userProfile, _userProfile)
    wx.clearStorage()
  }

}

export const autoLogin = async () => {
  const oauth = wx.getStorageSync(LoginKey.oauthDataKey);
  if (oauth && oauth.providers && oauth.providers.includes(LoginKey.wechatMiniProgramProvider)) {
    await login({
      provider: LoginKey.wechatMiniProgramProvider
    })
  } else {
    wx.clearStorage()
  }
}

export const queryUserInfo = async (id: number) => {
  try {
    const res = await loginModule.getUserInfo(id)
    const { user } = res.data
    userProfile.defaultAddressId = res.data.defaultAddress.id
    const avatarRes = await loginModule.getCustomerAvatar(userProfile.id)
    console.log(avatarRes)
    const { 'hydra:member': avatarList } = avatarRes.data
    if (avatarList.length > 0) {
      userProfile.avatar = IMAGEBASEURL + IMAGEPATHS.avatarNormal1x + avatarList[0].path
    }
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

const getWxProfile = async () => {
  try {
    /**
     * 若本地存储的用户微信信息丢失，则重新登陆
     */
    const userInfo = wx.getStorageSync<WechatMiniprogram.UserInfo>('userInfo')
    userProfile.nickName = userInfo.nickName
    if (!userProfile.avatar)
      userProfile.avatar = userInfo.avatarUrl
  } catch(err) {
    throw err
  }
}

export const updateServiceAvatar = async () => {
  try {
    const avatarRes = await loginModule.getCustomerAvatar(userProfile.id)
    console.log(avatarRes)
    const { 'hydra:member': avatarList } = avatarRes.data
    if (avatarList.length > 0) {
      userProfile.avatar = IMAGEBASEURL + IMAGEPATHS.avatarNormal1x + avatarList[0].path
    }
  } catch (err) {
    console.debug(err)
    console.error(err)
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
  return userProfile.hasTheRealNameBeenCertified
}