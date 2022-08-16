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
    address: String,
    type: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    path: '',
    iconName: ''
  },

  lifetimes: {
    attached() {
      let path = IMAGEBASEURL + IMAGEPATHS.storeNormal1x + this.properties.image || DEFAULT_IMAGE;
      let iconName = ''
      switch(this.properties.type) {
          case 'monobrand_store':
            iconName = 'zhuanguichunse'
            break
          case 'department_store':
            iconName = 'baihuoshangdianchunse'
            break
          case 'multi_brand_store':
            iconName = 'jihedianchunse'
            break
          case 'vintage_store':
            iconName = 'zhonggudianchunse'
            break
      }
      this.setData({
        path,
        iconName,
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
