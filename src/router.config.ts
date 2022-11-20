import * as VueRouter from 'vue-router'

import Home from './pages/Index.vue'
import About from './pages/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})
