import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import Help from '@/views/Help'
import Auth from '@/views/Auth'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'Main',
      auth: true
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: Help,
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
  routes,
	linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
	if (to.meta.auth && !store.getters['auth/isAuth']) {
		next('/auth')
	} else {
		next()
	}
})

export default router
