// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Resource from 'vue-resource'
import routes from './routes'
import store from './store'
import AppView from './App.vue'

Vue.use(VueRouter)
Vue.use(Resource)

var router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router: router,
  store: store,
  render: h => h(AppView)
})
