import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../components/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../components/views/ContactView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../components/views/ProjectsView.vue')
    }
  ]
})

export default router
