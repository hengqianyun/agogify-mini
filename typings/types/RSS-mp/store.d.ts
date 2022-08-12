declare namespace storeDesign {
  type storeType = 'virtual_store' | 'event_store' | 'specialty_store' | 'department_store' | 'buyer_store' | 'vintage_store'
  type saleOnlineStatus = 'online' | 'offline' | 'busy'

  interface storeItem extends swaggerI.requestSimpleBase {
    code: string
    name: string
    desc?: string
    billingData: storeBillingData
    logo: Logo
  }

  interface addressSimpleData extends swaggerI.requestSimpleBase {
    name: string
    code: string
  }

  interface addressSimpleDataProvince extends addressSimpleData {
    localizedName: string
  }

  interface storeBillingData extends swaggerI.requestSingleDataBase {
    city?: addressSimpleData
    country?: addressSimpleData
    county?: addressSimpleData
    id: number
    province?: addressSimpleDataProvince
    taxID: string
    // company: string
    // countryCode: string
    // email: string
    // phoneNumber: string
    // postcode: string
    // provinceCode: string
    // street: string
    // taxId: string
    // website: string
  }

  interface Logo extends swaggerI.requestSingleDataBase {
    path: string
  }

  type checkBoxStatus = 0 | 1 | 2

  type adminisstratorsTypes = 'ROLE_STORE_SALES_ACCESS'

  type languageTypes = 'english' | 'chinese'

  interface checkboxStoreItem extends storeItem {
    status: checkBoxStatus
    address: string
  }

  interface baseData {
    id: string
    name: string
  }

  // interface brand extends baseData {}

  interface category extends swaggerI.requestSingleDataBase {
    translations?: { 'en': categoryUSTranslations, 'zh_Hans_CN': any }
    name: string
    code: string
    id: number
  }

  interface categoryUSTranslations extends swaggerI.requestSingleDataBase {
    name: string
    slug: string
    id: number
    description: string | null
  }

  interface searchBars extends baseData { }

  interface city extends swaggerI.requestSimpleBase {
    code: string
    country: string
    province: string
    county: string
    translations: swaggerI.translateRes
    name: string
  }

  interface dropdownOption {
    value: string
    text: string
  }

  interface product extends swaggerI.requestSingleDataBase {
    averageRating: number // 评分
    id: number
    images: swaggerI.image[]
    mainTaxon: {name: string}
    description?: string
    enabledVariants: productPrice[]
    brand: {name: string, code: string}

    // image: string
    // category: string
  }

  interface productPrice extends swaggerI.requestSimpleBase {
    inStock: boolean
    price: number
    originalPrice: number
  }

  interface collectedStore extends storeItem {
    collectionId: string
  }

  interface sale extends swaggerI.requestSimpleBase {
    username: string
    firstName: string
    lastName: string
    languages: languageTypes[]
    avatar?: { path: string }
    status: saleOnlineStatus
    roles: string[]
    email: string
  }

  interface saleWithStore extends sale {
    store: storeItem
  }

  interface QuerySalesParams extends swaggerI.pageRequestParams {
    'store.code': string
    // roles: adminisstratorsTypes
  }

  interface BrandItemSimple extends swaggerI.requestSingleDataBase {
    logo: Logo
  }

  interface brand extends swaggerI.requestSingleDataBase {
    name: string
  }

  interface QueryStoresParams extends swaggerI.pageRequestParams {
    'translations.name'?: string
    'brands.translations.name'?: string
    'products.translations.name'?: string
    'storeTaxons.taxon.code'?: string
    'billingData.city.code'?: string
    'type'?: storeType
  }

  interface queryBrandsParams extends swaggerI.pageRequestParams {
    'translations.name'?: string
  }

  /**
   * 分类请求参数
   */
  interface queryCategoryParams extends swaggerI.pageRequestParams { }

  /**
   * 子分类请求参数
   */
  interface queryCategoryChildParams {
    parentCode: string
  }

  interface queryProductsParams extends swaggerI.pageRequestParams {
    'translations.name'?: string
    'order[code]'?: swaggerI.orderd
    'order[createdAt]'?: swaggerI.orderd
    'productTaxons.taxon.code'?: string
    'productTaxons.taxon.code[]'?: string[]
    'order[translation.name]'?: swaggerI.orderd
    'taxon'?: string
    'store.code'?: string
    'store.code[]'?: string[]
  }

  interface QueryStoresRes extends swaggerI.requsetListBase<storeItem> { }

  interface QueryBrandRes extends swaggerI.requsetListBase<brand> { }

  interface QueryProductsRes extends swaggerI.requsetListBase<product> { }

  interface queryProductDetail extends swaggerI.requestBase, product { }

  interface QueryCategorys extends swaggerI.requsetListBase<category> { }

  interface QueryStoreDetailRes extends storeItem, swaggerI.requestBase {
    brands: BrandItemSimple[]
    logo: Logo
    slug: string
    products: product[]
    images: { path: string }[]
  }

  interface QuerySalesRes extends swaggerI.requsetListBase<sale> { }

  interface QuerySingleSalesRes extends sale { }

  interface queryCitiesRes extends swaggerI.requsetListBase<city> { }


}