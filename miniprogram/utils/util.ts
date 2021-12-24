type formatType = 'yyyy-MM-dd' | 'yyyy-MM-dd' | 'yyyy.MM.dd' | 'hh:mm'

export const formatTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

export const timeFormat = (date: Date, format: formatType) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const str = format.replace('yyyy', year.toString()).replace('MM', formatNumber(month)).replace('dd', formatNumber(day)).replace('hh', formatNumber(hour)).replace('mm', formatNumber(minute)).replace('ss', formatNumber(second))
  return str
}

const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}



export const sortByCharCode = (formatObj: payment.paymentSignParams) => {
  return (Object.keys(formatObj) as Array<keyof payment.paymentSignParams>).sort(sortByCharCodeFn).map(k => `${k}=${formatObj[k]}`).join('&')
}

const sortByCharCodeFn = <T extends string>(a: T, b: T, index: number = 0): number => {
  let [code1, code2] = [a.charCodeAt(index), b.charCodeAt(index)]
  return code1 !== code2 ? code1 - code2 : sortByCharCodeFn(a, b, ++index)
}

export const getIdFromString = (strId: string) => {
  const list = strId.split('/')
  return Number(list[list.length - 1])
}
