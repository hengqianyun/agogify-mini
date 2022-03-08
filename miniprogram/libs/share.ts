const shareReturn = (title: string, path: string, promise?: Promise<void>) => {
  return {
    title,
    path,
    promise
  }
} 


/**
 * video-page 邀请好友前来视频界面
 * @param userName 
 * @param sessionCode 
 * @returns 
 */
export const shareVideo = (userName: string, sessionCode: string, page: string) => {
  return {
    title: 'hahaha',
    path: `${page}?type=video&userName=${userName}&sessionCode=${sessionCode}`
  }
}
