import Vue from 'vue'
import Router from 'vue-router'
import Events from '@/components/Events'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Events',
      component: Events
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
