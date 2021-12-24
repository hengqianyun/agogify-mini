let userProfile = wx.getStorageSync('userInfo')
let oauthData = wx.getStorageSync('oauth.data')
let userInfo = {...userProfile, ...oauthData}

if (!userProfile) {
  userInfo = {
    userName: '',
    avatarUrl: '',
    ...userInfo
  }
}
if (!oauthData) {
  userInfo = {...userInfo, customer: oauthData.customer}
}

export default userInfo