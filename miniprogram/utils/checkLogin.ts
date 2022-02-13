import { getIfUserHasTheRealNameBeenCertified } from "./oauth"

export const checkloginAndRealNameCertifiedAsync = (): boolean => {
  if (!wx.getStorageSync('oauth.data')) {
    {
      wx.navigateTo({
        url: '../loginPage/loginPage'
      })
      return false
    }
  }
  if (!getIfUserHasTheRealNameBeenCertified()) {
    wx.showModal({
      title: '提示',
      content: '通话或预约前需要先实名认证',
      showCancel: false,
      confirmText: '确认'
    })
    return false
  } 
  return true
}