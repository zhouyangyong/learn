import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import Home from '@/components/Home'
import Table from '@/components/Table'
import Use from '@/components/Use'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/table',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/',
          name: 'Table',
          component: Table,
        },
        {
          path: '/use',
          name: 'Use',
          component: Use,
        }
      ]
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
