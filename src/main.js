import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import SERVER from './api/blog'
import './assets/style/reset.css'
import { Button, Container, Header, Aside, Main, Footer, Menu, MenuItem, Table, TableColumn, Form, FormItem, Input, Message } from 'element-ui';

Vue.config.productionTip = false
Vue.prototype.SERVER = SERVER
Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

Vue.prototype.$message = Message;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
