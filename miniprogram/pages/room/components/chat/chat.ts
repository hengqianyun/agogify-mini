// pages/room/components/chat/chat.ts
import { $on, $remove } from '../../../../utils/event'
import videoModule from '../../../../http/module/video'
import addressModule from '../../../../http/module/address'
import orderModule from '../../../../http/module/order'
import { getIdFromString, sortByCharCode } from '../../../../utils/util'
import { clearSessionAsync } from '../../../../utils/querySession'
import drawQrcode from 'weapp-qrcode-canvas-2d'
import sessionModule from '../../../../http/module/session'
import { clearAckTimeout, quitGroup, resetTimerAndSeq, sendAck, sendCustomMessage, sendImageMessage, sendTextMessage } from '../../../../libs/tim/tim'
import CustomMessageTypes from '../../../../libs/tim/custom_message_types'
import { userProfile } from '../../../../libs/user/user'
import storeModule from '../../../../http/module/store'
import displayProductModule from '../../../../http/module/displayProduct'
import { IMAGEPATHS, IMAGEBASEURL } from '../../../../http/index'
import queueTicketModule from '../../../../http/module/queueTicket'

const recorderManager = wx.getRecorderManager()
const recordOptions: WechatMiniprogram.RecorderManagerStartOption = {
  duration: 60000,
  sampleRate: 8000,
  numberOfChannels: 1,
  encodeBitRate: 16000,
  format: 'aac', // 音频格式，选择此格式创建的音频消息，可以在即时通信 IM 全平台（Android、iOS、微信小程序和Web）互通
}
let tim: TIMSKD

interface _Customer {
  pathId: string
  nickname: string
  avatar: string
}

type _SystemMessageType = 'enter' | 'leave'

interface _SystemMessage {
  type: _SystemMessageType
  nickName: string
}

interface _DisplayProductItem extends displayProductDesign.displayProductItem {
  name: string
  desc: string
  path: string
  canTap: boolean
}

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    storeName: String,
    storeAvatar: String,
    storeId: String,
    groupId: String,
    saleId: String,
    isReconnect: Boolean,
    isGuest: Boolean,
    isLive: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    messageView: '',
    artistTransMessageView: '',
    chatHistory: [] as Array<TIMMessage | _SystemMessage>,
    artistTranslateList: [] as Array<TIMMessage | _SystemMessage>,
    inputValue: '',
    conversationID: '',
    canSend: false,
    percent: 0,
    showPopup: false,
    isRecording: false,
    address: {} as addressDesign.address,
    addressList: [] as addressDesign.address[],
    pageInfo: {
      page: 1,
      itemsPerPage: 99
    } as swaggerI.pageRequestParams,
    tokenValue: '',
    orderInfo: {} as orderDesign.orderBasic,
    product: {
      name: '商品名称',
      price: 2000,
      size: 32
    },
    counts: {
      price: 2000,
      taxBack: 200,
      service: 200,
      tax: 299,
      freight: 20,
      sum: 2000
    },
    productName: '',
    paymentId: '',
    shipmentId: '',
    productBrand: '',
    productCategory1: '',
    productCategory2: '',
    productCategory3: '',
    productCategory1CnName: '',
    productCategory2CnName: '',
    productCategory3CnName: '',
    productSize: '',
    payDialogLabel: '',
    qrcode: '',
    showMoreAddress: false,
    hasGetTime: false,
    showQrcode: false, // 支付弹框
    showDisplayProductPopup: false, // 商品弹框
    hasPaid: false,
    canLeave: true,
    payDialogBtnDisabled: false,
    enabledMic: true,
    itemsTotal: '',
    shippingTotal: '',
    total: '',
    hangupText: '确认挂断通话？',
    orderStep: 0, // 0 没有订单， 1 put address 2 put shipment 3 put payment 4 complete
    addressSelectDisabled: false,
    onlineTimer: 0,
    customers: [] as _Customer[],
    cusTimer: 0,
    needTrans: true,
    canSendTextMsg: true,
    showChangRoomDialog: false,
    changRoomDiloagCommitText: '',
    roomId: '',
    displayProductList: [] as _DisplayProductItem[],
    currentDisplayProduct: {} as _DisplayProductItem,
    showNewDP: false,
    ndpBtnDisable: false,
    isAssistantRoom: false,
    showTrans: true,
    showQueueStatus: false,
    isSecured: false,
    queueMessage: '',
    currentOrderDisplayProduct: {} as _DisplayProductItem,
    showOrderDisplayProductPopup: false,
    account: [] as { value: number | string, label: number | string }[],
    accountsIndex1: 0,
    accountsIndex2: 0,
    orderProductDesc: '',
    orderProductBtnDisabled: false,
    queueList: [],
    showQueueList: false,
    canGoAssistant: true,
    couponValue: '两张可用',
  },

  lifetimes: {
    async ready() {
      this.initRecording()
      const that = this
      $on({
        name: "onCustomMessageRecvEvent",
        tg: this,
        success: (res: TIMMessageReceive) => {
          const data = res.data[0]
          let payloadData: any;
          try {
            payloadData = JSON.parse(data.payload.data)
          } catch (err) { }
          // 判断消息是否发给自己
          if (payloadData.to === userProfile.pathId) {
            switch (payloadData.type) {
              case CustomMessageTypes.CHANGE_VIDEO_ROOM:
                this.setData({
                  showChangRoomDialog: true,
                  roomId: payloadData.roomId,
                })
                let timer = setTimeout(() => {
                  this.setData({
                    canGoAssistant: false
                  })
                }, 15000)
                wx.showModal({
                  title: '收到销售助理的购买服务请求，是否前往?',
                  confirmText: '立即前往',
                  cancelText: '再等一会',
                  async success(res) {
                    if (res.confirm) {
                      if (!that.data.canGoAssistant) {
                        wx.showToast({title: '超时', icon: 'error', duration: 2000})
                        that.setData({
                          canGoAssistant: true
                        })
                        clearTimeout(timer)
                        return
                      }

                      await sendCustomMessage({ data: CustomMessageTypes.JOIN_ASSISTANT_ROOM }, that.data.groupId, payloadData.saleId, {
                        success: () => {
                          that.triggerEvent('changeRoom', {
                            roomId: payloadData.roomId,
                            saleId: payloadData.saleId
                          })
                          that.setData({
                            isAssistantRoom: true
                          })
                        },
                        failed: () => {
                          wx.showModal({
                            title: '切换房间失败，是否重试？',
                            success(res) {
                              if (res.confirm) {
                                // 重试
                              } else {
                                // 通知销售以后再去
                              }
                            }

                          })
                        }
                      }, {})
                    } else {
                      // 通知销售以后再去
                      await sendCustomMessage({ data: CustomMessageTypes.NOT_JOIN_ASSISTANT_ROOM }, that.data.groupId, payloadData.saleId, {
                        success: () => {
                        },
                        failed: () => {
                        }
                      }, {})
                    }
                  }
                })
                console.log(this.data.showChangRoomDialog)
                break
              case CustomMessageTypes.LEAVE_ASSISTANT_ROOM:
                this.handleBackRoom(true)
                break
              case CustomMessageTypes.PRODUCT_OUT_OF_STOCK:
                this.setData({
                  showQueueStatus: true,
                  isSecured: false,
                  queueMessage: `抱歉，${payloadData.name}商品/尺码已售完，可选其他商品`
                })
                wx.showModal({
                    title: `抱歉，${payloadData.name}商品/尺码已售完，可选其他商品`,
                    showCancel: false,
                    confirmText: 'OK',
                    complete() {

                    }
                })
                setTimeout(() => {
                  this.setData({
                    showQueueStatus: false,
                  })
                }, 10000)
                break
              case CustomMessageTypes.PRODUCT_SECURED:
                this.setData({
                  showQueueStatus: true,
                  isSecured: true,
                  queueMessage: `您下单的${payloadData.name}号商品已备货，请等待订单服务`
                })
                setTimeout(() => {
                  this.setData({
                    showQueueStatus: false,
                  })
                }, 10000)
                break

              case CustomMessageTypes.PAY:

                const { tokenValue, productName, paymentId, shipmentId, productBrand, productCategory1, productCategory2, productCategory3, size, productCategory1CnName, productCategory2CnName, productCategory3CnName } = payloadData
                that.setData({
                  payDialogLabel: '确认订单',
                  tokenValue,
                  productName,
                  paymentId,
                  shipmentId,
                  productBrand,
                  productCategory1,
                  productCategory2,
                  productCategory3,
                  productSize: size,
                  productCategory1CnName,
                  productCategory2CnName,
                  productCategory3CnName,
                  hasPaid: false
                })
                try {
                  this.queryCart(tokenValue)
                } catch (err) {
                  this.resetOrder()
                }
                // this.queryOrderDetail(tokenValue)
                break
              case CustomMessageTypes.DISPOSE:
                clearSessionAsync()
                wx.navigateBack()
                break
              case CustomMessageTypes.PAY_CANCELED:
                this.resetOrder()
                this.setData({
                  showPopup: false,
                  canLeave: true
                })
                break
              case CustomMessageTypes.SCAN_FINISH:
                this.setData({
                  canLeave: true
                })
                break
              case 'ack':
                clearAckTimeout(payloadData.seq)
                break
              case 'CHECK_ONLINE':
                console.log('CHECK_ONLINE', payloadData)
            }
            if (payloadData.type !== 'ack' && payloadData.type !== CustomMessageTypes.TIMELEFT_CHECK) {

              sendAck({ data: 'ack', description: "succesee" }, this.data.groupId, this.properties.saleId, data.time.toString())
            }
          } else if (payloadData.to === 'all') {
            switch (payloadData.type) {
              case CustomMessageTypes.NEW_DISPLAY_PRODUCT:
                const code = this.data.groupId.split('agogify-activity-')[1]
                this.queryDisplayProduct(code)
                break
            }
          } else {
            if (payloadData.type === CustomMessageTypes.CUSTOMER_IN) {
              console.log('customer in --->', payloadData)
              // if (payloadData.pathId !== userProfile.pathId) {
              this.setData({
                chatHistory: this.data.chatHistory.concat([{
                  type: 'enter',
                  nickName: payloadData.nickname
                }])
              })
              // }
            } else if (payloadData.type === CustomMessageTypes.CUSTOMER_OUT) {
              console.log('customer out --->', payloadData)
              this.setData({
                chatHistory: this.data.chatHistory.concat([{
                  type: 'leave',
                  nickName: payloadData.nickname
                }])
              })
            }
          }

        }
      })

      $on({
        name: 'onGroupMessageRecvEvent',
        tg: this,
        async success(res: TIMMessageReceive) {
          const data = res.data[0]
          console.log('recv new text message -->', res)

          if (data.to === this.properties.groupId) {
            if (data.type === 'TIMCustomElem') {
              const payload = data.payload
              const desc = JSON.parse(payload.description)
              if (!!desc) {
                if (desc.data === 'CHECK_ONLINE') {
                  let flag = false
                  for (let i = 0; i < this.data.customers.length; i++) {
                    if (this.data.customers[i].pathId === data.from) {
                      flag = true
                      break
                    }
                  }
                  if (!flag) {
                    this.setData({
                      chatHistory: this.data.chatHistory.concat([{
                        type: 'enter',
                        nickName: data.nick
                      }])
                    })
                  }
                }
              }
            } else {
              const message = this.encodeMessage(data)
              try {
                if (message && message.payload.text.indexOf("artist_translate///:") === 0) {
                  const text = message.payload.text
                  const str = text.split('artist_translate///:')[1]
                  message.payload.text = str
                  this.setData({
                    artistTranslateList: this.data.artistTranslateList.concat([message]),
                    artistTransMessageView: message.ID
                  })
                } else
                  if (message && message.payload.text.indexOf("sysMsg///:") < 0) {
                    message.ID = 's' + message.ID.split(this.data.groupId + '-')[1]
                    this.setData({
                      chatHistory: this.data.chatHistory.concat([message])
                    })
                    this.setData({
                      messageView: message.ID
                    })
                  }
              } catch {
                // this.setData({
                //   chatHistory: this.data.chatHistory.concat([message!])
                // })
                // this.setData({
                //   messageView: message!.ID
                // })
              }
            }

          }
        }
      })

      await this.queryAddressList()
      if (this.properties.isReconnect) {
        // joinSessionGroup(this.data.groupId)
        this.initRecording()
        await this.queryAddressList()
        const sessionRes = await sessionModule.querySession('droppedByCustomer=false&state[]=active&state[]=paused&itemsPerPage=1&page=1')
        // const sessionRes = await sessionModule.querySession('droppedByCustomer=true&state[]=active&state[]=paused&customer.id=' + getIdFromString(wx.getStorageSync('oauth.data').customer) + '&itemsPerPage=1&page=1')

        const session = sessionRes.data['hydra:member'][0]
        console.log('session -->', session)
        let unfinishedOrder: sessionDesign.SessionOrder | null = null
        const { orders } = session
        for (let orderItem of orders) {
          const { items, paymentState, shippingState, checkoutState } = orderItem

          if (items.length === 0 || paymentState === 'cancelled') {
            continue
          }
          if (paymentState === 'awaiting_payment') {
            this.setData({
              orderStep: 4,
              addressSelectDisabled: true,
            })
            unfinishedOrder = orderItem
          } else if (paymentState == 'cart' && shippingState == 'cart' && checkoutState == 'cart') {
            unfinishedOrder = orderItem
          } else if (checkoutState === 'addressed') {
            this.setData({
              orderStep: 1
            })
            unfinishedOrder = orderItem
          } else if (checkoutState === 'shipping_selected') {
            this.setData({
              orderStep: 2,
              addressSelectDisabled: true,
            })
            unfinishedOrder = orderItem
          } else if (checkoutState === 'payment_selected') {
            this.setData({
              orderStep: 3,
              addressSelectDisabled: true,
            })
            unfinishedOrder = orderItem
          }
        }
        if (!!unfinishedOrder) {
          let strnote = unfinishedOrder.notes
          let note = JSON.parse(strnote)
          note = note[unfinishedOrder.items[0].id.toString()]
          const { brand, category1, category2, category3, size, productName } = note['zh_Hans_CN']
          const { tokenValue, shipments, payments, shippingAddress } = unfinishedOrder
          const { id: shipmentId } = shipments[0]
          const { id: paymentId } = payments[0]
          this.setData({
            payDialogLabel: '确认订单',
            tokenValue,
            productName,
            paymentId: paymentId.toString(),
            shipmentId: shipmentId.toString(),
            productBrand: brand,
            productSize: size,
            productCategory1CnName: category1,
            productCategory2CnName: category2,
            productCategory3CnName: category3,
            hasPaid: false
          })
          if (this.data.orderStep === 4) {
            await this.queryOrder(tokenValue)
            this.setData({
              payDialogLabel: '已付款',
              showQrcode: true,
              address: shippingAddress,
            })
          } else {
            this.queryCart(tokenValue)
          }
        }
      }

      sendCustomMessage({ data: CustomMessageTypes.CHECK_ONLINE, description: userProfile.avatar }, this.data.groupId, this.properties.saleId, {}, { avatar: userProfile.avatar, nickName: userProfile.nickName }, false)
      this.data.onlineTimer = setInterval(() => {
        sendCustomMessage({ data: CustomMessageTypes.CHECK_ONLINE, description: userProfile.avatar }, this.data.groupId, this.properties.saleId, {}, { avatar: userProfile.avatar, nickName: userProfile.nickName }, false)
      }, 5000)
      this.checkSalesLanuage()
      if (this.data.isLive) {
        const code = this.data.groupId.split('agogify-activity-')[1]
        await this.queryDisplayProduct(code)
        this.queryQueueList()
      }
    },

    detached() {
      $remove({
        name: "onCustomMessageRecvEvent",
        tg: this,
      })
      $remove({
        name: "onGroupMessageRecvEvent",
        tg: this,
      })
      $remove({
        name: "joined_room",
        tg: this,
      })
      resetTimerAndSeq()
      clearInterval(this.data.onlineTimer)
      quitGroup(`${this.properties.storeId}_Meeting`)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    async handleShowQueueList() {
      await this.queryQueueList();
      this.setData({
        showQueueList: !this.data.showQueueList,
      })
    },
    async queryQueueList() {
      const code = this.data.groupId.split('agogify-activity-')[1]
      const res = await queueTicketModule.getQueue(code)
      const list = res.data['hydra:member']
      console.log(list)
      const displayProductList = this.data.displayProductList
      for (let item of list) {
        item.notes = JSON.parse(item.notes)
        const product = displayProductList.find(e => e['@id'] === item.displayProduct)
        item.product = product
      }
      this.setData({
          queueList: list.filter((e: any) => e.notes.state !== 'outOfStock')
        })
        console.log(this.data.queueList)
        console.log(list)
    },
    handleDialogCommit() {

      this.setData({
        showChangRoomDialog: false
      })
    },
    handleBackRoom(active = false) {
      const that = this
      if (active) {
        wx.showToast({
          title: '当前服务已结束',
          icon: 'none',
          duration: 2000,
          success() {
            that.triggerEvent('backRoom')
            that.setData({
              isAssistantRoom: false
            })
          }
        })
        return
      }
      wx.showModal({
        title: '是否返回搭配师的直播间？',
        async success(res) {
          if (res.confirm) {
            // await sendCustomMessage({ data: CustomMessageTypes.LEAVE_ASSISTANT_ROOM }, that.data.groupId, that.properties.saleId, {
            //   success: () => {
            //   },
            //   failed: () => {
            //   }
            // }, {})
            that.triggerEvent('backRoom')
            that.setData({
              isAssistantRoom: false
            })

          }
        }
      })

    },
    /**
     * 查询display product
     * @param code 
     */
    async queryDisplayProduct(code: string) {
      try {
        const res = await displayProductModule.queryDisplayProduct(code)
        const list = res.data['hydra:member']
        const tempList = list.map((e, index) => {
          let name = (index + 1).toString()
          let desc = ''
          if (!Array.isArray(e.translations)) {
            desc = e.translations.zh_CN.description
          }
          return {
            name,
            desc,
            ...e,
            path: IMAGEBASEURL + IMAGEPATHS.displayProductThumbnailSmaill2x + e.image.path,
            canTap: true,
            stringPrice: (e.price / 100).toFixed(2)
          }
        })
        let item = tempList[tempList.length - 1]
        let flag = item.id === this.data.currentDisplayProduct.id
        this.setData({
          displayProductList: tempList,
          currentDisplayProduct: item,
          showNewDP: !flag
        })
        console.log(this.data.groupId)
      } catch (err) { }
    },
    hideNewDisplayProduct() {
      this.setData({
        showNewDP: false
      })
    },
    async handleNewDisplayProductQueue() {
      try {
        // if (this.data.ndpBtnDisable) return
        // this.setData({
        //   ndpBtnDisable: true
        // })
        // await this.queue(this.data.currentDisplayProduct['@id'])
        this.setData({
          ndpBtnDisable: false,
          showNewDP: false,
        })
        this.queueDetail(this.data.currentDisplayProduct)
      } catch (err) {
        wx.showToast({
          title: '下单失败，请重试',
          icon: 'error',
          duration: 2000
        })
        this.setData({
          ndpBtnDisable: false
        })
      }
    },
    async goQueue() {
      const item = this.data.currentOrderDisplayProduct
      try {
        // item.canTap = false
        this.setData({
          displayProductList: this.data.displayProductList
        })
        
        await this.queue(item['@id'])
        item.canTap = true
        this.setData({
          displayProductList: this.data.displayProductList
        })
        this.queryQueueList()
      } catch (err) {
        console.log(err)
        const that = this
        
      }
    },
    async handleGOQueue() {
      await this.queue(this.data.currentOrderDisplayProduct['@id'])
      wx.hideLoading()
      this.setData({
        showOrderDisplayProductPopup: false,
        currentOrderDisplayProduct: {} as _DisplayProductItem,
        orderProductDesc: '',
        accountsIndex1: 0,
        accountsIndex2: 1,
      })
    },
    async queueDetail(item: _DisplayProductItem) {

      let account = []
      if (item.category === 'RTW') {
        account = [
          { value: 'XXS', label: 'XXS' },
          { value: 'XS', label: 'XS' },
          { value: 'S', label: 'S' },
          { value: 'M', label: 'M' },
          { value: 'L', label: 'L' },
          { value: 'XL', label: 'XL' },
          { value: 'XXL', label: 'XXL' },
        ]
      } else if (item.category === 'Rings') {
        for (let i = 45; i <= 60; i++) {
          account.push({ value: i.toString(), label: i.toString() })
        }
      } else {
        for (let i = 34; i <= 42; i += 0.5) {
          account.push({ value: i.toString(), label: i.toString() })
        }
      }
      this.setData({
        showDisplayProductPopup: false,
        showOrderDisplayProductPopup: true,
        currentOrderDisplayProduct: item,
        account: account
      })
    },
    async handleQueue(event: WechatMiniprogram.TouchEvent) {
      if (this.data.isAssistantRoom) return
      const { index } = event.currentTarget.dataset as { index: number }
      const item = this.data.displayProductList[index]
      if (!item.canTap) {
        return
      }
      this.queueDetail(item);

    },
    async queue(pathId: string) {
      try {
        wx.showLoading({
          title: '加载中'
        })
        

        await queueTicketModule.queue(pathId, JSON.stringify({
          mainSize: this.data.account[this.data.accountsIndex1].value,
          alternativeSize: this.data.account[this.data.accountsIndex2].value,
          desc: this.data.orderProductDesc,
          state: null,
          trans: null,
          customer: {
            name: userProfile.nickName,
            path: userProfile.pathId,
            avatar: userProfile.avatar,
            id: userProfile.id
          }
        }))
        console.log('succ')
        wx.hideLoading()
        wx.showToast({
          title: '成功取号',
          icon: 'success',
          duration: 2000
        })
        await this.queryQueueList()
        sendCustomMessage({ data: CustomMessageTypes.NEW_QUEUE_MSG }, this.data.groupId, 'all', {
          send: () => {
            wx.showLoading({ title: '' })
          },
          success: () => {
            wx.hideLoading()
          },
          failed: () => {
            wx.hideLoading()
          }
        }, {}, false)
      } catch (err: any) {
        wx.hideLoading()
        console.log('err 了，怎么没catch')
        console.log(err)
        wx.showModal({
          title: err.data.message,
          success() {
            // item.canTap = true
          }
        })
        throw new Error(err.data.message);
      }
    },
    handleDialogCancel() {
      this.triggerEvent('changeRoom', this.data.roomId)
      this.setData({
        showChangRoomDialog: false
      })
    },
    async checkSalesLanuage() {
      try {
        const res = await storeModule.querySingleSales(getIdFromString(this.data.saleId))
        const { languages } = res.data
        if (languages.includes('chinese')) {
          this.setData({
            needTrans: false
          })
        }
      } catch (err) {
        /// 获取上一级sales的language
      }
    },
    resetOrder() {
      this.setData({
        tokenValue: '',
        productName: '',
        paymentId: '',
        shipmentId: '',
        productBrand: '',
        productCategory1: '',
        productCategory2: '',
        productCategory3: '',
        productCategory1CnName: '',
        productCategory2CnName: '',
        productCategory3CnName: '',
        productSize: '',
        orderInfo: undefined,
        showQrcode: false,
        canLeave: true
      })
    },
    handleShowMoreAddress() {
      if (this.data.addressSelectDisabled || this.data.showQrcode) return
      this.setData({
        showMoreAddress: !this.data.showMoreAddress
      })
    },

    handleChangeMic() {
      console.debug('tap 麦克风开关')
      this.setData({
        enabledMic: !this.data.enabledMic
      })
      this.triggerEvent('changeMic')
    },

    handleChangeTrans() {
      this.setData({
        showTrans: !this.data.showTrans
      })
    },

    handleChoose({ currentTarget }: WechatMiniprogram.TouchEvent) {
      const { index } = currentTarget.dataset as { index: number }
      const item = this.data.addressList[index]
      this.data.addressList.push(this.data.address)
      this.setData({
        address: item,
        addressList: this.data.addressList.filter(e => e.id !== item.id),
        showMoreAddress: false
      })
    },

    handleExitTab() {
      wx.navigateBack()
    },

    async sendTextMessage(text: string) {

      try {
        let res: TIMSendMessageRes
        try {
          res = await sendTextMessage(this.properties.groupId, text)
        } catch (err) {
          wx.showToast({ title: "发送失败", icon: "error", duration: 2000 })
          return
        }

        const item = this.encodeMessage(res.data.message)
        if (item && item.status === 'success') {
          if (this.data.isAssistantRoom) {
            item.payload.text = item.payload.text.split('///:')[1]
          }
          console.log(item)
          item.ID = 's' + item.ID.split(this.data.groupId + '-')[1]
          this.setData({
            chatHistory: [...this.data.chatHistory, item],
          })
          this.setData({
            messageView: item.ID
          })
        } else {
          wx.showToast({ title: "发送失败", icon: "error", duration: 2000 })
        }
      } catch { } finally {
        this.data.canSendTextMsg = true
      }

    },
    async handleSendMessage() {
      if (!this.data.canSendTextMsg) return

      if (this.data.inputValue.trim() === "") {
        return
      }
      this.data.canSendTextMsg = false
      console.log("canSendTextMsg --> false")

      let msg = this.data.inputValue
      let targetMsg = ''
      if (this.data.needTrans) {
        try {
          const res = await videoModule.translateText(msg)
          const { TargetText } = res.data
          if (TargetText == '') {
            wx.showToast({
              title: '翻译错误',
              icon: 'error',
              duration: 2000
            })
            return
          }
          targetMsg = TargetText
        } catch (err) {
          console.log(err)
        }
      }
      console.log("canSendTextMsg --> true")
      this.setData({
        inputValue: '',
        canSendTextMsg: true
      })
      if (this.data.isAssistantRoom) {
        msg = 'assistant_chat///:' + msg
      }
      this.sendTextMessage(msg + (this.data.needTrans ? `(${targetMsg})` : ''))

    },

    handleInput(event: WechatMiniprogram.TouchEvent) {
      const { value } = event.detail as { value: string }
      this.setData({
        inputValue: value
      })
    },
    handleRecording({ touches, target }: WechatMiniprogram.TouchEvent) {
      if (target.id !== 'record') return
      console.log(target)
      this.setData({
        startPoint: touches[0]
      })
      wx.getSetting({
        success: (res) => {
          let auth = res.authSetting['scope.record']
          if (auth === true) { // 用户已经同意授权
            this.startRecording()
            this.setData({
              recordTitle: '正在录音',
              isRecording: true,
              canSend: true
            })
          }
          // else if (auth === false) { // 首次发起授权
          //   this.toSettingPage({
          //     content: '请前往设置页打开麦克风',
          //     suc: (res) => {
          //       if (!res.authSetting['scope.record']) {
          //         this.setData({
          //           isRecord: false
          //         })
          //       }
          //     },
          //     fail: () => {
          //       this.setData({
          //         isRecord: false
          //       })
          //     },
          //     cancel: () => {
          //       this.setData({
          //         isRecord: false
          //       })
          //     }
          //   })
          // }
        },
        fail: () => {
        }
      })
    },
    handleTouchEnd() {
      this.setData({
        isRecording: false
      })
      wx.hideLoading()
      recorderManager.stop()
    },

    startRecording() {
      recorderManager.start(recordOptions)
    },
    initRecording() {
      recorderManager.onStart(() => {
        console.log('recorder start')
      })
      recorderManager.onPause(() => {
        console.log('recorder pause')
      })
      recorderManager.onStop(async (res) => {
        wx.hideLoading()
        if (this.data.canSend) {
          if (res.duration < 1000) {
            wx.showToast({
              title: '录音时间太短',
              icon: 'none',
              image: '',
              duration: 1500,
              mask: false,
              success: () => {

              },
              fail: () => { },
              complete: () => { }
            });
          } else {
            const recordeFile = wx.getFileSystemManager().readFileSync(res.tempFilePath, 'base64')
            const reqData = await videoModule.translateSpeech(recordeFile)
            const { data } = reqData
            if (data.SourceText.trim() === '') {
                return
            }
            this.sendTextMessage((this.data.isAssistantRoom ? 'assistant_chat///:' : '') + data.SourceText + (this.data.needTrans ? `(${data.TargetText})` : ''))
          }
        }
      })
    },
    toSettingPage(options: { content: string, suc: (res: WechatMiniprogram.OpenSettingSuccessCallbackResult) => void, fail: () => void, cancel: () => void }) {
      wx.showModal({
        title: '授权提示',
        content: options.content,
        success: (tipRes) => {
          if (tipRes.confirm) {
            wx.openSetting({
              success: (settingRes) => {
                options.suc && options.suc(settingRes)
              },
              fail: () => {
                options.fail && options.fail()
              }
            })
          } else {
            options.cancel && options.cancel()
          }
        }
      })
    },
    chooseImage() {
      let self = this
      wx.chooseImage({
        sourceType: ['album'],
        count: 1,
        success: async function (res) {
          let tempPath = res.tempFilePaths[0];
          var base64 = await wx.getFileSystemManager().readFileSync(tempPath);
          if (self.data.isAssistantRoom) {
            await sendCustomMessage({ data: CustomMessageTypes.ASSISTANT_ROOM_IMAGE }, self.data.groupId, self.data.saleId, {
              success: () => {
              },
              failed: () => {
              }
            }, {
              'file': base64
            })
          } else {
            const message = await sendImageMessage(self.properties.groupId, 'GROUP', res, (percent: number) => {
              self.data.percent = percent
            }, () => {
              self.data.percent = 0
            })
            message.ID = 's' + message.ID.split(self.data.groupId + '-')[1]
            self.setData({
              chatHistory: [...self.data.chatHistory, message],
              inputValue: '',
              messageView: message.ID
            })
          }
        }
      })
    },
    previewImage({ target }: WechatMiniprogram.TouchEvent) {
      const { src } = target.dataset
      wx.previewImage({
        current: src, // 当前显示图片的http链接
        urls: [src]
      })
    },

    encodeMessage(data: TIMMessage) {
      switch (data.type) {
        case "TIMTextElem":
          return data
        case "TIMImageElem":
          return data
          break
        case "TIMCustomElem":
          return null
        // case "TIMGroupTipElem":
        //   break
        default:
          console.log(data)
          return null
      }
    },
    formatTextEle(text: string, id: string, flow: TIMMEssageFlow) {
      return { text, id, flow }
    },
    formatImageEle(url: string, id: string, flow: TIMMEssageFlow) {
      return { url, id, flow }
    },
    handleSizeChange1(e: WechatMiniprogram.TouchEvent) {
      this.setData({
        accountsIndex1: e.detail.value
      })
    },
    handleSizeChange2(e: WechatMiniprogram.TouchEvent) {
      this.setData({
        accountsIndex2: e.detail.value
      })
      console.log(this.data.accountsIndex1)
      console.log(this.data.accountsIndex2)
    },
    handleOrderProcutDescInput(event: WechatMiniprogram.TouchEvent) {
      const { value } = event.detail
      this.setData({
        orderProductDesc: value
      })
    },
    _displayProductPopCancel() {
      this.setData({
        showDisplayProductPopup: false,
        showOrderDisplayProductPopup: false
      })
    },

    showDisplayProducts() {
      const code = this.data.groupId.split('agogify-activity-')[1]
      this.queryDisplayProduct(code)
      this.setData({
        showDisplayProductPopup: true,
      })
    },


    // 取消付款
    async _popupCancel() {
      if (this.data.showQrcode) {
        const hasPaid = await this.userHasPaid()
        if (hasPaid) {
          wx.showToast({
            title: '请点击已付款按钮',
            icon: 'error',
            duration: 3000
          })
          return
        }
      }
      await sendCustomMessage({ data: CustomMessageTypes.PAY_CANCELED }, this.data.groupId, this.properties.saleId, {
        send: () => {
          wx.showLoading({ title: '' })
        },
        success: () => {
          wx.hideLoading()
          this.setData({
            showPopup: false,
            orderStep: 0,
            addressSelectDisabled: false
          })
          this.resetOrder()
        },
        failed: () => {
          wx.hideLoading()
          wx.showModal({
            title: '消息发送失败，请通知销售关闭订单窗口。',
            showCancel: false,
            success: () => {
              this.setData({
                showPopup: false,
                orderStep: 0,
                addressSelectDisabled: false
              })
              this.resetOrder()
            }
          })
        }
      }, {})

    },
    async _handleCommit() {
      wx.showLoading({ title: '正在请求...' })
      this.setData({
        payDialogBtnDisabled: true
      })
      /**
       * 判断按钮是确认订单还是已付款
       */
      if (this.data.showQrcode) {
        try {
          /**
           * 判断用户是否已经付款
           * TODO 完善用户未付款逻辑
           */
          if (!(await this.userHasPaid())) {
            wx.showToast({ title: '款项暂未到账，请稍等片刻', icon: 'none', duration: 2000 })
            wx.hideLoading()
            return
          }
          await sendCustomMessage({ data: CustomMessageTypes.PAY_FINISHED }, this.data.groupId, this.properties.saleId, {
            success: () => {
              this.setData({
                showPopup: false,
                hasPaid: true,
              })

              this.resetOrder()
              this.data.canLeave = false
            },
            failed: () => {
              const that = this
              wx.showModal({
                title: '若已支付成功，请通知销售',
                showCancel: false,
                success() {
                  that.setData({
                    showPopup: false,
                  })
                }
              })
              this.resetOrder()
              this.data.canLeave = false

            }
          }, {})

        } catch {
          wx.showToast({ title: '请求失败，请重新尝试', icon: 'error', duration: 2000 })

        } finally {
          this.setData({
            payDialogBtnDisabled: false
          })
          wx.hideLoading()
        }
        // finally {
        //   this.setData({
        //     payDialogBtnDisabled: false
        //   })
        //   this.resetOrder()
        //   wx.hideLoading()
        //   this.data.canLeave = false
        // }
      } else {
        const { tokenValue, address, shipmentId, paymentId } = this.data
        // let  note = {
        //   brand: this.data.productBrand,
        //   category1: this.data.productCategory1,
        //   category2: this.data.productCategory2,
        //   category3: this.data.productCategory3,
        //   productCategory1CnName: this.data.productCategory1CnName,
        //   productCategory2CnName: this.data.productCategory2CnName,
        //   productCategory3CnName: this.data.productCategory3CnName,
        //   size: this.data.productSize,
        //   productName: this.data.productName
        // }

        // let notes = {} as { [key: string]: Object }
        // notes[this.data.orderInfo.items[0].id] = {
        //   en: {
        //     brand: this.data.productBrand,
        //     category1: this.data.productCategory1,
        //     category2: this.data.productCategory2,
        //     category3: this.data.productCategory3,
        //     size: this.data.productSize,
        //     productName: this.data.productName
        //   },
        //   zh_Hans_CN: {
        //     brand: this.data.productBrand,
        //     category1: this.data.productCategory1CnName,
        //     category2: this.data.productCategory2CnName,
        //     category3: this.data.productCategory3CnName,
        //     size: this.data.productSize,
        //     productName: this.data.productName
        //   },
        // }


        // let qrcodeUrl: string
        this.setData({
          addressSelectDisabled: true,
        })
        try {
          let putAddressRes, putShipmentRes, putPaymentRes, completeRes
          if (this.data.orderStep === 0) {
            try {
              putAddressRes = await this.putAddress(tokenValue, address)
              this.setData({
                orderStep: 1
              })
            } catch (err) {
              wx.showModal({
                title: '错误',
                content: '请求错误，请重试.',
                showCancel: false,
              })
              this.setData({
                addressSelectDisabled: false
              })
              throw err
            }
          }
          if (this.data.orderStep === 1) {
            try {
              putShipmentRes = await this.putShipment(tokenValue, shipmentId)
              this.setData({
                orderStep: 2
              })
            } catch (err) {
              wx.showModal({
                title: '错误',
                content: '请求错误，请重试.',
                showCancel: false,
              })
              this.setData({
                addressSelectDisabled: false
              })
              throw err
            }
          }
          if (this.data.orderStep === 2) {
            try {
              putPaymentRes = await this.putPayment(tokenValue, paymentId)
              this.setData({
                orderStep: 3,
              })
            } catch (err) {
              wx.showModal({
                title: '错误',
                content: '请求错误，请重试.',
                showCancel: false,
              })

              throw err
            }
          }
          if (this.data.orderStep === 3) {
            try {
              completeRes = await orderModule.orderComplete(this.data.tokenValue, {});
              this.setData({
                orderStep: 4
              })
            } catch (err) {
              wx.showModal({
                title: '错误',
                content: '请求错误，请重试.',
                showCancel: false,
              })
              throw err
            }
          }





          console.debug(putAddressRes, putShipmentRes, putPaymentRes, completeRes)
          // TODO 暂时取消支付码获取
          // qrcodeUrl = await this.queryQrcode()
          // this.showQrcode(qrcodeUrl)

          await sendCustomMessage({ data: CustomMessageTypes.ORDER_COMPLETE }, this.data.groupId, this.properties.saleId, {
            // send: () => {
            //   wx.showLoading({title: ''})
            // },
            // success: () => {
            //   this.setData({
            //     payDialogLabel: '已付款',
            //     showQrcode: true,
            //   })
            // },
            // failed: () => {
            //   wx.showModal({
            //     title: '未能成功通知销售订单状态以改变，请再次确认',
            //     showCancel: false
            //   })
            //   this.setData({
            //     payDialogBtnDisabled: false
            //   })
            // }
          }, {}, false)
          this.setData({
            payDialogLabel: '已付款',
            showQrcode: true,
            orderStep: 0,
            addressSelectDisabled: false
          })
        } catch {
          // wx.showToast({ title: '创建订单失败，请重新尝试' })
          return
        } finally {
          this.setData({
            payDialogBtnDisabled: false
          })
          wx.hideLoading()
        }
      }
      return

    },
    async userHasPaid(): Promise<boolean> {
      if (this.data.hasPaid) return true
      return (await this.checkUserHasPaid(this.data.tokenValue)) == 'completed'
      return true
    },
    async checkUserHasPaid(tokenValue: string): Promise<orderDesign.paymentState> {
      try {
        const res = await orderModule.getPaymentState(tokenValue)
        const { 'hydra:member': list } = res.data
        const order = list[0]
        // if (order.state == 'awaiting_payment') {
        //   return false
        // } else if (order.state =)
        return order.state
      } catch (err) {
        throw err
      }
    },

    showQrcode(url: string) {
      const that = this
      this.setData({
        payDialogLabel: '已付款',
        showQrcode: true,
      })
      wx.createSelectorQuery().in(this)
        .select('#union-pay-qrcode')
        .fields({ node: true, size: true })
        .exec((res) => {
          console.log(res)
          let canvas: any
          try {
            canvas = res[0].node
          } catch (err) {
            console.log(err)
            return
          }
          drawQrcode({
            width: 170,
            height: 170,
            canvas: canvas,
            canvasId: 'union-pay-qrcode',
            text: url
          })

          wx.canvasToTempFilePath({
            canvasId: 'union-pay-qrcode',
            canvas: canvas,
            x: 0,
            y: 0,
            width: 170,
            height: 170,
            success(res) {
              that.setData({
                qrcode: res.tempFilePath,

              })
            }

          })
        })

    },
    async _handleSaveQrcode() {
      wx.saveImageToPhotosAlbum({
        filePath: this.data.qrcode,
        success(res) {
          console.log('saved');
        }
      })

    },

    async queryQrcode() {
      wx.showLoading({ title: '加载中' })
      try {
        const res = await orderModule.unionPayPayment({
          orderId: this.data.tokenValue,
          user: "info@yabandmedia.com",
          // amount: (this.data.orderInfo.items[0].total / 100).toString(),
          // currency: "EUR",
          description: "YabandPay / UnionPay / test",
          demo: "test",
          // timeout: "0"

        })
        return res.data.url
      } catch (err) {
        wx.hideLoading()
        throw err
      }
    },

    async queryAddressList() {
      const resData = await addressModule.queryAddressList({ ...this.data.pageInfo, type: 'customer' })
      const { 'hydra:member': list } = resData.data
      const defaultAddress = list.find(e => e.id == userProfile.defaultAddressId)
      this.setData({
        // addressList: [...this.data.addressList, ...list]
        addressList: list.filter(e => e.id != userProfile.defaultAddressId),
        address: defaultAddress!
      })
    },
    async queryCart(tokenValue: string) {
      wx.showLoading({ title: '正在拉取订单' })
      try {
        const res = await orderModule.queryCart(tokenValue)
        // TODO 获取到订单信息
        const orderItem = res.data
        this.setData({
          orderInfo: orderItem,
          showPopup: true,
          payDialogBtnDisabled: false,
          itemsTotal: (orderItem.itemsTotal / 100).toFixed(2),
          shippingTotal: (orderItem.shippingTotal / 100).toFixed(2),
          total: (orderItem.total / 100).toFixed(2),
        })
      } catch (err) {
        wx.showModal({
          title: '错误',
          content: '获取订单失败',
          showCancel: false,
          confirmText: '我知道了',
          success: () => { }
        })
        throw err
      } finally {
        wx.hideLoading()
      }
    },
    async queryOrder(tokenValue: string) {
      wx.showLoading({ title: '正在拉取订单' })
      try {
        const res = await orderModule.queryOrderDetail(tokenValue)
        // TODO 获取到订单信息
        const orderItem = res.data
        this.setData({
          orderInfo: orderItem,
          showPopup: true,
          payDialogBtnDisabled: false,
          itemsTotal: (orderItem.items[0].unitPrice / 100).toFixed(2),
          shippingTotal: (orderItem.shippingTotal / 100).toFixed(2),
          total: (orderItem.total / 100).toFixed(2),
        })
      } catch (err) {
        wx.showModal({
          title: '错误',
          content: '获取订单失败',
          showCancel: false,
          confirmText: '我知道了',
          success: () => { }
        })
        throw err
      } finally {
        wx.hideLoading()
      }
    },
    async putAddress(tokenValue: string, address: addressDesign.address) {
      const { firstName, lastName, countryCode, provinceName, provinceCode, street, city, postcode, mobileNumber, county } = address
      const res = await orderModule.putAddress(tokenValue, { shippingAddress: { firstName, lastName, countryCode: "CN", provinceName, provinceCode, street, city, postcode, county, mobileNumber } })
      // TODO 设置用户地址
    },
    async putShipment(tokenValue: string, shipmentId: string) {
      const res = await orderModule.putShipment(tokenValue, shipmentId, { shippingMethodCode: 'dhl' })
    },
    async putPayment(tokenValue: string, paymentId: string) {
      const res = await orderModule.putPayment(tokenValue, paymentId, { paymentMethodCode: 'wechat_offline' })
    },


    _copy() {
      wx.setClipboardData({ data: this.data.tokenValue, })
    }
  },



})
