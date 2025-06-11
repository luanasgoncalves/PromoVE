import { createRouter, createWebHistory } from 'vue-router';
import Cadastro from '../components/Cadastro.vue';
import Login from '../components/Login.vue';
import HomeView from '../HomeView.vue'; 

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;