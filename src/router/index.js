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
    name: 'landing',
    component: () => import('../views/Landing.vue')
  },
  {
    path: '/home',
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
    path: '/questionaire',
    name: 'questionaire',
    component: () => import(/* webpackChunkName: "about" */ '../views/Questionaire.vue')
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
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import(/* webpackChunkName: "about" */ '../views/Payment.vue')
  },
  {
    path: '/article',
    name: 'article',
    component: () => import(/* webpackChunkName: "about" */ '../views/Article.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
