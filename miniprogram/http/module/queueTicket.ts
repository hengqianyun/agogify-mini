import { get, post } from "../index"

const queueTicketModule = {
  queue: async (pathId: string, notes: string) => await post<undefined, any>('store/video-session/queue-tickets', {
    displayProduct: pathId,
    notes: notes
  }),

  getQueue: async (pathId: string) => await get<any, any>('store/video-session/queue-tickets', {
    'displayProduct.booking.code': pathId
  })
}

export default queueTicketModule