import sessionModule from "../http/module/session"
import { getIdFromString } from "./util"

export const querySessionAsync = async () => {
  try {
    // const res = await sessionModule.querySession({
    //   itemsPerPage: 1,
    //   page: 1,
    //   "state[]": ['ended', 'paused'],
    //   'customer.id': getIdFromString(wx.getStorageSync('userInfo').customer),
    // })
    const res = await sessionModule.querySession('state[]=active&state[]=paused&customer.id=' + getIdFromString(wx.getStorageSync('oauth.data').customer) + '&itemsPerPage=1&page=1')
    const {"hydra:member": list} = res.data
    if (list.length > 0) {
      wx.setStorageSync('session', list[0])
    } else {
      clearSessuibAsync()
    }
  } catch(err) {
    console.log(err)
  }
}

export const checkSessionAsync = async () => {
  const session = wx.getStorageSync<sessionDesign.session>('session')
  if (!!session) {
    return session
  } else {
    return null
  }
}

export const clearSessuibAsync = () => {
  wx.setStorageSync('session', null)
}