import { IMAGEBASEURL, IMAGEPATHS } from "../../http/index"
import reserveModule from "../../http/module/reserve"
import { shareBooking } from "../../libs/share"
import { userProfile } from "../../libs/user/user"
import { getStringCode, localMonth, timeFormat } from "../../utils/util"

type reserveTagType = '待进行' | '已结束'

interface pageReserve extends reserveDesign.salesReserveItem {
    date: string
    duration: string
    tag: reserveTagType
    address: string
}

const timezone = -(new Date().getTimezoneOffset()) / 60

// pages/reserveList/reserveList.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active: 0,
        tabList: [
            { label: '待进行', status: '0' },
            { label: '已结束', status: '1' },
        ],
        reserveLists: [] as pageReserve[][],
        tabTitle: '待进行'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        this.queryReserveList()
        this.queryFinishedReserveList()
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
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage(option) {
        const { from, target } = option
        const { index } = target.dataset
        console.log(option)
        const item = this.data.reserveLists[0][index]
        if (from === 'button') {
            return shareBooking(userProfile.nickName!, getStringCode(item["@id"]), '/pages/share/share', {
                salesId: item.sales['@id'],
                storeId: getStringCode(item.sales.store['@id'])
            })
        }
    },

    onChange({ detail }: WechatMiniprogram.TouchEvent) {
        const { index } = detail as { index: number }
        if (index === 0) {
            this.setData({
                tabTitle: '待进行'
            })
        }
    },

    async queryReserveList() {
        const res = await reserveModule.queryMyReserveList({
            "endTime[after]": (new Date()).toISOString(),
            "order[startTime]": 'asc',
            "customer.id": userProfile.id,
        })

        const { "hydra:member": reserveList } = res.data

        const tempList = reserveList.map(e => {
            e.sales.store.logo.path = IMAGEBASEURL + IMAGEPATHS.storeNormal1x + e.sales.store.logo.path
            let startTime = new Date(e.startTime.split('GMT')[0])
            let endTime = new Date(e.endTime.split('GMT')[0])
            startTime = new Date(startTime.setHours(startTime.getHours() + timezone))
            endTime = new Date(endTime.setHours(endTime.getHours() + timezone))
            let count = e.guests.length
            let isOwner = e.customer["@id"] === userProfile.pathId
            let isEvent = e.type === 'event'
            return {
                ...e,
                date: localMonth(startTime),
                duration: `${timeFormat(startTime, 'hh:mm')}~${timeFormat(endTime, 'hh:mm')}`,
                isFinish: false,
                address: e.sales.store.billingData.country?.name + ' ' + e.sales.store.billingData.city?.name,
                count,
                isOwner,
                isEvent
            }
        })

        this.setData({
            'reserveLists[0]': tempList
        })
    },

    async queryFinishedReserveList() {
        const res = await reserveModule.queryMyReserveList({
            "endTime[before]": (new Date()).toISOString(),
            "order[startTime]": 'desc',
            "customer.id": userProfile.id,
        })
        const { "hydra:member": reserveList } = res.data

        const tempList = reserveList.map(e => {
            e.sales.store.logo.path = IMAGEBASEURL + IMAGEPATHS.storeNormal1x + e.sales.store.logo.path
            let startTime = new Date(e.startTime.split('GMT')[0])
            let endTime = new Date(e.endTime.split('GMT')[0])
            startTime = new Date(startTime.setHours(startTime.getHours() + timezone))
            endTime = new Date(endTime.setHours(endTime.getHours() + timezone))
            let count = e.guests.length
            let isOwner = e.customer["@id"] === userProfile.pathId
            let isEvent = e.type === 'event'
            return {
                ...e,
                date: localMonth(startTime),
                duration: `${timeFormat(startTime, 'hh:mm')}~${timeFormat(endTime, 'hh:mm')}`,
                isFinish: true,
                address: e.sales.store.billingData.country?.name + ' ' + e.sales.store.billingData.city?.name,
                count,
                isOwner,
                isEvent,
            }
        })

        this.setData({
            'reserveLists[1]': tempList
        })
    },

    handleCall({ currentTarget }: WechatMiniprogram.TouchEvent) {
        const { index } = currentTarget.dataset as { index: number }
        const reserveItem = this.data.reserveLists[0][index]
        console.log(reserveItem)
        const { '@id': saleId, store } = reserveItem.sales
        const { '@id': reservePath } = reserveItem
        const { '@id': pathCode } = store
        const code = getStringCode(pathCode)
        const bookingCode = reserveItem.code
        if (reserveItem.type === 'event') {
            wx.navigateTo({

                url: `../room/room?roomId=agogify-activity-${bookingCode}&storeGroupId=${'agogify'}&avGroupId=agogify-activity-${bookingCode}&storeId=${'IRERI'}&saleId=${saleId}`
            })
        } else {

            wx.navigateTo({
                url: `../roomWaiting/roomWaiting?storeId=${code}&saleId=${saleId}&type=reserveIn&bookingCode=${getStringCode(reservePath)}&owner=${reserveItem.customer}`
            })
        }
    },

    addFavorateItem({ currentTarget }: WechatMiniprogram.TouchEvent) {
        const { index } = currentTarget.dataset as { index: number }
        const reserveItem = this.data.reserveLists[0][index]
    }
})