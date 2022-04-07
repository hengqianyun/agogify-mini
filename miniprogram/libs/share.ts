/**
 * video-page 邀请好友前来视频界面
 * @param userName 
 * @param sessionCode 
 * @returns 
 */
export const shareVideo = (userName: string, sessionCode: string, page: string, roomId: string, {
  salesId = '',
  storeId = '',
}) => {
  return {
    title: 'Agogify爱购季好友邀请',
    path: `${page}?userName=${userName}&type=video&sessionCode=${sessionCode}&roomId=${roomId}&salesId=${salesId}&storeId=${storeId}`
  }
}

export const shareBooking = (userName: string, bookingCode: string, page: string, {
  salesId = '',
  storeId = '',
}) => {

  return {
    title: 'Agogify爱购季好友邀请',
    path: `${page}?userName=${userName}&type=bookingVideo&bookingCode=${bookingCode}&salesId=${salesId}&storeId=${storeId}`
  }
}
