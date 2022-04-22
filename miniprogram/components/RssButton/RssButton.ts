// components/Button/Button.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    className: {
      type: String,
      default: 'line-btn'
    },
    icon: {
      type: String,
      default: 'icon_demo'
    },
    iconSize: {
      type: Number,
      default: 18,
    },
    label: {
      type: String,
      require: true
    },
    height: {
      type: Number,
      value: 76
    },
    width: {
      type: Number,
      value: 196
    },
    color: {
      type: String
    },
    fontSize: {
      type: Number,
      value: 28
    },
    fontWeight: {
      type: Number,
      value: 300
    },
    fontColor: {
      type: String,
    },
    borderRadius: {
      type: Number,
      value: 8
    },
    backgroundColor: {
      type: String,
    },
    backgroundImage: {
      type: String,
    },
    disabled: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap(event: WechatMiniprogram.TouchEvent) {
      if (this.properties.disabled) return
      this.triggerEvent('onTap', event)
    }
  }
})
