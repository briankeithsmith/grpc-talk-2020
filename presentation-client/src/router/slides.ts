import Vue from 'vue';
import { RouteConfig, Route } from 'vue-router';

export const slides: RouteConfig[] = [{
    path: '/slides',
    component: () => import(/* webpackChunkName: "slides" */ '../views/Slides.vue'),
    children: [
        {
            path: '',
            redirect: '/slides/1/0',
        },
        {
            path: '/slides/:slide/:subSlide',
            component: () => import(/* webpackChunkName: "slides" */ '../components/slides/Slide1.vue'),
            name: 'slides'
        },
        {
            path: '*',
            redirect: '/slides/1/0'
        },
    ],
},];

Vue.component(
    'slide-1',
    () => import(/* webpackChunkName: "slides-section-0" */ '../components/slides/Slide1.vue')
)

Vue.component(
    'slide-2',
    () => import(/* webpackChunkName: "slides-section-1" */ '../components/slides/Slide2.vue')
)

Vue.component(
    'slide-3',
    () => import(/* webpackChunkName: "slides-section-2" */ '../components/slides/Slide3.vue')
)

Vue.component(
    'slide-4',
    () => import(/* webpackChunkName: "slides-section-2" */ '../components/slides/Slide4.vue')
)

Vue.component(
    'slide-5',
    () => import(/* webpackChunkName: "slides-section-2" */ '../components/slides/Slide5.vue')
)


Vue.component(
    'slide-6',
    () => import(/* webpackChunkName: "slides-section-2" */ '../components/slides/Slide6.vue')
)

Vue.component(
    'slide-7',
    () => import(/* webpackChunkName: "slides-section-3" */ '../components/slides/Slide7.vue')
)

Vue.component(
    'slide-8',
    () => import(/* webpackChunkName: "slides-section-3" */ '../components/slides/Slide8.vue')
)

Vue.component(
    'slide-9',
    () => import(/* webpackChunkName: "slides-section-3" */ '../components/slides/Slide9.vue')
)

Vue.component(
    'slide-10',
    () => import(/* webpackChunkName: "slides-section-3" */ '../components/slides/Slide10.vue')
)