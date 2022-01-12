import { post, get, put } from "../index";

const orderModule = {
  // queryOrderList: async () => await post<swaggerI.orderListResult, undefined>('https://www.fastmock.site/mock/7a84f5def9c899423230775fc860efb5/ss-mini/api/order/queryList'),
  // queryNewStore: async () => await get<storeDesign.storeItem>('')
  queryOrder: async (tokenValue: string) => await get<swaggerI.orderBasic, undefined>('store/orders/' + tokenValue),
  queryOrderDetail: async (tokenValue: string,) => await get<swaggerI.orderBasic, null>('store/orders/' + tokenValue ),
  putAddress: async (tokenValue: string, params: orderDesign.putOrderAddressParams) => await put<swaggerI.orderListResult, orderDesign.putOrderAddressParams>('store/orders/' + tokenValue + '/address', params),
  putShipment: async (tokenValue: string, shipmentId: string, params: orderDesign.putShipmentParams) => await put<swaggerI.orderListResult, orderDesign.putShipmentParams>('store/orders/' + tokenValue + '/shipments/' + shipmentId, params),
  putPayment: async (tokenValue: string, paymentId: string, params: orderDesign.putPaymentParams) => await put<swaggerI.orderListResult, orderDesign.putPaymentParams>('store/orders/' + tokenValue + '/payments/' + paymentId, params),
  orderComplete: async (tokenValue: string, params: orderDesign.orderCompleteParams) => await put<swaggerI.orderCompleteBasic, orderDesign.orderCompleteParams>('store/orders/' + tokenValue + '/complete', params),
  unionPayPayment: async (unipayParams: orderDesign.unionPayParams) =>  await post<swaggerI.inionPayRes, orderDesign.unionPayParams>('store/union-pay/payments', unipayParams),
  pay: async(params: payment.paymentReqParams) => await post<swaggerI.paymentRes, payment.paymentReqParams>('https://mapi.yabandpay.com/Payments', params),
  queryOrderList: async (params: orderDesign.queryOrderListParams) => get<swaggerI.queryOrderListRes, orderDesign.queryOrderListParams>('store/orders', params),
}

export default orderModule