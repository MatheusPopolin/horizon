import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../views/home.vue')
    },
    {
      path: '/planos',
      name: 'pricing',
      component: import('../views/pricing.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: import('../views/login.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: import('../views/dashboard.vue')
    },
    {
      path: '/clientes',
      name: 'clients',
      component: import('../views/clients.vue')
    },
    {
      path: '/cadastrar-cliente',
      name: 'register',
      component: import('../views/register.vue')
    },
    {
      path: '/editar-cliente',
      name: 'edit',
      component: import('../views/edit.vue')
    },
    {
      path: '/cliente',
      name: 'client',
      component: import('../views/client.vue')
    },
    {
      path: '/configurar',
      name: 'config',
      component: import('../views/config.vue')
    },
  ]
})

export default router
