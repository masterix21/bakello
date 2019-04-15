import Vue from 'vue'
import Router from 'vue-router'
import LayoutClient from '@/layouts/client';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Client',
      component: LayoutClient
    }
  ]
})
