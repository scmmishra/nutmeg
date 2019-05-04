import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import '@/assets/tailwind.css'
import FeatherIcon from '@/components/Feather/FeatherIcon'
import Dropdown from '@/components/Dropdown.vue'

Vue.config.productionTip = false
Vue.component('FeatherIcon', FeatherIcon)
Vue.component('Dropdown', Dropdown)

Vue.use(require('vue-shortkey'))
sync(store, router)

Array.prototype.randomElement = function () {
  return this[Math.floor(Math.random() * this.length)]
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
