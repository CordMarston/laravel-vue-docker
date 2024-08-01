import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user';
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/auth/:method', name:'auth', component: AuthView },
    { path: '/ims', name: 'dashboard', component: DashboardView }
  ]
})




router.beforeResolve(async (to, from) => {
  const userStore = useUserStore();
  const isAuthenticated = userStore.isAuthenticated;
  console.log(isAuthenticated);
  // if (to.name !== 'auth') {
  //   return { 
  //     name: 'auth',
  //     params: {
  //       method: 'login'
  //     }
  //   }
  // }
})

export default router
