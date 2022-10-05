import { createRouter, createWebHashHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
