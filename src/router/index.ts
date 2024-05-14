import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'me',
      component: () => import('../views/MeView.vue'),
    },
  ],
});

export default router;
