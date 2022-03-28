declare namespace reserveDesign {
  type reserveTypes = 'available' | 'booked'

  interface Reserve {
    storeName: string
    storeId: string
    storeAvatar: string
    storeAddress: string
    salerName: string
    date: string
    duration: string
    id: string
  }

  interface salesReserveItem extends swaggerI.requestSimpleBase {
    startTime: string
    endTime: string
    state: reserveTypes
    booking: booking
    version: number
    customer: string
    code: string
    sales: storeDesign.saleWithStore
  }

  interface booking extends swaggerI.requestBase {
    timeSlots: string[]
  }

  interface querySalesTimeSlotsParams {
    'startTime[after]': string
    'endTime[before]': string
    'sales.id': number
  }

  interface queryMySalesTimeSlotsParams {
    'startTime[after]'?: string
    'endTime[after]'?: string
    'customer.id': number
    'endTime[before]'?: string
    'order[startTime]': string
  }

  interface bookTimeSlotParams {
    timeSlots: {id: number, version: number}[]
  }

  interface querySalesTimeSlotsRes extends swaggerI.requsetListBase<salesReserveItem> {}

}