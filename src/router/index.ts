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
    component: async () => await import('@/views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
