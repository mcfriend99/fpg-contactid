import Vue from 'vue'
import Router from 'vue-router'
import HomeScreen from '@/components/pages/home-screen/HomeScreen'
import SearchScreen from '@/components/pages/search-screen/SearchScreen'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeScreen
    },
    {
      path: '/search',
      name: 'search',
      component: SearchScreen
    }
  ]
})
