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
      component: () => import(/* webpackChunkName: "game" */ './views/Deficit.vue')
    },
    {
      path: '/meeting_investors',
      name: 'meeting_investors',
      component: () => import(/* webpackChunkName: "game" */ './views/meeting_investors.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
