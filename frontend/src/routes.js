import Login from './components/Login.vue'
import NonProfit from './components/NonProfit.vue'
const routes = [{
  path: '/login',
  component: Login
}, {
  path: '/',
  component: Login,
  children: [{
    path: '',
    redirect: '/login'
  }]
}, {
  path: '/nonprofit/:id',
  component: NonProfit
}]

export default routes
