import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main'
import Auth from '@/views/Auth'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    meta: {
      layout: 'Main',
      auth: true
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    meta: {
      layout: 'Auth',
      auth: false
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth && store.getters['auth/isAuth']) {
    next()
  } else if (to.meta.auth && !store.getters['auth/isAuth']) {
    next('/auth?message=auth')
  } else {
    next()
  }
})

export default router
