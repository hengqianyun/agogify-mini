/**
 * video-page 邀请好友前来视频界面
 * @param userName 
 * @param sessionCode 
 * @returns 
 */
export const shareVideo = (userName: string, sessionCode: string, page: string) => {
  return {
    title: 'hahaha',
    path: `${page}?userName=${userName}&type=video&sessionCode=${sessionCode}`
  }
}
