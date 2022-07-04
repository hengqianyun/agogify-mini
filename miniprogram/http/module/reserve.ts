import { post, get, typePost, publicGet } from "../index";

const reserveModule = {
  queryReserveList: async () => await post<swaggerI.reserveListResult, undefined>('https://www.fastmock.site/mock/7a84f5def9c899423230775fc860efb5/ss-mini/api/reserve/queryReserveList'),
  // queryNewStore: async () => await get<storeDesign.storeItem>('')

  // querySales: async (params) => await get<undefined, undefined>('store/administrators', params),

  querySalesTimeSlots: async (params: reserveDesign.querySalesTimeSlotsParams) => await get<swaggerI.querySalesTimeSlotsResult, reserveDesign.querySalesTimeSlotsParams>('store/video-session/booking/time-slots', params),

  // queryMyReserveList: async (params: reserveDesign.queryMySalesTimeSlotsParams) => await get<swaggerI.querySalesTimeSlotsResult, reserveDesign.queryMySalesTimeSlotsParams>('store/video-session/booking/time-slots', params),
  queryMyReserveList: async (params: reserveDesign.queryMySalesTimeSlotsParams) => await get<swaggerI.querySalesTimeSlotsResult, reserveDesign.queryMySalesTimeSlotsParams>('store/video-session/bookings', params),

  bookTimeSlot: async (params: reserveDesign.bookTimeSlotParams) => typePost<any, reserveDesign.bookTimeSlotParams>('store/video-session/bookings/book-time-slots', params),
  queryEvents: async (params: reserveDesign.queryEventParams) => await publicGet<swaggerI.eventListResult, reserveDesign.queryEventParams>('public/video-session/bookings', params),
  createIndividual: async () => await post('store/invitation-codes', {expiryTime: '2022-07-01T09:20:00GMT+08:00'}),
  getIndividual: async () => await get('store/invitation-codes'),
}

export default reserveModule