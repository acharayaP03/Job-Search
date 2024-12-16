import {createRouter, createWebHashHistory} from 'vue-router'

import {HomeView, JobSearchResult, JobView, TeamsView} from '../views'

const routes = [
  {
    path: '/',
    name: 'Home',
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
    component: JobSearchResult
  },
  {
    path: '/teamview',
    name: 'TeamView',
    component: TeamsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
      behavior: 'smooth'
    }
  },
  routes
})

export default router
