import {  post } from "../index";

const userModule = {
  queryCellotions: async () => await post<swaggerI.orderListResult, undefined>('https://www.fastmock.site/mock/7a84f5def9c899423230775fc860efb5/ss-mini/api/user/queryCellotions')
  // queryNewStore: async () => await get<storeDesign.storeItem>('')
}

export default userModule