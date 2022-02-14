declare namespace userDesign {
  type loginProviderTypes = 'mobile' | 'wechat_mini_program'

  type verificationTypes = 'login' | 'register'

  interface wxLoginParams {
    code: string
    mobile_number: null | number
    is_mobile_number_required: boolean
    verification_code: null | number
    verification_type: verificationTypes
  }

  interface sendVerificationCodeParams {
    mobileNumber: number
  }

  interface loginRes {
    customer: string
    providers: loginProviderTypes[]
    token: string
  }

  interface oauthRecordsRes extends swaggerI.requestBase {
    code: string
    provider: loginProviderTypes
  }

  interface userInfoRes extends swaggerI.requestBase {
    id: number
    identityNumber: string
    firstName: string
    lastName: string
  }

  interface putUserInfoParams {
    "identityType"?: string,
    "identityNumber"?: string,
    "defaultAddress"?: string,
    "firstName"?: string,
    "lastName"?: string
  }


}