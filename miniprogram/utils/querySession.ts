import sessionModule from "../http/module/session"
import { userProfile } from "../libs/user/user"
import { getIdFromString } from "./util"

export const querySessionAsync = async () => {
  try {
    console.log(userProfile)
    const res = await sessionModule.querySession('droppedByCustomer=false&state[]=active&state[]=paused&customer.id=' + userProfile.id + '&itemsPerPage=1&page=1')
    const {"hydra:member": list} = res.data
    if (list.length > 0) {
      wx.setStorageSync('session', list[0])
    } else {
      clearSessionAsync()
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

export const clearSessionAsync = () => {
  wx.setStorageSync('session', null)
}