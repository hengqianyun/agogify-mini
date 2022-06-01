import { get } from "../index"

 const couponsModule = {
   getCoupons:  async() =>  await get('store/promotion-coupons', )
 }

 export default couponsModule