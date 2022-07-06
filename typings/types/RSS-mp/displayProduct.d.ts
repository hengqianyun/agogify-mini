declare namespace displayProductDesign {
  type displayProductCategoryType = 'RTW' | 'Shoes' | 'Rings' | 'Belt'

  interface displayProductItem extends swaggerI.requestSimpleBase {
    artist: string
    bookint: string
    id: number
    image: {path: string}
    inventory: number
    price: number
    translations: [] | {zh_CN: {description: string}}
    category: displayProductCategoryType
  }

  interface queryDisplayProductRes extends swaggerI.requsetListBase<displayProductItem> {}
}