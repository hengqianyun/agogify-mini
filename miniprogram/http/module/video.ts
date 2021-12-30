import { post } from "../index";

const videoModule = {
  translate: (recordeFile: string | ArrayBuffer) => post<swaggerI.translateRes, {'data': string | ArrayBuffer, [key: string]: any}>('store/tmt-inputs', {
    
    "region": "ap-shanghai",
      "sessionUuid": "test001",
      "source": "zh",
      "target": "en",
      "audioFormat": "mp3",
      "seq": 0,
      "isEnd": true,
      "data": recordeFile

  }),
}

export default videoModule