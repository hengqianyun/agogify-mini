import { get, post, put } from "../index";

const sessionModule = {
  // querySession: async (params: sessionDesign.querySessionParams) => await get<swaggerI.querySessionRes, sessionDesign.querySessionParams>('store/video-session/sessions', params)
  querySession: async (params: string) => await get<swaggerI.querySessionRes, sessionDesign.querySessionParams>('store/video-session/sessions?' + params),
  putSession: async (params: sessionDesign.putSessionParams, code: string) => await put<swaggerI.putSessionRes, sessionDesign.putSessionParams>('store/video-session/sessions/' + code, params),
  createMessageLocks: async (params: sessionDesign.createMessageLocksParams) => await post<any, sessionDesign.createMessageLocksParams>('private/video-session/message-locks', params),
  checkIsSessionGuest: async (sessionCode: string, guestCode: number) => await get(`store/video-session/sessions/${sessionCode}/guests/${guestCode}`),
  checkIsBookingGuest: async (bookingCode: string, guestCode: number) => await get(`store/video-session/bookings/${bookingCode}/guests/${guestCode}`),
  checkSessionTickets: async (sessionCode: string) => await get(`store/video-session/sessions/${sessionCode}/enquiry-tickets`),
  checkBookingTickets: async (bookingCode: string) => await get(`store/video-session/bookings/${bookingCode}/enquiry-tickets`),
  sessionGusetCheckIn: async (sessionCode: string) => await put(`store/video-session/sessions/${sessionCode}/get-ticket`, {}),
  bookingGusetCheckIn: async (bookingCode: string) => await put(`store/video-session/bookings/${bookingCode}/get-ticket`, {}),
}

export default sessionModule