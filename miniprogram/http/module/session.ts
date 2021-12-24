import { get } from "../index";

const sessionModule = {
  // querySession: async (params: sessionDesign.querySessionParams) => await get<swaggerI.querySessionRes, sessionDesign.querySessionParams>('store/video-session/sessions', params)
  querySession: async (params: string) => await get<swaggerI.querySessionRes, sessionDesign.querySessionParams>('store/video-session/sessions?' + params)
}

export default sessionModule