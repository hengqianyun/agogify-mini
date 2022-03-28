import { get, post, put } from "../index";

const sessionModule = {
  // querySession: async (params: sessionDesign.querySessionParams) => await get<swaggerI.querySessionRes, sessionDesign.querySessionParams>('store/video-session/sessions', params)
  querySession: async (params: string) => await get<swaggerI.querySessionRes, sessionDesign.querySessionParams>('store/video-session/sessions?' + params),
  putSession: async (params: sessionDesign.putSessionParams, code: string) => await put<swaggerI.putSessionRes, sessionDesign.putSessionParams>('store/video-session/sessions/' + code, params),
  createMessageLocks: async (params: sessionDesign.createMessageLocksParams) => await post<any, sessionDesign.createMessageLocksParams>('private/video-session/message-locks', params),
  checkGuestAvailability: async (sessionCode: string) => await get(`store/video-session/sessions/${sessionCode}/check-guest-availability`),
  checkBookingGuestAvailability: async (bookingCode: string) => await get(`store/video-session/bookings/${bookingCode}/check-guest-availability`),
  gusetCheckIn: async (sessionCode: string) => await put(`store/video-session/sessions/${sessionCode}/guest-check-in`, {}),
  bookingGusetCheckIn: async (bookingCode: string) => await put(`store/video-session/bookings/${bookingCode}/guest-check-in`, {}),
}

export default sessionModule