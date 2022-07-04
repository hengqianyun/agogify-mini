import { post, get, put } from "../index";

const orderModule = {
  // queryOrderList: async () => await post<swaggerI.orderListResult, undefined>('https://www.fastmock.site/mock/7a84f5def9c899423230775fc860efb5/ss-mini/api/order/queryList'),
  // queryNewStore: async () => await get<storeDesign.storeItem>('')
  queryCart: async (tokenValue: string) => await get<swaggerI.orderBasic, undefined>('store/carts/' + tokenValue),
  queryOrderDetail: async (tokenValue: string,) => await get<swaggerI.orderBasic, null>('store/orders/' + tokenValue ),
  putAddress: async (tokenValue: string, params: orderDesign.putOrderAddressParams) => await put<swaggerI.orderListResult, orderDesign.putOrderAddressParams>('store/carts/' + tokenValue + '/address', params),
  putShipment: async (tokenValue: string, shipmentId: string, params: orderDesign.putShipmentParams) => await put<swaggerI.orderListResult, orderDesign.putShipmentParams>('store/carts/' + tokenValue + '/shipments/' + shipmentId + '/shipping-method', params),
  putPayment: async (tokenValue: string, paymentId: string, params: orderDesign.putPaymentParams) => await put<swaggerI.orderListResult, orderDesign.putPaymentParams>('store/carts/' + tokenValue + '/payments/' + paymentId + '/payment-method', params),
  orderComplete: async (tokenValue: string, params: orderDesign.orderCompleteParams) => await put<swaggerI.orderCompleteBasic, orderDesign.orderCompleteParams>('store/carts/' + tokenValue + '/complete', params),
  getPaymentState: async (tokenValue: string) => await get<swaggerI.orderPaymentStateResult, swaggerI.pageRequestParams>('private/carts/or/orders/' + tokenValue + '/payments', {page: 1, itemsPerPage: 1}),
  unionPayPayment: async (unipayParams: orderDesign.unionPayParams) =>  await post<swaggerI.inionPayRes, orderDesign.unionPayParams>('store/yaband-pay/union-pay/payments', unipayParams),
  pay: async(params: payment.paymentReqParams) => await post<swaggerI.paymentRes, payment.paymentReqParams>('https://mapi.yabandpay.com/Payments', params),
  queryOrderList: async (params: orderDesign.queryOrderListParams) => get<swaggerI.queryOrderListRes, orderDesign.queryOrderListParams>('store/orders', params),
}

export default orderModule