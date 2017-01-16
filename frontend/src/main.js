// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Resource from 'vue-resource'
import routes from './routes'
import store from './store'
import AppView from './App.vue'
import AWSSDK from './aws'

Vue.use(VueRouter)
Vue.use(Resource)

AWSSDK.config.set()

var router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  AWSSDK.getCurrentUser((user) => {
    if (!user && to.matched.some(record => record.meta.requiresAuth)) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router: router,
  store: store,
  render: h => h(AppView)
})
