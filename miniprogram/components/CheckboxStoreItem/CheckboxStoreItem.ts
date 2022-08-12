import {IMAGEBASEURL, IMAGEPATHS} from '../../http/index'

const DEFAULT_IMAGE = '../../assets/image/avatar.jpg'
// components/CheckboxStoreItem/CheckboxStoreItem.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    status: Number,
    image: String,
    name: String,
    code: String,
    desc: String,
    address: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    path: ''
  },

  lifetimes: {
    attached() {
      let path = IMAGEBASEURL + IMAGEPATHS.storeNormal1x + this.properties.image || DEFAULT_IMAGE;
      this.setData({
        path
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleCheckboxTap(event: WechatMiniprogram.TouchEvent) {
      const {detail} = event
      this.triggerEvent('onTap', detail)
    },
    handleClick() {
      let brand = wx.getStorageSync('brand')
      let taxon = wx.getStorageSync('taxon')
      let sex = wx.getStorageSync('sex')
      wx.navigateTo({
        url: `/pages/storePage/storePage?storeId=${this.properties.code}&storeName=${this.properties.name}&taxon=${taxon}&brand=${brand}&sex=${sex}`,
      })
    },
  }
})
