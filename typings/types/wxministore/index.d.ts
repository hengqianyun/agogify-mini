declare module 'wxministore' {
  class Store {
    constructor(option: StoreOption)
    
    state: any

    getState: () => any

    setState: (state: any) => void
  }

  export = Store
}

declare interface StoreOption {
  openPart?: boolean
  behavior?: unknown
  methods?: {[key: string]: Function}
  pageLisener?: unknown
  pageListener?: unknown
  nonWritable?: boolean
  debug?: boolean

  state?: Object
}
// export declare class Store {

// }

