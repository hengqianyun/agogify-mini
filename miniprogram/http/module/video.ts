import { post, typePost } from "../index";

const videoModule = {
  translateSpeech: (recordeFile: string | ArrayBuffer, id: number) => post<swaggerI.translateRes, { 'data': string | ArrayBuffer, 'sessionUuid': number, [key: string]: any }>('private/tmt/speech-inputs', {

    "region": "ap-shanghai",
    "sessionUuid": id,
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
}

export default videoModule