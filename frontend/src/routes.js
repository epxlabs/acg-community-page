import Login from './components/Login.vue'

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
}]

export default routes
