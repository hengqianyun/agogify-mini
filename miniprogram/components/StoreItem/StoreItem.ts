// components/StoreItem/StoreItem.ts
import {IMAGEBASEURL, IMAGEPATHS} from '../../http/index'

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
    //   let path = IMAGEBASEURL + IMAGEPATHS.storeNormal1x + this.properties.store.logo?.path || DEFAULT_IMAGE;
      let path = IMAGEBASEURL + IMAGEPATHS.storeNormal2x + this.properties.store.logo?.path || DEFAULT_IMAGE;
      console.log(path)
      let {billingData} = this.properties.store as {billingData: storeDesign.storeBillingData}
      // const address = `${billingData.countryCode} ${billingData.city} ${billingData.street}`
      const address = `${billingData.country?.name} ${billingData.city?.name}`
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
        url: `/pages/storePage/storePage?storeId=${this.properties.store.code}&storeName=${this.properties.store.name}`,
      })
    },

    imageError() {
      this.setData({
        imageUrl: DEFAULT_IMAGE
      })
    }
  },

  
})
