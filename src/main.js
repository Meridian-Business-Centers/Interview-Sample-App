// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

import App from './App'

import Home from './components/Home'
import Post from './components/Post'
import Contact from './components/Contact'

const routes = [
  { path: '/home', component: Home, alias: '/' },
  { path: '/details/:id', component: Post },
  { path: '/contact', component: Contact }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

const API_PREFIX = 'https://jsonplaceholder.typicode.com'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  data: {
    API_PREFIX: API_PREFIX
  },
  components: { App }
})
