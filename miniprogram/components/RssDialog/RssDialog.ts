// components/RssDialog/RssDialog.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    showCancel: Boolean,
    commitText: String,
    cancelText: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    _showCancel: false,
    _commitText: '',
    _cancelText: '',
    _title: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleCommit() {
      this.triggerEvent('handleCommit')
    },
    handleCancel() {
      this.triggerEvent('handleCancel')
    }
  },
  lifetimes: {
    attached() {
      let _showCancel = !!this.properties.showCancel;
      let _commitText = this.properties.commitText ?? "确定"
      let _cancelText = this.properties.cancelText ?? '取消'
      let _title = this.properties.title ?? ''
      this.setData({
        _showCancel, _cancelText, _commitText, _title
      })
    }
  }
})
