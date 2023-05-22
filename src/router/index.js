import { createRouter, createWebHashHistory } from "vue-router/dist/vue-router";

import { HomeView, JobSearchResult } from '../views'

const routes = [
    {
        path: '/',
        name: "Home",
        component: HomeView
    },
    {
        path: '/jobs/results',
        name: 'JobResults',
        component: JobSearchResult
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router