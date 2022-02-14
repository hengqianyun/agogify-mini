import { get, post } from "../index";

const ocrModule = {
  getToken: async () => await get<swaggerI.baiduOauth>('https://aip.baidubce.com/oauth/2.0/token', {
    grant_type: 'client_credentials',
    // aaa那里填写自己的百度key值
    client_id: 'G9o3SbLeCCRnGI5XDk76IGQs',
    client_secret: 'FNIqBNFCwN4f5ZeFpWLzG8OKFuf6FkA1'
  }),
  getAssessToken: async () => await get<swaggerI.wxToken>('https://api.weixin.qq.com/cgi-bin/token', {
    grant_type: 'client_credential',
    appid: 'wxe7456276eeb43fbe',
    secret: '966bf5fb2cbd484be1b73831537780e3'
  }),
  baiduOCR: async (access_token: string, params: {
    image: string | ArrayBuffer,
    id_card_number: string,
    name: string
  }) => await post<swaggerI.baiduOcrRes>('https://aip.baidubce.com/rest/2.0/face/v3/person/verify?access_token=' + access_token, {...params, image_type: 'BASE64',})
  // queryNewStore: async () => await get<storeDesign.storeItem>('')
}

export default ocrModule