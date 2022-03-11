import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {

      path: '/article/:id',
      name: 'article',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/Article.vue')
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: () => import('../views/Kontakt.vue')
    },
    {
      path: '/rozvoz',
      name: 'rozvoz',
      component: () => import('../views/Rozvoz.vue')
    },
    {
      path: '/nabidka',
      name: 'nabidka',
      component: () => import('../views/Nabidka.vue')
    },
    {
      path: '/galerie',
      name: 'galerie',
      component: () => import('../views/Galerie.vue')
    },
  ]
})

export default router
