import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/tailwind.css'
import FeatherIcon from '@/components/Feather/FeatherIcon'

Vue.config.productionTip = false
Vue.component('FeatherIcon', FeatherIcon)

Vue.use(require('vue-shortkey'))

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
