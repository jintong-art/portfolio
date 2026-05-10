import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Works from '../pages/Works.vue'
import WorkDetail from '../pages/WorkDetail.vue'
import About from '../pages/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/works/:id(\\d+)',
    name: 'WorkDetail',
    component: WorkDetail
  },
  {
    path: '/works',
    name: 'Works',
    component: Works
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
