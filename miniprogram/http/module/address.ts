import { deleteMethod, get, post, put } from "../index";

const addressModule = {
  // queryAddressList: async () => await get<swaggerI.addressListResult>('https://www.fastmock.site/mock/7a84f5def9c899423230775fc860efb5/ss-mini/api/address/queryAddressList'),
  queryAddressList: async (params: swaggerI.pageRequestParams) => await get<swaggerI.addressListResult, swaggerI.pageRequestParams>('store/addresses', params),

  createAddress: async (params: addressDesign.createAddressParams) => await post<swaggerI.createAddressResult, addressDesign.createAddressParams>('store/addresses', params),

  queryAddress: async (id: string) => await get<swaggerI.queryAddressResult, undefined>('store/addresses/' + id),

  deleteAddress: async (id: number) => await deleteMethod<swaggerI.queryAddressResult, undefined>('store/addresses/' + id),

  replaceAddress: async (id: number, params: addressDesign.createAddressParams) => await put<swaggerI.queryAddressResult, addressDesign.createAddressParams>('store/addresses/' + id, params),
}

export default addressModule