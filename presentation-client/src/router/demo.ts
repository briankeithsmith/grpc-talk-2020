import Vue from 'vue';
import { RouteConfig, Route } from 'vue-router';

export const demo: RouteConfig[] = [{
    path: '/demo',
    component: () => import(/* webpackChunkName: "demo" */ '../views/Demo.vue'),
    name: 'demo'
},];