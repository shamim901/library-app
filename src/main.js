import Vue from 'vue'
import App from './App.vue'

import './plugins'
import router from './router'
import { store } from './store/index'

console.log('main', store)

Vue.config.productionTip = false

const vm = new Vue({
  store: store,
  router,
  render: h => h(App)
}).$mount('#app')

window.vm = vm