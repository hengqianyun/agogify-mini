let _tim: TIMSKD;

interface sendCustomGroupMessageParams {
  keys?: string[]
  values?: string[]
  failed?: Function
  send?: Function
}

interface sendCustomGroupMessageInsertDBParams extends sendCustomGroupMessageParams {
  success?: Function
  sessionId?: string
}

export const setTim = (target: TIMSKD) => {_tim = target}

export const sendCustomGroupMessageInsertDB = async (groupId: string, type: string, to: string, salesId: string, data: sendCustomGroupMessageInsertDBParams) => {
  await _tim.sendMessage
}

export const sendCustomGroupMessage = async (groupId: string, type: string, to: string, salesId: string, data: sendCustomGroupMessageParams) => {

}
