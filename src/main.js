import Vue from 'vue'

import router from './router'
import { store } from './store/store'

import App from './App.vue'
import Default from './views/layouts/Default'
import Admin from './views/layouts/Admin'

Vue.component('default-layout', Default)
Vue.component('admin-layout', Admin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
