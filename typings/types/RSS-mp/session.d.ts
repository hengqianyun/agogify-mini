declare namespace sessionDesign {
  type sessionStateTypes = 'active' | 'paused' | 'ended'
  type sessionTypes = 'booking'

  

  interface session extends swaggerI.requestBase {
    code: string
    customer: string
    sales: storeDesign.saleWithStore
    startTime: string
    endTime: string
    state: sessionTypes
    type?: sessionTypes
    booking?: reserveDesign.Reserve
  }

  interface querySessionParams extends swaggerI.pageRequestParams {
    'customer.id': number
    'state[]': sessionStateTypes[]
  }

  interface querySessionRes extends swaggerI.requsetListBase<session>  {

  }

}