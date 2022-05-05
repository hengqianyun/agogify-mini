import { post } from "../index"

const queueTicketModule = {
  queue: async (pathId: string) => await post<undefined, any>('store/video-session/queue-tickets', {
    displayProduct: pathId
  }),
}

export default queueTicketModule