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
      content: '通话或预约前需要先完善个人信息',
      cancelText: '确定',
      confirmText: '立即前往',
      success(res) {
        if (res.confirm) {

          wx.navigateTo({ url: '../ocr/ocr' })
        } else {
          // wx.navigateBack()

        }
      },
      fail() {
        wx.navigateBack()
      }
    })
    return false
  } 
  return true
}