import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Taker from '../views/Taker.vue'
import Call from '../views/Call.vue'
import Result from '../views/Result.vue'

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
    path: '/result',
    name: 'result',
    component: Result
  },
  {
    path: '/questionair',
    name: 'questionair',
    component: () => import(/* webpackChunkName: "about" */ '../views/Questionair.vue')
  },
  {
    path: '/matching',
    name: 'matching',
    component: () => import(/* webpackChunkName: "about" */ '../views/Matching.vue')
  },
  {
    path: '/call',
    name: 'calling',
    component: Call
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
