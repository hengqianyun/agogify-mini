declare namespace payment {
  type PayMethod = 'online'
  type SunPayMethod = 'WeChat Pay'
  type Currency = 'EUR' | 'CNY'
  type PaymentMethod = 'v3.CreatePaymentsWechatMiniPay'
  type SignType = 'MD5' | 'HMAC-SHA256'

  /**
   * 小程序微信支付data参数
   * @interface
   * @member pay_method 支付方式
   * @member sub_pay_method 支付渠道
   * @member order_id 订单id
   * @member amount 支付金额
   * @member currency 支付货币
   * @member description 订单描述
   * @member demo 自定义字段
   * @member timemout 过期时间0-1440 分钟，如不设置默认1440分钟
   * @member notify_url 支付完成后异步通知地址	
   * @member sub_app_id 小程序的APPID	
   * @member sub_open_id 小程序获得的用户OpenID	
   */
  interface paymentData {
    pay_method: PayMethod
    sub_pay_method: SunPayMethod
    order_id: string
    amount: string
    currency: Currency 
    description: string 
    demo?: string
    timemout?: string
    notify_url: string
    sub_app_id: string
    sub_open_id: string
  }

  /**
   * 小程序支付基础数据类型
   * @interface
   * @member user YabandPay后台开出的收银员帐号		
   * @member method 小程序获得的用户OpenID	
   * @member time 时间戳		
   */
  interface paymentReqBaseData {
    user: string
    method: PaymentMethod
    time: number
  }

  interface paymentSignParams extends paymentData, paymentReqBaseData {}

  interface paymentReqParams extends paymentReqBaseData {
    sign: string
    data: paymentData
  }

  interface paymentReqRes {
    order_id: string
    trade_id: string
    amount: string
    currency: Currency 
    settlement_amount: string
    settlement_currency: Currency
    exchange_rate: string
    parameters: paymentResParameters
    state: string
  }

  interface paymentResParameters {
    timeStamp: string
    nonceStr: string
    package: string
    signType: SignType,
    paySign: string,
  }
}