import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/game/:step?',
      name: 'game',
      component: () => import(/* webpackChunkName: "game" */ './views/Game.vue')
    },
    {
      path: '/deficit',
      name: 'deficit',
      component: () => import(/* webpackChunkName: "deficit" */ './views/Deficit.vue')
    },
    {
      path: '/investor',
      name: 'investor',
      component: () => import(/* webpackChunkName: "investor" */ './views/MeetingInvestors.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
