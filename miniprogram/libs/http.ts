const wxrequest = <T>(option: RSSHTTPModule.requestOption, interceptor: RSSHTTPModule.Interceptor<T>): Promise<WechatMiniprogram.RequestSuccessCallbackResult<T>> => {
  return new Promise((resolve, reject) => {
    let _option = option;
    if (interceptor.request) {
      try {
        _option = interceptor.request.do(option)
      } catch (err) {
        interceptor.request.error(err)
        console.log('catch')
        reject()
      }
    }
    wx.request({
      ..._option,
      success: async (res: WechatMiniprogram.RequestSuccessCallbackResult<T>) => {
        console.log('发送请求成功')
        let data = res
        if (interceptor.response) {
          try {
            data = await interceptor.response.success(res)
          } catch (err) {
            console.log('接口报错')
            reject(err)
          }
        }
        resolve(data)
      },
      fail: async (res) => {
        // wx.showToast({
        //   title: '发送请求失败'
        // })
        console.log('发送请求失败')
        let data = res
        if (interceptor.response) {
          data = await interceptor.response.error(res)
        }
        // wx.showToast({
        //   title: 'reject data',
        //   icon: 'error',
        //   duration: 2000
        // })
        reject(data)
      }
    })
  })
}

class RSSHTTP {
  interceptor: RSSHTTPModule.Interceptor<any> = {};
  defaultConfig: RSSHTTPModule.DefaultConfig = {
    header: {
      'content-type': 'application/json'
      // 'content-type': 'application/ld+json'
    },
    dataType: 'json',
  };
  publicReqConfig: RSSHTTPModule.DefaultConfig = {
    header: {
      'content-type': 'application/json'
    },
    dataType: 'json',
  };
  diffConfig: RSSHTTPModule.DefaultConfig = {
    header: {
      'content-type': 'application/ld+json; charset=utf-8'
    },
    dataType: 'json',
  };
  token = '';

  // constructor() {}

  createInterceptorReq(reqFn: RSSHTTPModule.InterceptorReqFun) {
    this.interceptor.request = reqFn
    return this
  }

  createInterceptorRes<T>(resFun: RSSHTTPModule.InterceptorResFun<WechatMiniprogram.RequestSuccessCallbackResult<T>, WechatMiniprogram.GeneralCallbackResult>) {
    this.interceptor.response = resFun
    return this
  }

  setTimeout(time: number) {
    this.defaultConfig = { ...this.defaultConfig, timeout: time }
    return this
  }

  setToken(token: string) {
    console.log(token)
    this.defaultConfig.header['authorization'] = 'Bearer ' + token;
    this.diffConfig.header['authorization'] = 'Bearer ' + token;
  }

  async post<T>(url: string, params?: any, option = {}) {
    try {
      return await wxrequest<T>({
        url,
        data: params,
        method: 'POST',
        ...this.defaultConfig,
        ...option
      }, this.interceptor)
    } catch (err) {
      throw err
    }
  }

  async typePost<T>(url: string, params?: any, option = {}) {
    try {
      return await wxrequest<T>({
        url,
        data: params,
        method: 'POST',
        ...this.diffConfig,
        ...option
      }, this.interceptor)
    } catch (err) {
      throw err
    }
  }

  async get<T>(url: string, params?: any, option = {}) {
    try {
      return await wxrequest<T>({
        url,
        data: params,
        method: 'GET',
        ...this.defaultConfig,
        ...option
      }, this.interceptor)
    } catch (err) {
      throw err
    }

  }
  async publicGet<T>(url: string, params?: any, option = {}) {
    try {
      return await wxrequest<T>({
        url,
        data: params,
        method: 'GET',
        ...this.publicReqConfig,
        ...option
      }, this.interceptor)
    } catch (err) {
      throw err
    }

  }

  async put<T>(url: string, params?: any, option = {}) {
    try {
      return await wxrequest<T>({
        url,
        data: params,
        method: 'PUT',
        ...this.defaultConfig,
        ...option
      }, this.interceptor)
    } catch (err) {
      console.debug('err')
      console.log(err)
      throw err
    }

  }

  async delete<T>(url: string, params?: any, option = {

  }) {
    try {
      return await wxrequest<T>({
        url,
        data: params,
        method: 'DELETE',
        ...this.defaultConfig,
        ...option
      }, this.interceptor)
    } catch (err) {
      throw err
    }

  }
}

export default new RSSHTTP