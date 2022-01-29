declare namespace swaggerI {
  interface AnyResult extends WechatMiniprogram.RequestSuccessCallbackResult {
    data: any
  }

  interface RequestType<T> extends AnyResult {
    data: T
  }

  interface TranslateRes {
    TargetText: string
  }

  type BaiduOcrErrorCode = 222356 | 0

  interface BaiduOcrRes {
    result: {
      score: number
    },
    error_code: BaiduOcrErrorCode
  }

  interface requestBase {
    '@context': string
    '@id': string
    '@type': string
  }

  interface requsetListBase<T> extends requestBase {
    'hydra:member': T[]
  }

  interface requestSingleBase<T> extends requestBase {
    'hydra:member': T
  }

  // interface requestFlatBase<T> extends requestBase, T {

  // }

  interface requestSimpleBase {
    '@id': string
    '@type': string
  }

  interface requestSingleDataBase extends requestSimpleBase {

    code: string
    translations?: requestItemTranslations
  }

  interface pageRequestParams {
    'page': number
    'itemsPerPage': number
  }

  interface requestItemTranslations {
    'en': requestItemTranslationsItem
    'zh_Hans_CN': requestItemTranslationsItem
  }

  interface image extends requestSimpleBase {
    id: number
    path: string
  }

  interface requestItemTranslationsItem extends requestSingleDataBase {
    name: string
  }

  type orderd = 'asc' | 'desc'

  // type newStoreListResult = RequestType<storeDesign.storeItem[]>

  type newStoreListResult = storeDesign.QueryStoresRes

  // type brandListResult = RequestType<storeDesign.brand[]>
  type brandListResult = storeDesign.QueryBrandRes

  type categoryListResult = storeDesign.QueryCategorys

  // type citiesListResult = RequestType<storeDesign.city[]>
  type citiesListResult = storeDesign.queryCitiesRes

  type storeDetailResult = storeDesign.QueryStoreDetailRes

  // type productListResult = RequestType<storeDesign.product[]>
  type productListResult = storeDesign.QueryProductsRes

  // type productDetailResult = RequestType<storeDesign.productDetail>
  type productDetailResult = storeDesign.queryProductDetail

  type colletionListResult = RequestType<storeDesign.collectedStore[]>

  type orderListResult = RequestType<orderDesign.orderBasic[]>

  type orderBasic = orderDesign.queryOrderRes

  type orderCompleteBasic = orderDesign.orderComplectRes

  type orderPaymentStateResult = orderDesign.queryOrderStateRes

  type inionPayRes = orderDesign.unionPayRes

  type queryOrderListRes = orderDesign.queryOrderListRes

  type paymentRes = payment.paymentReqRes


  // type addressListResult = RequestType<addressDesign.address[]>
  type addressListResult = addressDesign.queryAddressedRes

  type queryAddressListParams = addressDesign.queryAddressParams

  type createAddressResult = addressDesign.createAddressRes

  type queryAddressResult = addressDesign.queryAddresdRes

  type reserveListResult = RequestType<reserveDesign.Reserve[]>

  type querySalesTimeSlotsResult = reserveDesign.querySalesTimeSlotsRes

  type querySalesResult = storeDesign.QuerySalesRes

  type baiduOauth = ocrDesign.tokenGet

  type wxToken = ocrDesign.wxTokenGet

  type translateRes = TranslateRes

  type baiduOcrRes = BaiduOcrRes

  type loginRes = userDesign.loginRes

  type oauthRecordsRes = userDesign.oauthRecordsRes

  type querySessionRes = sessionDesign.querySessionRes

  type putSessionRes = sessionDesign.putSessionRes
} 