declare namespace orderDesign {
  // interface orderBasic {
  //   storeName: string
  //   storeId: string
  //   orderStatus: string
  //   productAvatar: string
  //   productName: string
  //   productDesc: string
  //   num: number
  //   money: number
  //   id: string
  //   storeAvatar: string
  //   orderDate: string
  //   collected: boolean
  // }

  type shippingMethods = 'dhl'
  type paymentMethods = 'wechat_offline'
  type shippingStateTypes = 'ready' | 'shipped'
  type paymentState = 'cart' | 'awaiting_payment' | 'paid' | 'completed'


  interface orderBasic extends swaggerI.requestBase {
    checkoutState: string
    paymentState: string
    currencyCode: string
    id: number
    itemsTotal: number
    localeCode: string
    orderPromotionTotal: number
    tokenValue: string
    items: orderItem[]
    total: number // 总价
    taxTotal: number // 税
    shippingTotal: number // 运费
    shippingState: shippingStateTypes // '运输状态'
    store: storeDesign.storeItem
    updatedAt: string
    createdAt: string
    notes: string
    shipments: shipments[]
  }

  interface orderItem extends swaggerI.requestSimpleBase {
    id: string
    productName: string
    quantity: number
    subtotal: number
    total: number
    unitPrice: number
    variant: string
    units: unit[]
  }

  interface orderSimpleItem extends swaggerI.requestSimpleBase {
    id: number
    itemsTotal: number
    number: string
    tokenValue: string
  }

  interface unit extends swaggerI.requestSimpleBase {
    height?: string
    id: number
    length?: string
    serialNumber?: string
    size?: string
    weight?: string
    width?: string
    adjustments: any[]
    shippable: shippable
  }

  interface shippable extends swaggerI.requestSimpleBase {
    code: string
    id: number
    isStock: boolean
    optionValues: any[]
    proce: number
    translations: {
      en: {
        name: string
      }
    }
  }

  interface putOrderAddressParams {
    shippingAddress: {
      "firstName"?: string,
      "lastName"?: string,
      "countryCode"?: string,
      "provinceCode"?: string,
      "provinceName"?: string,
      "street"?: string,
      "city"?: string,
      "postcode"?: string,
      'county': string
      mobileNumber: string
    }
  }

  interface putShipmentParams {
    shippingMethodCode: shippingMethods
  }

  interface putPaymentParams {
    paymentMethodCode: paymentMethods
  }

  interface orderComplectRes extends swaggerI.requestBase, orderBasic {
    shippingAddress: shippingAddress
    billingAddress: billingAddress
    payments: payments[]
    shipments: shipments[]
  }

  interface unionPayRes extends swaggerI.requestSimpleBase {
    tradeId: string
    status: string
    orderId: string
    amount: string
    currency: string
    settlementAmount: string
    settlementCurrency: string
    exchangeRate: string
    url: string
    state: string
    message: string
  }



  interface shippingAddress extends swaggerI.requestBase, addressDesign.createAddressParams { }

  interface billingAddress extends swaggerI.requestBase, addressDesign.createAddressParams { }

  interface payments extends swaggerI.requestBase {
    order: string
    id: number
    method: paymentMethods
    currencyCode: string
    amount: number
    state: paymentState
    detail: any[]
    createAt: string
    updateAt: string
  }

  interface shipments extends swaggerI.requestBase { 
    id: number
    shippedAt: string | null
  }

  interface orderCompleteParams {
    // notes: string
  }

  interface unionPayParams {
    orderId: string
    user: 'info@yabandmedia.com'
    amount?: string
    currency?: payment.Currency
    description: string
    demo: 'test'
    timeout?: '0'
  }

  interface queryOrderListParams extends swaggerI.pageRequestParams {
    'shippingState'?: shippingStateTypes
    'paymentState'?: paymentState
    'order[checkoutCompletedAt]': 'desc'
  }

  interface queryOrderRes extends orderBasic { }

  interface queryOrderListRes extends swaggerI.requsetListBase<orderBasic> { }

  interface queryOrderStateRes extends swaggerI.requsetListBase<payments> { }


}