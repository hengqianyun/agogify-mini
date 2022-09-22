import { BASEURL } from "../../http/index";
import { userProfile } from "../../libs/user/user";

// components/reserveProduct/reserveProduct.ts
Component({
  /**
   * 组件的属性列表
   */
  options: {
    styleIsolation: 'isolated'
  },
  properties: {
    cancelButtonText: {
      type: String,
      value: '取消'
    },
    confirmButtonText: {
      type: String,
      value: '确定'
    },
    message: {
      type: String,
      value: ''
    },
    show: {
      type: Boolean,
      value: false,
    },
    confirmCallback: null,
    cancelCallback: null,
  },

  /**
   * 组件的初始数据
   */
  data: {
    windowWidth: 0,
    windowHeight: 0,
    brandIndex: 0,
    notes: '',
    brandValue: '',
    brands: [] as storeDesign.brand[],
    showInput: false,
    productImage: '',
  },

  lifetimes: {
    async attached() {
      const _this = this;
      wx.getSystemInfo({
        success: function (res) {
          _this.setData({
            windowWidth: res.windowWidth,
            windowHeight: res.windowHeight,
          });
        }
      });
      this.queryBrand();
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    queryBrand() {
      const store = wx.getStorageSync('reserveStores')
      console.log(store)
      const brands = [...store[0].brands, { name: '其他品牌', code: 'others' }]
      console.log(brands)
      this.setData({
        brands,
      })
    },
    async onConfirm() {
      if (this.data.notes === '') {
        wx.showToast({
          title: '请输入备注',
          icon: 'error',
          duration: 3000,
        })
        return
      }
      if (this.data.productImage === '') {
        wx.showToast({
          title: '请选择商品图片',
          icon: 'error',
          duration: 3000,
        })
        return
      }
      if (this.properties.confirmCallback) {
        const code: string = await this.properties.confirmCallback();
        console.log(code)
        await this.handleSave(code)
      }
      this.setData({ show: false });
    },
    handleChooseImage() {
      const that = this
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        async success(res) {
          let tempPath = res.tempFilePaths[0]; //获取选择的图片的地址

          var size = res.tempFiles[0].size
          const maxSize = 5 * 1024 * 1024
          if (size > maxSize) {
            const quality = Math.floor(maxSize / size)
            wx.compressImage({
              src: tempPath,
              quality,
              async success(res) {
                tempPath = res.tempFilePath
              }
            })
          }
          console.log(tempPath)
          // var base64 = await wx.getFileSystemManager().readFileSync(tempPath);
          // console.log(base64)
          that.setData({
            // identityBase64: base64,
            productImage: tempPath,
            // avatar: tempPath,
          })
        }
      })
    },
    async handleSave(code: string) {

      const that = this
      wx.showLoading({
        title: '上传中'
      })
      this.setData({
        commitBtnDisabled: true
      })
      
      console.log(that.data.productImage)
      wx.uploadFile({
        timeout: 600000,
        filePath: that.data.productImage,
        name: 'imageInput',
        url: BASEURL + 'store/video-session/favorite_items',
        header: { Authorization: 'Bearer ' + userProfile.token, },
        
        formData: {
          booking: code,
          translationInputs: JSON.stringify({
            "description": that.data.notes,
            "locale": "zh_CN"
          }),
          brand: that.data.brandValue
        },
        success(res) {

          if (res.statusCode > 300) {
            wx.showModal({
              title: '错误',
              content: '系统错误',
              confirmText: '确定',
              showCancel: false
            })
            return
          }

          wx.showToast({
            title: '预约成功',
            duration: 1000
          })
          setTimeout(() => {
            wx.navigateBack()
          }, 1000)
        },
        fail() {
          wx.showModal({
            title: '错误',
            content: '系统错误',
            confirmText: '确定',
            showCancel: false
          })
        },
        complete() {
          that.setData({
            commitBtnDisabled: false
          })
          wx.hideLoading()
        }

      })
    },
    onCancel() {
      if (this.properties.cancelCallback) {
        this.properties.cancelCallback();
      }
      this.setData({ show: false, notes: '', brandIndex: 0 });
      wx.hideLoading()
    },
    handleBrandChange(e: WechatMiniprogram.TouchEvent) {
      this.setData({
        brandIndex: e.detail.value,
        brandValue: this.data.brands[e.detail.value].name
      })
      if (e.detail.value == this.data.brands.length - 1) {
        this.setData({
          showInput: true,
          brandValue: '',
        })
      }
    },
    handleNoteInput(event: WechatMiniprogram.TouchEvent) {
      const { value } = event.detail
      this.setData({
        notes: value
      })
    },
  }
})
