import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store/index'
import { Message } from 'element-ui'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', name: 'home',  component: Home },
    { path: '/login', name: 'login', component: () => import(/* webpackChunkName: "about" */ './views/Login.vue') },
    { path: '/admin', name: 'admin', meta: { login: true } , component: () => import(/* webpackChunkName: "about" */ './views/Admin.vue') },
    { path: '/addblog', name: 'addblog', meta: { login: true } , component: () => import(/* webpackChunkName: "about" */ './views/AddBlog.vue') },
    { path: '/adduser', name: 'adduser', meta: { login: true } , component: () => import(/* webpackChunkName: "about" */ './views/AddUser.vue') },
    { path: '/updateblog', name: 'updateblog', meta: { login: true } , component: () => import(/* webpackChunkName: "about" */ './views/UpdateBlog.vue') }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.login)) {
    if (store.state.islogin) {
      next()
    } else {
      Message({ message: '请先登录', type: 'error' })
      next({ path: '/login' })
    }
  } else {
    next()
  }
})

export default router