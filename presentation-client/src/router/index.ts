import Vue from 'vue'
import VueRouter, { RouteConfig, Route } from 'vue-router'
import Home from '../views/Home.vue'
import { slides } from './slides'
import { demo } from './demo'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: { name: 'slides-home'},
    name: 'home',
  },
  {
    path: '*',
    redirect: '/'
  },
  ...slides,
  ...demo,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
