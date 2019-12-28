import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Taker from '../views/Taker.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/taker',
    name: 'taker',
    component: Taker
  },
  {
    path: '/questionaire',
    name: 'questionaire',
    component: () => import(/* webpackChunkName: "about" */ '../views/Questionaire.vue')
  },
  {
    path: '/matching',
    name: 'matching',
    component: () => import(/* webpackChunkName: "about" */ '../views/Matching.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
