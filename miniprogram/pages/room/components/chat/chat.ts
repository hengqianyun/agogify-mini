// pages/room/components/chat/chat.ts
import { $on, $remove } from '../../../../utils/event'
import videoModule from '../../../../http/module/video'
import addressModule from '../../../../http/module/address'
import orderModule from '../../../../http/module/order'
import { HmacSHA256, enc } from 'crypto-js'
import { getIdFromString, sortByCharCode } from '../../../../utils/util'
import { clearSessionAsync } from '../../../../utils/querySession'
import drawQrcode from 'weapp-qrcode-canvas-2d'
import sessionModule from '../../../../http/module/session'
import { clearAckTimeout, quitGroup, resetTimerAndSeq, sendAck, sendCustomMessage, sendImageMessage, sendTextMessage } from '../../../../libs/tim/tim'
import CustomMessageTypes from '../../../../libs/tim/custom_message_types'

const recorderManager = wx.getRecorderManager()
const recordOptions: WechatMiniprogram.RecorderManagerStartOption = {
  duration: 60000,
  sampleRate: 8000,
  numberOfChannels: 1,
  encodeBitRate: 16000,
  format: 'aac', // 音频格式，选择此格式创建的音频消息，可以在即时通信 IM 全平台（Android、iOS、微信小程序和Web）互通
}
let tim: TIMSKD

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
  },

  /**
   * 组件的初始数据
   */
  data: {
    messageView: '',
    chatHistory: [] as TIMMessage[],
    inputValue: '',
    conversationID: '',
    canSend: false,
    percent: 0,
    showPopup: false,
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
    timeleft: '00:00',
    timeleftTimer: 0,
    timeleftSec: 0,
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
    showQrcode: false,
    hasPaid: false,
    canLeave: true,
    payDialogBtnDisabled: false,
    itemsTotal: '',
    shippingTotal: '',
    total: '',
    hangupText: '确认挂断通话？',
    orderStep: 0, // 0 没有订单， 1 put address 2 put shipment 3 put payment 4 complete
    addressSelectDisabled: false,
  },

  lifetimes: {
    async ready() {
      this.initRecording()
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
            switch (payloadData.type) {
              case CustomMessageTypes.PAY:
                const that = this
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
              case CustomMessageTypes.TIMELEFT_CHECK:
                if (!this.data.hasGetTime) {

                  this.formatTimeleft(payloadData.timeleft)
                } else {
                  this.setData({
                    timeleftSec: payloadData.timeleft
                  })
                }
                sendCustomMessage({ data: CustomMessageTypes.TIMELEFT_CHECK }, `${this.properties.storeId}_Meeting`, this.properties.saleId, {}, {}, false)
                break
              case CustomMessageTypes.SCAN_FINISH:
                this.setData({
                  canLeave: true
                })
                break
              case 'ack':
                clearAckTimeout(payloadData.seq)
            }
            if (payloadData.type !== 'ack' && payloadData.type !== CustomMessageTypes.TIMELEFT_CHECK) {
              sendAck({ data: 'ack', description: "succesee" }, `${this.properties.storeId}_Meeting`, this.properties.saleId, data.time.toString())
            }
        }
      })

      $on({
        name: 'onGroupMessageRecvEvent',
        tg:this,
        async success(res: TIMMessageReceive) {
          const data = res.data[0]
          if (data.to === this.properties.groupId) {
            const message = this.encodeMessage(data)
            try {

              if (message && message.payload.text.indexOf("///:") < 0) {
                this.setData({
                  chatHistory: this.data.chatHistory.concat([message])
                })
                this.setData({
                  messageView: message.ID
                })
              }
            } catch {
              this.setData({
                chatHistory: this.data.chatHistory.concat([message!])
              })
              this.setData({
                messageView: message!.ID
              })
            }
          }
        }
      })

      await this.queryAddressList()
      if (this.properties.isReconnect) {
        this.joinGroup(this.properties.groupId)
          this.initRecording()
          await this.queryAddressList()
          // const sessionRes = await sessionModule.querySession('droppedByCustomer=false&state[]=active&state[]=paused&customer.id=' + getIdFromString(wx.getStorageSync('oauth.data').customer) + '&itemsPerPage=1&page=1')
          const sessionRes = await sessionModule.querySession('droppedByCustomer=true&state[]=active&state[]=paused&customer.id=' + getIdFromString(wx.getStorageSync('oauth.data').customer) + '&itemsPerPage=1&page=1')
          
          const session = sessionRes.data
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
      // 
      if (this.properties.isReconnect) {
        const that = this
        // const session = 
        wx.getStorage({
          key: 'session',
          success(res) {
            console.log(res)
            console.log(that.properties.storeId)
            const id = `${that.properties.storeId}_Meeting-${res.data.code}`
            that.triggerEvent('startVideo', { publicGroupId: id, roomId: id })
          }
        })
        // const id = `${that.properties.storeId}_Meeting-${getIdFromString(this.properties.saleId)}`
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
      clearInterval(this.data.timeleftTimer)
      resetTimerAndSeq()
      quitGroup(`${this.properties.storeId}_Meeting`)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
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

    async joinGroup(groupId: string) {
      try {
        console.log('groupId -->', groupId)
        await tim.joinGroup({ groupID: groupId, type: 'AVChatRoom' })
      } catch (err) {
        console.log(err)
      }

    },
    handleShowMoreAddress() {
      if (this.data.addressSelectDisabled || this.data.showQrcode) return
      this.setData({
        showMoreAddress: !this.data.showMoreAddress
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


    async sendMessage() {
      if (this.data.inputValue.trim() === "") {
        return
      }

      const res = await sendTextMessage(this.properties.groupId, this.data.inputValue)
      const item = this.encodeMessage(res.data.message)
      if (item && item.status === 'success') {
        this.setData({
          chatHistory: [...this.data.chatHistory, item],
          inputValue: ''
        })
        this.setData({
          messageView: item.ID
        })
      } else {
        wx.showToast({ title: "发送失败", icon: "error" })
      }
    },

    handleInput(event: WechatMiniprogram.TouchEvent) {
      const { value } = event.detail as { value: string }
      console.log(event)
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
            this.setData({
              recordTitle: '正在录音',
              isRecording: true,
              canSend: true
            })
            this.startRecording()
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
            const reqData = await videoModule.translate(recordeFile)
            const { data } = reqData

            this.setData({
              inputValue: this.data.inputValue + data.TargetText + '. '
            })
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
          const message = await sendImageMessage(self.properties.groupId, 'GROUP', res, (percent: number) => {
            self.data.percent = percent
          }, () => {
            self.data.percent = 0
          })
          self.setData({
            chatHistory: [...self.data.chatHistory, message],
            inputValue: ''
          })
          self.setData({
            messageView: message.ID
          })
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
            wx.showToast({ title: '款项暂未到账，请稍等片刻' })
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
              wx.showModal({
                title: '若已支付成功，请通知销售',
                showCancel: false,
              })
              this.resetOrder()
              this.data.canLeave = false
            }
          }, {})

        } catch {
          wx.showToast({ title: '请求失败，请重新尝试' })

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
      this.setData({
        // addressList: [...this.data.addressList, ...list]
        addressList: list.filter(e => e.id != list[0].id),
        address: list[0]
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
          itemsTotal: (orderItem.items[0].total / 100).toFixed(2),
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
    async payment() {
      // hash.hmac(hash.sha256(), '111').update('000')
      const secret_key = '62184c09df1aeb63239e07079875be81'
      const user = 'info@yabandmedia.com'
      const method = 'v3.CreatePaymentsWechatMiniPay'
      const time = Date.now()
      const description = this.data.productName
      const pay_method = 'online'
      const sub_pay_method = 'WeChat Pay'
      const order_id = this.data.tokenValue
      const amount = '0.1'
      const currency = 'EUR'
      const notify_url = ''
      const sub_app_id = 'wxe7456276eeb43fbe'
      const sub_open_id = 'oXNjT4qiP2ZhtvtrgwQu4PGTvhjg'
      const params: payment.paymentSignParams = {
        pay_method,
        sub_pay_method,
        order_id,
        amount,
        currency,
        description,
        notify_url,
        sub_app_id,
        sub_open_id,
        user,
        method,
        time
      }
      let stringA = sortByCharCode(params)
      let sign = enc.Hex.stringify(HmacSHA256(stringA, secret_key))
      const res = await orderModule.pay({
        user,
        sign,
        method,
        time,
        data: {
          description,
          pay_method,
          sub_pay_method,
          order_id,
          amount,
          currency,
          notify_url,
          sub_app_id,
          sub_open_id,
        }
      })
      const { parameters } = res.data
      return parameters
    },

    formatTimeleft(left: number) {
      if (!this.data.hasGetTime) {
        this.data.timeleftTimer = setInterval(() => {
          this.data.timeleftSec--;
          this.formatTimeleft(this.data.timeleftSec)
        }, 1000)
        this.setData({
          timeleftSec: left,
          hasGetTime: true
        })
      }
      let min = Math.floor(left / 60);
      let sec = left % 60
      this.setData({
        timeleft: `${min > 9 ? min : '0' + min}:${sec > 9 ? sec : '0' + sec}`,
        timeleftSec: left
      })
    },


    _copy() {
      wx.setClipboardData({ data: this.data.tokenValue, })
    }
  },



})
