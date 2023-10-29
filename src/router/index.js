import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/clothes',
      name: 'clothes',
      component: () => import('../views/Clothes.vue')
    },
    {
      path: '/bags',
      name: 'bags',
      component: () => import('../views/Bags.vue')
    },
    {
      path: '/laptops',
      name: 'laptops',
      component: () => import('../views/Laptops.vue')
    },
    {
      path: '/shoes',
      name: 'shoes',
      component: () => import('../views/Shoes.vue')
    },
    {
      path: '/smartphones',
      name: 'smartphones',
      component: () => import('../views/Smartphones.vue')
    },
    {
      path: '/watches',
      name: 'watches',
      component: () => import('../views/Watches.vue')
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/log-in',
      name: 'log-in',
      component: () => import('../views/LogIn.vue')
    }
  ]
})

export default router
