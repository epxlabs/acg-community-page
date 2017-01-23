import Login from './components/Login.vue'
import Registration from './components/Registration.vue'
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
},
{
  path: '/registration',
  component: Registration
}]

export default routes
