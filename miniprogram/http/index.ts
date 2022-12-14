import http from "../libs/http";

const settings = getApp().settings;
const mode = wx.getAccountInfoSync().miniProgram.envVersion;
const apiHost = settings.apiHosts[mode];
const apiPath = settings.apiPath;
const imageAliasPath = settings.imageAliasPath;

export const BASEURL = `https://${apiHost}${apiPath}/`;
export const POST = `https://${apiHost}/`;
export const IMAGEBASEURL = `https://${apiHost}${imageAliasPath}/`;

// export const BASEURL = wx.getAccountInfoSync().miniProgram.envVersion === 'release' ? 'https://rss.agogify.cn/api/v2/' : 'https://rss.agogify.cn/api/v2/'
// export const POST = wx.getAccountInfoSync().miniProgram.envVersion === 'release' ? 'https://rss.agogify.cn/' : 'https://rss.agogify.cn/'

// export const IMAGEBASEURL = wx.getAccountInfoSync().miniProgram.envVersion === 'release' ? 'https://rss.agogify.cn/media/cache/resolve/' : 'https://rss.agogify.cn/media/cache/resolve/' 

export const IMAGEPATHS = {
  avatarSmall2x: 'avatar_thumbnail_small_2x/',
  avatarMedium2x: 'avatar_thumbnail_medium_2x/',
  avatarNormal2x: 'avatar_thumbnail_normal_2x/',
  avatarSmall1x: 'avatar_thumbnail_small_1x/',
  avatarMedium1x: 'avatar_thumbnail_medium_1x/',
  avatarNormal1x: 'avatar_thumbnail_normal_1x/',
  storeSmall2x: 'store_thumbnail_small_1x/',
  storeMedium2x: 'store_thumbnail_medium_1x/',
  storeNormal2x: 'store_thumbnail_normal_2x/',
  storeTiny2x: 'store_thumbnail_tiny_1x/',
  storeMain2x: 'store_main_normal_2x/',
  storeSmall1x: 'store_thumbnail_small_1x/',
  storeMedium1x: 'store_thumbnail_medium_1x/',
  storeNormal1x: 'store_thumbnail_normal_1x/',
  storeTiny1x: 'store_thumbnail_tiny_1x/',
  storeMain1x: 'store_main_normal_1x/',
  productThumbnail2x: 'product_thumbnail_normal_2x/',
  productMain2x: 'product_main_normal_2x/',
  productThumbnail1x: 'product_thumbnail_normal_1x/',
  productMain1x: 'product_main_normal_1x/',
  bookingthumbnailNormal2x: 'booking_thumbnail_normal_2x/',
  bookingthumbnailNormal1x: 'booking_thumbnail_normal_1x/',
  bookingthumbnailMedium2x: 'booking_thumbnail_medium_2x/',
  bookingthumbnailMedium1x: 'booking_thumbnail_medium_1x/',
  bookingthumbnailSmall2x: 'booking_thumbnail_small_2x/',
  bookingthumbnailSmall1x: 'booking_thumbnail_small_1x/',
  displayProductThumbnailNormal2x: 'display_product_thumbnail_normal_2x/',
  displayProductThumbnailSmaill2x: 'display_product_thumbnail_small_2x/',
  displayProductThumbnailNormal1x: 'display_product_thumbnail_normal_1x/',
  displayProductThumbnailSmaill1x: 'display_product_thumbnail_small_1x/',
}

enum SUCCESS_STATUS_CODE_DEF { OK = 200, Created = 201, Accepted = 202, no_content = 204 }

// http.setTimeout(16000)
http.setTimeout(1600000)
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
          console.log('????????????')
          reject(res)
        }
      })
    },
    error: (res) => new Promise((resolve, _) => {console.log('?????????') ;resolve(res)})
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

export function typePost<T, S>(url: string, data?: S): Promise<WechatMiniprogram.RequestSuccessCallbackResult<T>> {
  return new Promise((resolve, resject) => {
    http.typePost<T>(url, data)
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
        console.debug('resolve res')
        resolve(res)
      }).catch(err => {
        console.debug('resject res')
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

export function publicGet<T, S>(url: string, data?: S): Promise<WechatMiniprogram.RequestSuccessCallbackResult<T>> {
  return new Promise((resolve, resject) => {
    http.publicGet<T>(url, data)
      .then(res => {
        resolve(res)
      }).catch(err => {
        resject(err)
      })
  })
}