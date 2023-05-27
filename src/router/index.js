import { createRouter, createWebHashHistory } from "vue-router/dist/vue-router";

import {HomeView, JobSearchResult, JobView} from '../views'


const routes = [
    {
        path: '/',
        name: "Home",
        component: HomeView
    },
    {
        path: '/jobs/results',
        name: 'JobResults',
        component: JobView
    },
    {
        path: '/jobs/results/:id',
        name: 'JobView',
        component:  JobSearchResult
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router