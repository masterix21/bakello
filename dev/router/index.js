import Vue from 'vue'
import Router from 'vue-router'
import LayoutClient from '../pages/Client';
import PageLogin from '../pages/Login'
import PagePassword from '../pages/Password'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: PageLogin
    },
    {
      path: '/password',
      name: 'Password',
      component: PagePassword
    },
    {
      path: '/client',
      name: 'Client',
      component: LayoutClient
    }
  ]
})
