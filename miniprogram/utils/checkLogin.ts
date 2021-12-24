export const checkloginAsync = () => {
  if (!wx.getStorageSync('oauth.data')) {
    wx.navigateTo({
      url: '../loginPage/loginPage'
    })
  }
}