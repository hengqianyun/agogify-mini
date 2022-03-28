/// <reference path="./swagger.d.ts" />

declare namespace RSSHTTPModule {
  type MethodTypes = 'POST' | "GET" | "PUT" | "DELETE" | "HEAD" | "OPTIONS" | "TRACE" | "CONNECT"

  interface InterceptorReqFun {
    do: (config: requestOption) => requestOption
    error: (err: unknown) => Error
  }

  interface InterceptorResFun<T, S> {
    success: (res: WechatMiniprogram.RequestSuccessCallbackResult<T>) => Promise<WechatMiniprogram.RequestSuccessCallbackResult<T>>
    error: (err: S) => Promise<S>
  }

  interface Interceptor<T> {
    request?: InterceptorReqFun
    response?: InterceptorResFun<T, WechatMiniprogram.GeneralCallbackResult>
  }

  interface requestOption {
    url: string,
    method: MethodTypes
    data?: any
    header?: AnyObject
  }

  interface DefaultConfig {
    header: ConfigHeader
    timeout?: number
    dataType?: string
  }

  interface ConfigHeader {
    'content-type': string
    token?: string
    authorization?: string
  }
}