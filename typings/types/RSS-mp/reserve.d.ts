declare namespace reserveDesign {
  type reserveTypes = 'available' | 'booked'
  type eventTypes = 'available' | 'event_started'

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

  interface eventItem extends swaggerI.requestSimpleBase {
    image: {path: string}
    translations: {zh_CN: {description: string, name: string}}
    brands: {name: string}[]
    artist: {avatar: string | null, nickname: string}
    code: string
    startTime: string
    tickets: number
    seats: number
    state: eventTypes
  }

  interface salesReserveItem extends swaggerI.requestSimpleBase {
    startTime: string
    endTime: string
    state: reserveTypes
    booking: booking
    version: number
    customer: swaggerI.requestBase
    type: string
    code: string
    sales: storeDesign.saleWithStore
    guests: string[]
    brands:  swaggerI.requestSimpleBase[]
    image: {path: string}
    artist: swaggerI.requestSimpleBase
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
    'state'?: eventTypes
  }

  interface queryEventParams {
    'startTime[after]'?: string
    'state'?: eventTypes
    'type'?: string
    'code'?: string
  }

  interface bookTimeSlotParams {
    timeSlots: {id: number, version: number}[]
  }

  interface querySalesTimeSlotsRes extends swaggerI.requsetListBase<salesReserveItem> {}

  interface queryEventRes extends swaggerI.requsetListBase<eventItem> {}

}