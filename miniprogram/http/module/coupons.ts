import { get, put } from "../index"

 const couponsModule = {
   getCoupons:  async(params: any) =>  await get<any, any>('store/promotion-coupons', params),
   getGiftCoupon: async(code: string) => await put<any, any>(`store/promotion-coupons/gift/${code}`)
 }

 export default couponsModule