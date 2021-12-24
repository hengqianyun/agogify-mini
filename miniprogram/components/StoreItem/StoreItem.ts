// components/StoreItem/StoreItem.ts
import {IMAGEBASEURL} from '../../http/index'

const DEFAULT_IMAGE = '../../assets/image/avatar.jpg'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    store: {
      type: Object,
      value: {} as storeDesign.storeItem
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imageUrl: '',
    address: ''
  },

  lifetimes: {
    attached() {
      let path = IMAGEBASEURL + this.properties.store.logo?.path || DEFAULT_IMAGE;
      let {billingData} = this.properties.store as {billingData: storeDesign.storeBillingData}
      const address = `${billingData.countryCode} ${billingData.city} ${billingData.street}`
      this.setData({
        imageUrl : path,
        address,
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick() {
      wx.navigateTo({
        url: `/pages/storePage/storePage?storeId=${this.properties.store.code}`,
      })
    },

    imageError() {
      this.setData({
        imageUrl: DEFAULT_IMAGE
      })
    }
  },

  
})
