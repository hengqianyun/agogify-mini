// components/Checkbox/Checkbox.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    status: Number,
    length: {
      type: Number,
      value: 40,
      // observer: function (length) {
      //   this.setData({
      //     'style.width': `${length}rpx`,
      //     'style.height': `${length}rpx`,
      //   })
      // }
    },
    background: {
      type: String,
      value: '#353535',
      // observer: function (background) {
      //   this.setData({
      //     'style.background': background
      //   })
      // }
    },
    contrastingBg: {
      type: String,
      value: '#353535',
      // observer: function (background) {
      //   this.setData({
      //     'style.contrastingBg': background
      //   })
      // }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    style: {
      width: '40rpx',
      height: '40rpx',
      background: '#353535',
      contrastingBg: '#fff'
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleCheck() {
      if (this.properties.status === 2) {
        return
      } else {
        this.triggerEvent('onCheckBoxChange', this.properties.status ? 0 : 1)
      }
    }
  }
})
