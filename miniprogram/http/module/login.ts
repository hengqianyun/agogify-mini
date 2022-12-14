import { post, get, publicGet } from "../index"

const loginModule = {
  wxLogin: async (params: userDesign.wxLoginParams) => await post<swaggerI.loginRes, userDesign.wxLoginParams>('store/login/check-wechat-mini-program', params),

  mobileLogin: async (params: userDesign.wxLoginParams) => await post<swaggerI.loginRes, userDesign.wxLoginParams>('store/login/check-mobile', params),

  verifyOauthLoginState: async(code: string) => await get<swaggerI.oauthRecordsRes, undefined>('store/user-oauth-records/' + code),
  
  sendVerificationCode: async (params: userDesign.sendVerificationCodeParams) => await post<any, userDesign.sendVerificationCodeParams>('store/sms-verification-requests/login', params),

  getUserInfo: async (id: number) => await get<swaggerI.getUserInfoRes, undefined>('store/customers/' + id),

  getCustomerAvatar: async (id: number) => publicGet<any, {'owner.id': number}>('public/customer-avatars', {'owner.id': id})
}

export default loginModule