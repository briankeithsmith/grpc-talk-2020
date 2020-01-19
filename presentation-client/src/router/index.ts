import Vue from 'vue'
import VueRouter, { RouteConfig, Route } from 'vue-router'
import Home from '../views/Home.vue'
import { slides } from './slides'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '*',
    redirect: '/'
  },
  ...slides,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
