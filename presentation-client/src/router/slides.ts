import Vue from 'vue';
import { RouteConfig, Route } from 'vue-router';
import { AllSlides } from '@/components/slides/SlideConfigs';

export const slides: RouteConfig[] = [{
    path: '/slides',
    component: () => import(/* webpackChunkName: "slides" */ '../views/Slides.vue'),
    children: [
        {
            path: '',
            redirect: '/slides/Title/0',
        },
        {
            path: '/slides/:slide/:subSlide',
            component: () => import(/* webpackChunkName: "slides" */ '../components/slides/Title.vue'),
            name: 'slides'
        },
        {
            path: '*',
            component: () => import(/* webpackChunkName: "slide-not-found" */ '../components/slides/NotFound.vue'),
        },
    ],
},];

for (let slideConfig of AllSlides) {
    Vue.component(
        `slide-${slideConfig.name}`,
        () => import(/* webpackChunkName: "slides" */ `../components/slides/${slideConfig.name}.vue`)
    )    
}