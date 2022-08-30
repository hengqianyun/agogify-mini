import { uuid } from "../../utils/util";
import { post, typePost } from "../index";

const videoModule = {
  translateSpeech: (recordeFile: string | ArrayBuffer) => post<swaggerI.translateRes, { 'data': string | ArrayBuffer,  [key: string]: any }>('private/tmt/speech-inputs', {

    "region": "ap-shanghai",
    "sessionUuid": uuid(),
    "source": "zh",
    "target": "en",
    "audioFormat": "mp3",
    "seq": 0,
    "isEnd": true,
    "data": recordeFile

  }),

  translateText: (sourceText: string) => typePost<swaggerI.translateRes, { [key: string]: any }>('private/tmt/text-inputs', {
    "region": "ap-shanghai",
    "source": "zh",
    "target": "en",
    "sourceText": sourceText
  }),

  translateTextToZh: (sourceText: string) => typePost<swaggerI.translateRes, { [key: string]: any }>('private/tmt/text-inputs', {
    "region": "ap-shanghai",
    "source": "en",
    "target": "zh",
    "sourceText": sourceText
  }),
}

export default videoModule