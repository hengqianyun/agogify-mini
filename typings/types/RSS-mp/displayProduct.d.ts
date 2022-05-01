declare namespace displayProductDesign {
  interface displayProductItem extends swaggerI.requestSimpleBase {
    artist: string
    bookint: string
    id: number
    image: {path: string}
    inventory: number
    price: number
    translations: [] | {zh_CN: {description: string}}
  }

  interface queryDisplayProductRes extends swaggerI.requsetListBase<displayProductItem> {}
}