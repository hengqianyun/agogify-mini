(() => {
  const native = {
    getStorage: wx.getStorage
  }

  // wx.getStorage = (key: string) => {
  //   return new Promise((resolve, reject) => {
  //     native.getStorage({
  //       key,
  //       success(res) {
  //         resolve(res)
  //       },
  //       fail(res) {
  //         reject(res)
  //       }
  //     })
  //   })
  // }
})()