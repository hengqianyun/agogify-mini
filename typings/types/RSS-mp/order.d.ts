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
  }

  interface orderItem extends swaggerI.requestSimpleBase {
    id: string
    productName: string
    quantity: number
    subtotal: number
    total: number
    unitPrice: number
    variant: string
  }

  interface orderSimpleItem extends swaggerI.requestSimpleBase {
    id: number
    itemsTotal: number
    number: string
    tokenValue: string
  }

  interface putOrderAddressParams {
    billingAddress: {
      "firstName"?: string,
      "lastName"?: string,
      "countryCode"?: string,
      "provinceCode"?: string,
      "provinceName"?: string,
      "street"?: string,
      "city"?: string,
      "postcode"?: string
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

  interface shippingAddress extends swaggerI.requestBase, addressDesign.createAddressParams {}

  interface billingAddress extends swaggerI.requestBase, addressDesign.createAddressParams {}

  interface payments extends swaggerI.requestBase {}

  interface shipments extends swaggerI.requestBase {}

  interface orderCompleteParams {
    notes: string
  }

  interface queryOrderListParams extends swaggerI.pageRequestParams {

  }

  interface queryOrderRes extends orderBasic {}

  interface queryOrderListRes extends swaggerI.requsetListBase<orderBasic> {}


}