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
      path: '/reputation',
      name: 'reputation',
      component: () => import(/* webpachChunkName: "reputation" */ './views/GettingPopular.vue')
    },
    {
      path: '/concours',
      name: 'concours',
      component: () => import(/* webpachChunkName: "concours" */ './views/Concours.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    // {
    //   path: '/almost_bankrupted',
    //   name: 'almost_bankrupted',
    //   component: () => import(/* webpackChunkName: "about" */ './views/almost_bankrupted.vue')
    // },
    {
      path: '/fin',
      name: 'fin',
      component: () => import(/* webpackChunkName: "fin" */ './views/fin.vue')
    }
  ]
})
