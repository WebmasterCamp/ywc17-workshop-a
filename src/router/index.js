import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
