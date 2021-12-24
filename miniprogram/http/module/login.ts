import { post, get } from "../index"

const loginModule = {
  wxLogin: async (params: userDesign.wxLoginParams) => await post<swaggerI.loginRes, userDesign.wxLoginParams>('store/login/check-wechat-mini-program', params),

  mobileLogin: async (params: userDesign.wxLoginParams) => await post<swaggerI.loginRes, userDesign.wxLoginParams>('store/login/check-mobile', params),

  verifyOauthLoginState: async(code: string) => await get<swaggerI.oauthRecordsRes, undefined>('store/user-oauth-records/' + code),
  
  sendVerificationCode: async (params: userDesign.sendVerificationCodeParams) => await post<any, userDesign.sendVerificationCodeParams>('store/sms-verification-requests/login', params),
}

export default loginModule