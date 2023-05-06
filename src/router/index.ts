import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('../views/SettingsView.vue')
    },
    {
      path: '/markdown',
      name: 'Markdown',
      component: () => import('../views/MarkdownView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/PageNotFound.vue')
    }
  ]
})

export default router
