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

export const localMonth = (date: Date) => {
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${formatNumber(month)}月${formatNumber(day)}日`
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

export const getStringCode = (atId: string) => {
  const list = atId.split('/')
  return list[list.length - 1] 
}

export const getFirstNameAndLastName = (name: string) => {
  const nameList = ['欧阳', '太史', '端木', '上官', '司马', '东方', '独孤', '南宫', '万俟', '闻人', '夏侯', '诸葛', '尉迟', '公羊', '赫连', '澹台', '皇甫', '宗政', '濮阳', '公冶', '太叔', '申屠', '公孙', '慕容', '仲孙', '钟离', '长孙', '宇文', '司徒', '鲜于', '司空', '闾丘', '子车', '亓官', '司寇', '巫马', '公西', '颛孙', '壤驷', '公良', '漆雕', '乐正', '宰父', '谷梁', '拓跋', '夹谷', '轩辕', '令狐', '段干', '百里', '呼延', '东郭', '南门', '羊舌', '微生', '公户', '公玉', '公仪', '梁丘', '公仲', '公上', '公门', '公山', '公坚', '左丘', '公伯', '西门', '公祖', '第五', '公乘', '贯丘', '公皙', '南荣', '东里', '东宫', '仲长', '子书', '子桑', '即墨', '达奚', '褚师', '吴铭'];
    let firstName = '', lastName = ''
    if (name.length > 2) {
      lastName = name.substr(0, 2)
      firstName = name.substr(2)
      if (!nameList.includes(lastName)) {
        lastName = name.substr(0, 1)
        firstName = name.substr(1)
      }
    } else {
      lastName = name.substr(0, 1)
      firstName = name.substr(1)
    }
    return {
      firstName, lastName
    }
}

export const uuid = () => {
  let s: string[] = []
  let hexDigits = '0123456789abcdef'
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4'
  s[19] = hexDigits.substr((s[19] as any & 0x3) | 0x8, 1)
  s[8] = s[13] = s[18] = s[23] = '-'

  return s.join('')
}
