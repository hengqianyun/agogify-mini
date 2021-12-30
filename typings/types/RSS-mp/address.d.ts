declare namespace addressDesign {
  interface address extends createAddressParams, swaggerI.requestSimpleBase {
    id: number
    isDefault: boolean
  }

  interface createAddressParams {
    type: 'customer'
    customer: string
    firstName: string
    lastName: string
    mobileNumber: string
    countryCode: 'CN'
    provinceCode: string
    provinceName: string
    street: string
    city: string
    postcode: string
    county: string
  }

  interface queryAddressParams extends swaggerI.pageRequestParams {
    type: 'customer'
  }

  interface createAddressRes extends swaggerI.requestBase {
    customer: string
  }

  interface queryAddressedRes extends swaggerI.requsetListBase<address> {}

  interface queryAddresdRes extends swaggerI.requestBase, address {}
}