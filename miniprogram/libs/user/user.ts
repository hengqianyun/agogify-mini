import { IMAGEBASEURL, IMAGEPATHS } from "../../http/index";
import loginModule from "../../http/module/login";
import reserveModule from "../../http/module/reserve";
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

let inviteCode = "rUn1kVF320HcOAR5"

let receivedInviteCode = ''

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
  token: '',
  mobileNumber: '',
  email: '',
}
Object.seal(userProfile)



export const resetUserProfile = () => {
  userProfile.nickName = ''
  userProfile.avatar = ''
  userProfile.id = -1
  userProfile.pathId = ''
  userProfile.defaultAddressId = -1
  userProfile.hasTheRealNameBeenCertified = false
  userProfile.firstName = ''
  userProfile.lastName = ''
  userProfile.identityNumber = ''
  userProfile.token = ''
  userProfile.mobileNumber = ''
}

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

export const setReceivedInviteCode = (value: string) => {
  if (!!value) {
    receivedInviteCode = value
    console.debug('received invite code is ', value)
  } else {
    throw Error('链接错误，请重新尝试')
  }
}

export const getReceivedInviteCode = () => receivedInviteCode

export const getInviteCode = () => {
  // setTimeout(() => creatInviteCode(), 0)
  return inviteCode
}

export const creatInviteCode = async () => {
  /**
   * every time we login, we will reset the code in static env and try to get a invite code form service
   * if wo do have the invite code, we just return the code
   * every time we logout we will clear the code in static env
   */
  inviteCode = ''
  const res = await reserveModule.createIndividual();
  console.log(res);
  const code = (res.data as any).code
  inviteCode = code
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
    } catch (err) {
      throw err
    }
    imLogin(userProfile.pathId)

    // creatInviteCode()
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
      userProfile.mobileNumber = res.data.mobileNumber
      userProfile.email = res.data.email
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
  } catch (err) {
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