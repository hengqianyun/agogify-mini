declare module 'weapp-qrcode-canvas-2d' {
  function drawQrcode(params:  {
    width: number,
    height: number,
    canvas: any,
    canvasId: string,
    text: string
  }): void



  export = drawQrcode
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

