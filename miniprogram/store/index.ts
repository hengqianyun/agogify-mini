import Store from 'wxministore'
// const Store = require('wxministore')
import TIM from 'tim-wx-sdk'
import user from './modules/user'
import conversation from './modules/conversation'



// console.log(TIM)

const store = new Store({
  state: {
    user,
    conversation,
    tempUser: {
      userName: '',
      avatarUrl: '',
      customer: ''
    },
    canCall: false
  },
  // methods: {
  //   createMessageDom: (event: TIMEvent) => {
  //     if (event.name === 'onMessageReceived') {
        
  //     }
  //   }
  // }
})

export default store