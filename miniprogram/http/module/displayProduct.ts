import { get } from "../index"

const displayProductModule = {
  queryDisplayProduct: async (code: string) => await get<swaggerI.displayProductListResult, any>('store/video-session/display-products', {'booking.code': code}),
}

export default displayProductModule