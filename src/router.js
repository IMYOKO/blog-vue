import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home',  component: Home },
    { path: '/login', name: 'login', component: () => import(/* webpackChunkName: "about" */ './views/Login.vue') },
    { path: '/admin', name: 'admin', component: () => import(/* webpackChunkName: "about" */ './views/Admin.vue') },
    { path: '/addblog', name: 'addblog', component: () => import(/* webpackChunkName: "about" */ './views/AddBlog.vue') },
    { path: '/updateblog', name: 'updateblog', component: () => import(/* webpackChunkName: "about" */ './views/UpdateBlog.vue') }
  ]
})
