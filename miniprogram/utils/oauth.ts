import loginModule from "../http/module/login";
import http from "../libs/http";
import { getIdFromString } from "./util";

type LoginType = 'wxLogin' | 'mobileLogin'

type OauthProviderPathsKey = 'wechat_mini_program' | 'mobile'

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
      return await loginModule[LoginKey.oauthProviderPaths[provider]]({
        code: res.code,
        mobile_number: mobileNumber,
        is_mobile_number_required: isMobileNumberRequired,
        verification_code: verificationCode,
        verification_type: 'login',
      })
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
  }
}

export const queryUserInfo = async (strId: string) => {
  const id = getIdFromString(strId)
  try {
    const res = await loginModule.getUserInfo(id)
    const {identityNumber} = res.data
    if (!!identityNumber && (identityNumber.length === 18 || identityNumber.length === 15)) {
      setIfUserHasTheRealNameBeenCertified(true)
    }
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