import { IMAGEBASEURL, IMAGEPATHS } from "../../http/index"
import reserveModule from "../../http/module/reserve"
import storeModule from "../../http/module/store"
import CustomMessageTypes from "../../libs/tim/custom_message_types"
import { joinStoreGroup, quitGroup, sendCustomMessage } from "../../libs/tim/tim"
import { getIdFromString, getStringCode } from "../../utils/util"

interface SimpleTitme {
  date: string
  week: string
}

type SimpleTableItemClass = 'top' | 'bottom' | 'center' | 'bottom-center' | ''



interface SimpleTableItem {
  checked: boolean
  x: number
  y: number
  id: string
  startTime: string
  endTime: string
  disabled: boolean
  className?: SimpleTableItemClass
  text?: string
  paramsId?: number
  paramsVersion?: number
  booked: false
}

type WeekNum = 1 | 2 | 3 | 4 | 5 | 6 | 0

const weekMap: Map<WeekNum, string> = new Map([
  [1, '一'],
  [2, '二'],
  [3, '三'],
  [4, '四'],
  [5, '五'],
  [6, '六'],
  [0, '日'],
])

type DurationType = 30 | 45

interface ReserveRes {
  start: string
  end: string
  x: number
  y1: number
  y2: number
}

const startTime = 16
const endTime = 23.5
const durationPerHour = 4
const durationCount = (endTime - startTime) * durationPerHour
const weekLength = 7

Page({

  /**
   * 页面的初始数据
   */
  data: {
    stores: [] as storeDesign.storeItem[],
    currentStoreIndex: 0,
    chooseStore: 'store3',
    // sales: [] as storeDesign.sale[][],
    sales: {} as { [key: string]: storeDesign.sale[] },
    sale: 3,
    times: [] as string[],
    scrollTitles: [] as SimpleTitme[],
    tableItems: [[], [], [], [], [], [], []] as SimpleTableItem[][],
    duration: 45 as DurationType,
    reserveRes: {} as ReserveRes,
    startTime: '',
    endTime: '',
    saleLanguage: '',
    reserveBtnDisabled: false,
    isEmpty: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    const today = new Date()
    const [year, month, date] = [today.getFullYear(), today.getMonth(), today.getDate()]
    const newDay = new Date(year, month, date + 1, 8)
    const startTime = this.getGMTTimerString(newDay)
    const endTime = this.getGMTTimerString(new Date(newDay.setDate(date + weekLength)))
    const stores = wx.getStorageSync<storeDesign.storeItem[]>('reserveStores')
    const { salesId } = this.options as { salesId: string | undefined }
    this.setData({
      stores: stores.map(e => {
        e.logo.path = IMAGEBASEURL + IMAGEPATHS.storeNormal1x + e.logo.path;
        return e
      }),
      startTime,
      endTime,
      sale: 0
    })
    // this.initDurations()
    this.initTitle()
    await this.querySales(salesId)
    // this.setData({
    //   'tableItems[0][2].disabled': true,
    //   'tableItems[0][3].disabled': true,
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  initTitle() {
    const titleList = []
    const today = new Date()
    const [year, month, date] = [today.getFullYear(), today.getMonth(), today.getDate()]
    const nowDate = new Date(year, month, date + 1)
    let sec = nowDate.getTime(), aDaySec = 1000 * 60 * 60 * 24
    for (let i = 0; i < weekLength ; i++) {
      const date = new Date(sec + aDaySec * i)
      const day = date.getDate(), month = date.getMonth(), week = date.getDay() as WeekNum
      titleList.push({
        date: `${month + 1}.${day < 10 ? '0' + day : day}`,
        week: '周' + weekMap.get(week) || ''
      })
    }
    this.setData({
      scrollTitles: titleList,
    })
  },

  /**
   * 
   * @param salesId 目标销售
   */
  async querySales(salesId?: string) {
    const { currentStoreIndex, stores, sales } = this.data
    const params = {
      page: 1,
      itemsPerPage: 100,
      'store.code': stores[currentStoreIndex].code,
    }
    try {
      const res = await storeModule.querySales(params)
      const { "hydra:member": list } = res.data
      // sales[stores[currentStoreIndex].code] = list.reverse()
      sales[stores[currentStoreIndex].code] = list.map(e => {
        return e.roles.includes('ROLE_STORE_SHOPPER_ACCESS') ? { ...e, lastName: e.lastName + '(顾问)' } : e
      })
      this.setData({
        sales: this.data.sales,
        saleLanguage: list[0].languages.map(e => {
          return e === 'chinese' ? '中文' : '英语'
        }).join()
      })
      const index = list.findIndex(e => e["@id"] === salesId)
      if (!!salesId) {
        this.setData({
          sale: index > -1 ? index : 0,
        })
      }

      this.querySalesTimeSlots()
    } catch { }
  },

  /**
   * 目前时间参照+01:00时区，从下午四点到晚上十一点半
   */
  initDurations(startHour: number, durationCount: number) {
    const timeList = []
    for (let i = 1; i <= durationCount; i++) {
      const num = i % durationPerHour
      let string = ''
      switch (num) {
        case 0:
          if (startHour === 23) {
            string = `${startHour}:45-0:00`
            startHour = 0
          } else {
            string = `${startHour}:45-${++startHour}:00`
          }
          break
        case 1:
          string = `${startHour}:00-${startHour}:15`
          break
        case 2:
          string = `${startHour}:15-${startHour}:30`
          break
        case 3:
          string = `${startHour}:30-${startHour}:45`
          break
      }
      timeList.push(string)
    }
    this.setData({
      times: timeList,
    })
  },

  initTimeSlots() {
    let tableItems: SimpleTableItem[][] = []
    for (let i = 0; i < weekLength; i++) {
      tableItems.push([] as SimpleTableItem[])
      for (let j = 0; j < durationCount; j++) {
        tableItems[i].push({ checked: false, x: i, y: j, id: `${i}${j}`, disabled: true, startTime: this.getTime(i, j, true), endTime: this.getTime(i, j, false), booked: false })
      }
    }
    this.setData({
      tableItems: tableItems
    })
  },

  async handlePreStore() {
    if (this.data.currentStoreIndex === 0) return
    this.setData({
      currentStoreIndex: --this.data.currentStoreIndex
    })
    await this.querySales()
  },
  async handleNextStore() {
    if (this.data.currentStoreIndex === this.data.stores.length - 1) return
    this.setData({
      currentStoreIndex: ++this.data.currentStoreIndex
    })
    await this.querySales()
  },

  async querySalesTimeSlots() {
    wx.showLoading({ title: '加载中' })
    try {
      const sales = this.data.sales[this.data.stores[this.data.currentStoreIndex].code][this.data.sale]
      const code = sales["@id"]
      const params: any = {
        'startTime[after]': this.data.startTime,
        'endTime[before]': this.data.endTime,
      }
      if (sales.roles.includes('ROLE_STORE_SHOPPER_API_ACCESS')) {
        const i = sales.email.indexOf('.')
        params['sales.email'] = sales.email.substr(i + 1)
      } else {
        params['sales.id'] = getIdFromString(code)
      }

      const res = await reserveModule.querySalesTimeSlots(params)
      const { "hydra:member": list } = res.data
      if (list.length === 0) {
        this.setData({
          isEmpty: true
        })
        return
      }
      this.setData({
        isEmpty: false
      })
      /**
       * 服务器获取的时间异常，UTC八点，会format成0点+8，所以需要手动加上八小时
       */
      const timeZone = -(new Date().getTimezoneOffset()) / 60;
      const timeList: number[][][] = [[], [], [], [], [], [], []]
      let latest = 0, earliest = -1
      for (const slot of list) {
        const { startTime, version, '@id': id } = slot
        const targetDateTime = new Date(startTime.split('GMT')[0].replace('T', ' ').split('-').join('/'))
        const [targetMin, targetHour, targetyear, targetMonth, targetDay] = [targetDateTime.getMinutes(), targetDateTime.getHours() + timeZone, targetDateTime.getFullYear(), targetDateTime.getMonth(), targetDateTime.getDate()]
        // let targetDate = new Date(targetyear, targetMonth, targetDay)
        const todayDateTime = new Date(this.data.startTime.split('GMT')[0].replace('T', ' ').split('-').join('/'))
        const [todayYear, todayMonth, todayDate] = [todayDateTime.getFullYear(), todayDateTime.getMonth(), todayDateTime.getDate()]
        const targetMillsec = Date.parse(`${targetyear}/${targetMonth + 1}/${targetDay}`)
        const todayMillsec = Date.parse(`${todayYear}/${todayMonth + 1}/${todayDate}`)
        const i = (targetMillsec - todayMillsec) / (1 * 24 * 60 * 60 * 1000)
        // let tempHour = targetHour >= 24 ? targetHour - 24 : targetHour
        let tempHour = targetHour
        if (tempHour < earliest || earliest < 0) earliest = tempHour

        if (tempHour > latest) latest = tempHour
        if (tempHour === 0) latest = 24
        if (targetHour >= 24) {
          try {
            timeList[i + 1].push([tempHour, targetMin, version, getIdFromString(id)])
          } catch { }
        } else {
          timeList[i].push([tempHour, targetMin, version, getIdFromString(id)])
        }
      }
      earliest = earliest === -1 ? 0 : earliest
      earliest = 14
      const length = (latest - earliest + 1) * 4
      this.initDurations(earliest, length)
      const tableItems: SimpleTableItem[][] = [[], [], [], [], [], [], []]
      for (let i = 0; i < tableItems.length; i++) {
        for (let j = 0; j < length; j++) {
          tableItems[i].push({ checked: false, x: i, y: j, id: `${i}${j}`, disabled: true, startTime: this.getTime(i, j, true), endTime: this.getTime(i, j, false), booked: false })
        }
      }
      console.log('timeList -->', timeList)
      for (let i = 0; i < timeList.length; i++) {
        console.debug(`i等于${i}`)
        for (let j = 0; j < timeList[i].length; j++) {
          const [hour, min, version, id] = timeList[i][j]
          const index = (hour - earliest) * 4 + min / 15
          console.debug(`index等于${index}`)
          if (!!tableItems[i][index] && tableItems[i][index].paramsVersion !== 2) {
            tableItems[i][index].disabled = false
            tableItems[i][index].paramsVersion = version
            tableItems[i][index].paramsId = id
            if (version === 2) {
              tableItems[i][index].disabled = true
            }
          }
        }
      }

      this.setData({
        // tableItems: this.data.tableItems
        tableItems,
      })
      // loading = false
    } catch (err) {
      console.log(err)

    } finally {
      wx.hideLoading()
    }

  },

  getTime(i: number, j: number, isStart: boolean) {
    const title = this.data.scrollTitles[i]
    const duration = this.data.times[j]
    const dateList = title.date.split('.')
    const mon = Number(dateList[0])
    const day = Number(dateList[1])
    const durations = duration.split('-')
    const startTimes = durations[0].split(':')
    const endTimes = durations[1].split(':')
    const year = (new Date()).getFullYear()
    if (isStart) {
      return (new Date(year, mon - 1, day, Number(startTimes[0]), Number(startTimes[1]))).toISOString()
    } else {
      return (new Date(year, mon - 1, day, Number(endTimes[0]), Number(endTimes[1]))).toISOString()
    }
  },

  handleTap(event: WechatMiniprogram.TouchEvent) {
    const { x, y } = event.currentTarget.dataset as { x: number, y: number, id: string }
    const item = this.data.tableItems[x][y]
    if (item.disabled) return
    const { duration, tableItems, reserveRes } = this.data

    const res = this.judgeDate(x, y)
    if (!res) {
      wx.showToast({ title: '当前时间不满足', icon: 'error', duration: 2000, })
      return
    }
    const { y1, y2 } = res
    const { timeText, weekText } = this.formatHtml(y1, y2, x)
    if (reserveRes.end) {
      this.setData({
        ['tableItems[' + reserveRes.x + '][' + reserveRes.y1 + ']']: Object.assign(tableItems[reserveRes.x][reserveRes.y1], { className: '', text: '', checked: false }),
        ['tableItems[' + reserveRes.x + '][' + reserveRes.y2 + ']']: Object.assign(tableItems[reserveRes.x][reserveRes.y2], { className: '', text: '', checked: false }),
      })
      if (reserveRes.y2 - reserveRes.y1 === 2) {
        this.setData({
          ['tableItems[' + reserveRes.x + '][' + (reserveRes.y1 + 1) + ']']: Object.assign(tableItems[reserveRes.x][reserveRes.y1 + 1], { className: '', text: '', checked: false }),
        })
      }
    }
    if (duration === 30) {
      this.setData({
        ['tableItems[' + x + '][' + y1 + ']']: Object.assign(tableItems[x][y1], { text: weekText, className: 'bottom', checked: true }),
        ['tableItems[' + x + '][' + y2 + ']']: Object.assign(tableItems[x][y2], { text: timeText, className: 'top', checked: true }),
        reserveRes: { start: timeText.split('-')[0], end: timeText.split('-')[1], x: x, y1, y2 }
      })
    } else {
      this.setData({
        ['tableItems[' + x + '][' + (y2) + ']']: Object.assign(tableItems[x][y2], { checked: true }),
        ['tableItems[' + x + '][' + (y2 - 1) + ']']: Object.assign(tableItems[x][y2 - 1], { text: timeText, className: 'center', checked: true }),
        ['tableItems[' + x + '][' + (y1) + ']']: Object.assign(tableItems[x][y1], { text: weekText, className: 'bottom-center', checked: true }),
        reserveRes: { start: timeText.split('-')[0], end: timeText.split('-')[1], x: x, y1, y2 }
      })
    }
  },

  async handleCommitReserve() {
    this.setData({
      reserveBtnDisabled: true
    })
    const { x, y1, y2 } = this.data.reserveRes
    const list = this.data.tableItems[x]
    let timeSlots = []
    for (let i = y1; i <= y2; i++) {
      if (list[i].paramsVersion != undefined && list[i].paramsId != undefined) {
        timeSlots.push({
          version: list[i].paramsVersion,
          id: list[i].paramsId
        })
      }
    }
    if (timeSlots.length === 0) {
      wx.showToast({
        title: '请选择预约时间',
        icon: 'error',
        duration: 2000,
      })
      this.setData({
        reserveBtnDisabled: false
      })
      return
    }
    try {
      await reserveModule.bookTimeSlot({ timeSlots } as reserveDesign.bookTimeSlotParams)
      wx.showToast({
        title: '预约成功',
        icon: 'success',
        duration: 2000,
      })
      try {
        await joinStoreGroup(`${this.data.stores[0].code}_Meeting`);
        await sendCustomMessage({ data: CustomMessageTypes.RESERVE, description: "succesee" }, `${this.data.stores[0].code}_Meeting`, this.data.sales[this.data.stores[this.data.currentStoreIndex].code][this.data.sale]["@id"], {}, {})
        await quitGroup(`${this.data.stores[0].code}_Meeting`)
      } catch (err) {
        console.log(err)
      }

      setTimeout(() => {
        wx.navigateBack()
      }, 1000)
    } catch {
      wx.showToast({
        title: '请求异常，请刷新重试',
        icon: 'error',
        duration: 2000,
      })
    } finally {
      this.setData({
        reserveBtnDisabled: false
      })
    }
  },

  handleCheckBoxChange(event: WechatMiniprogram.TouchEvent) {
    const { duration } = event.currentTarget.dataset as { duration: DurationType }
    this.setData({
      duration: duration
    })
  },

  handleSaleChange({ detail }: WechatMiniprogram.TouchEvent) {
    const { index } = detail as unknown as { index: number }
    this.setData({
      sale: index,
      saleLanguage: this.data.sales[this.data.stores[this.data.currentStoreIndex].code][index].languages.map(e => {
        return e === 'chinese' ? '中文' : '英语'
      }).join()
    })
    this.querySalesTimeSlots()
  },

  judgeDate(x: number, y: number): false | { y1: number, y2: number } {
    const { tableItems, duration } = this.data
    if (duration === 30) {
      if (tableItems[x][y + 1]?.disabled) {
        if (y - 1 < 0 || tableItems[x][y - 1].disabled) {
          return false
        }
        return { y1: y - 1, y2: y }
      }
      return { y1: y, y2: y + 1 }
    } else {
      if (tableItems[x][y + 1].disabled) {
        if (y - 1 < 0 || y - 2 < 0 || tableItems[x][y - 1].disabled || tableItems[x][y - 2].disabled) {
          return false
        }
        return {
          y1: y - 2, y2: y
        }
      } else if (tableItems[x][y + 2].disabled) {
        if (y - 1 < 0 || tableItems[x][y - 1].disabled) {
          return false
        }
        return {
          y1: y - 1,
          y2: y + 1
        }
      } else {
        return {
          y1: y,
          y2: y + 2
        }
      }
    }
  },

  formatHtml(y1: number, y2: number, x: number) {
    const { scrollTitles, times } = this.data
    const weekText = `${scrollTitles[x].date} ${scrollTitles[x].week}`
    const timeText = `${times[y1].split('-')[0]}-${times[y2].split('-')[1]}`
    return {
      weekText,
      timeText
    }
  },

  getGMTTimerString(time: Date) {
    const year = time.getUTCFullYear()
    const month = time.getUTCMonth() + 1
    const day = time.getUTCDate()
    const hour = time.getUTCHours()
    const timezone = 0 - time.getTimezoneOffset() / 60

    return timezone < 0 ? `${year}-${month}-${day}T${hour}:00:00GMT-${timezone > -10 ? '0' : ''}${timezone}:00` : `${year}-${month}-${day}T${hour}:00:00GMT-${timezone < 10 ? '0' : ''}${timezone}:00`

  }
})