import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header'
import Search from '@/pages/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'header',
      component: header
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
