import { get, post } from "../index";

const storeModule = {
  // queryNewStore: async () => await get<swaggerI.newStoreListResult>('https://www.fastmock.site/mock/7a84f5def9c899423230775fc860efb5/ss-mini/api/shop/newList'),
  // queryStore: async () => await get<swaggerI.newStoreListResult, undefined>('https://www.fastmock.site/mock/7a84f5def9c899423230775fc860efb5/ss-mini/api/shop/queryShop'),
  // queryBrand: async () => await get<swaggerI.brandListResult, undefined>('https://www.fastmock.site/mock/7a84f5def9c899423230775fc860efb5/ss-mini/api/shop/queryBrand'),
  // queryCategory: async () => await get<swaggerI.categoryListResult, undefined>('https://www.fastmock.site/mock/7a84f5def9c899423230775fc860efb5/ss-mini/api/shop/queryCategory'),
  queryCities: async () => await get<swaggerI.citiesListResult, undefined>('https://www.fastmock.site/mock/7a84f5def9c899423230775fc860efb5/ss-mini/api/shop/queryCities'),
  // queryStoreDetails: async () => await get<swaggerI.storeDetailResult, undefined>('https://www.fastmock.site/mock/7a84f5def9c899423230775fc860efb5/ss-mini/api/shop/queryStoreDetails'),
  // queryProducts: async () => await get<swaggerI.productListResult, undefined>('https://www.fastmock.site/mock/7a84f5def9c899423230775fc860efb5/ss-mini/api/shop/queryProducts'),
  // queryProductDetails: async () => await get<swaggerI.productDetailResult, undefined>('https://www.fastmock.site/mock/7a84f5def9c899423230775fc860efb5/ss-mini/api/shop/queryProductDetails'),÷
  queryCollections: async () => await get<swaggerI.colletionListResult, undefined>('https://www.fastmock.site/mock/7a84f5def9c899423230775fc860efb5/ss-mini/api/shop/queryCellotions'),
  // querySales: async (params: storeDesign.QuerySalesParams) => await post<swaggerI.saleListResult, storeDesign.QuerySalesParams>('https://www.fastmock.site/mock/7a84f5def9c899423230775fc860efb5/ss-mini/api/shop/querySales', params),
  
  
  querySales: async (params: storeDesign.QuerySalesParams) => await get<swaggerI.querySalesResult, storeDesign.QuerySalesParams>('store/administrators', params),
  queryStore: async (params: storeDesign.QueryStoresParams) => await get<swaggerI.newStoreListResult, storeDesign.QueryStoresParams>('store/stores', params),
  queryStoreWhitString: async (params: string) => await get<swaggerI.newStoreListResult, undefined>('store/stores?' + params),
  queryStoreDetails: async (storeId: string) => await get<swaggerI.storeDetailResult, undefined>('store/stores/' + storeId),
  queryBrand: async (params: storeDesign.queryBrandsParams) => await get<swaggerI.brandListResult, storeDesign.queryBrandsParams>('store/brands', params),
  queryCategory: async (params: storeDesign.queryCategoryParams) => await get<swaggerI.categoryListResult, storeDesign.queryCategoryParams>('store/taxons', params),
  queryCategoryChild: async (params: storeDesign.queryCategoryChildParams) => await get<swaggerI.categoryListResult, storeDesign.queryCategoryChildParams>('store/taxons/children', params),
  queryProducts: async (params: storeDesign.queryProductsParams) => await get<swaggerI.productListResult, storeDesign.queryProductsParams>('store/products', params),
  queryProductDetails: async (code: string) => await get<swaggerI.productDetailResult, undefined>('store/products/' + code),
}

export default storeModule