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
    orders: SessionOrder[]
    booking?: reserveDesign.Reserve
  }

  interface querySessionParams extends swaggerI.pageRequestParams {
    'customer.id': number
    'state[]': sessionStateTypes[]
    'droppedByCustomer': boolean
  }

  interface putSessionParams {
    // endTime: string
    // state: sessionStateTypes
    droppedByCustomer: boolean
  }

  interface createMessageLocksParams {
    code: string
    customer: string
    sales: string
    session?: string
  }

  interface querySessionRes extends swaggerI.requsetListBase<session>  {
    code: string
    id: number
    orders: SessionOrder[]
    sales: []
  }

  interface SessionOrder {
    checkoutState: string
    id: number
    items: { id: string }[]
    notes: ''
    paymentState: string
    shippingAddress: addressDesign.address
    shippingState: string
    tokenValue: string
    shipments: { id: number }[]
    payments: { id: number }[]
  }

  interface putSessionRes extends session {}

}