import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SERVER from './api/blog'

Vue.config.productionTip = false
Vue.prototype.SERVER = SERVER

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
