import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'task',
      component: () => import('../views/TaskView.vue')
    },
    {
      path: '/numbers',
      name: 'numbers',
      component: () => import('../views/NumbersTrivia.vue')
    },
    {
      path: '/addition',
      name: 'addition',
      component: () => import('../views/ComputeNumber.vue')
    }
  ]
});

export default router;
