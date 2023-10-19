import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '主页',
      keepAlive: true,
      requireAuth: false
    },
    component: async () => await import('@/views/HomePage/HomePage.vue')
  },
  {
    path: '/client/:clientName',
    name: 'Client',
    meta: {
      title: '客户端',
      keepAlive: true,
      requireAuth: false
    },
    component: async () => await import('@/views/ClientPage/ClientPage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: async () => await import('@/views/NotFound/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
