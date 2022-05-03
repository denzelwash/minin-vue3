import { createRouter, createWebHistory } from 'vue-router'
import Tasks from '@/views/Tasks'
import Task from '@/views/Task'
import New from '@/views/New'

const routes = [
  {
    path: '/',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/task/:id',
    name: 'Task',
    component: Task
  },
  {
    path: '/new',
    name: 'New',
    component: New
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
