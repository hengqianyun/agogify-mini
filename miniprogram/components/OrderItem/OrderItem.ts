// components/OrderItem/OrderItem.ts
type stateType = 0 | 1 | 2
const stateMap: Map<stateType, string[]> = new Map([
  [0, ['已完成', 'disable-btn']], [1, ['待发货', 'fill-btn']], [2, ['待收货', 'line-btn']]
])


Component({
  /**
   * 组件的属性列表
   */
  properties: {
    storeAvatar: String,
    storeName: String,
    collected: Boolean,
    productAvatar: String,
    productName: String,
    showMore: Boolean,
    productPrice: Number,
    num: Number,
    productDesc: String,
    orderDate: String,
    orderStatus: {
      type: Number,
      value: -1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showStatus: false,
    state: '',
    className: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // att
  },
  attached() {
    if (this.properties.orderStatus !== -1) {
      const state = stateMap.get(this.properties.orderStatus as stateType)
      if (state) {
        this.setData({
          showStatus: true,
          state: state[0],
          className: state[1]
        })
      }
    }
  }
})
