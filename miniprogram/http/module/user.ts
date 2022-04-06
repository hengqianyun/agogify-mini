import { post, publicGet, put } from "../index";

const userModule = {
  queryCellotions: async () => await post<swaggerI.orderListResult, undefined>('https://www.fastmock.site/mock/7a84f5def9c899423230775fc860efb5/ss-mini/api/user/queryCellotions'),

  putCustomerInfo: async (params: userDesign.putUserInfoParams, id: number) => await put<any, userDesign.putUserInfoParams>('store/customers/' + id, params),
  // queryNewStore: async () => await get<storeDesign.storeItem>('')
  getOcrInfo: async () => await post<swaggerI.ocrResult, {}>('store/id-card-ocr-requests', {}),
  getAvatar: async (id: number) => await publicGet('public/customer-avatars', {'owner.id': id})
}

export default userModule