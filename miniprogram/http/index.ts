import http from "../libs/http";

// export const BASEURL = wx.getAccountInfoSync().miniProgram.envVersion === 'release' ? 'https://api.agogify.com/api/v2/' : 'https://192.168.20.188:8000/api/v2/'
export const BASEURL = wx.getAccountInfoSync().miniProgram.envVersion === 'release' ? 'https://api.agogify.com/api/v2/' : 'https://api.agogify.com/api/v2/'

export const IMAGEBASEURL = wx.getAccountInfoSync().miniProgram.envVersion === 'release' ? 'https://api.agogify.com/media/image/' : 'https://api.agogify.com/media/image/' 

enum SUCCESS_STATUS_CODE_DEF { OK = 200, Created = 201, Accepted = 202, no_content = 204 }

http.setTimeout(8000)
  .createInterceptorReq({
    do: (options) => Object.assign({ ...options }, { url: options.url.indexOf('http') > -1 ? options.url : BASEURL + options.url }),
    error: (err) => Error(err as string)
  })
  .createInterceptorRes({
    success: (res) => {
      return new Promise((resolve, reject) => {
        if (res.statusCode === SUCCESS_STATUS_CODE_DEF.OK || res.statusCode === SUCCESS_STATUS_CODE_DEF.Created || res.statusCode === SUCCESS_STATUS_CODE_DEF.Accepted || res.statusCode === SUCCESS_STATUS_CODE_DEF.no_content) {
          resolve(res)
        } else {
          reject(res)
        }
      })
    },
    error: (res) => new Promise((_, reject) => {console.log('报错拉') ;reject(res)})
  })

export function post<T, S>(url: string, data?: S): Promise<WechatMiniprogram.RequestSuccessCallbackResult<T>> {
  return new Promise((resolve, resject) => {
    http.post<T>(url, data)
      .then(res => {
        resolve(res)
      }).catch(err => {
        resject(err)
      })
  })
}

export function put<T, S>(url: string, data?: S): Promise<WechatMiniprogram.RequestSuccessCallbackResult<T>> {
  return new Promise((resolve, resject) => {
    http.put<T>(url, data)
      .then(res => {
        resolve(res)
      }).catch(err => {
        resject(err)
      })
  })
}

export function get<T, S>(url: string, data?: S): Promise<WechatMiniprogram.RequestSuccessCallbackResult<T>> {
  return new Promise((resolve, resject) => {
    http.get<T>(url, data)
      .then(res => {
        resolve(res)
      }).catch(err => {
        resject(err)
      })
  })
}

export function deleteMethod<T, S>(url: string, data?: S): Promise<WechatMiniprogram.RequestSuccessCallbackResult<T>> {
  return new Promise((resolve, resject) => {
    http.delete<T>(url, data)
      .then(res => {
        resolve(res)
      }).catch(err => {
        resject(err)
      })
  })
}