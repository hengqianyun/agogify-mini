import { $emit } from "../../../../utils/event.js"

// pages/room/components/waiting/waiting.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    handleHangUp() {
      console.log('taped hang_up button')
      $emit({name: 'hang_up'})
    }
  }
})
