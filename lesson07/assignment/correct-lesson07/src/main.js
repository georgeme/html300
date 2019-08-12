import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import './main.scss'

import { CarouselPlugin } from 'bootstrap-vue'

Vue.use(CarouselPlugin)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
