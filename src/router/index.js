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
      path: '/laundry',
      name: 'laundry',
      component: () => import('../views/Laundry.vue')
    },
    {
      path: '/shoes',
      name: 'shoes',
      component: () => import('../views/Shoes.vue')
    },
    {
      path: '/bags',
      name: 'bags',
      component: () => import('../views/Bags.vue')
    },
    {
      path: '/makeup',
      name: 'makeup',
      component: () => import('../views/Makeup.vue')
    },
    {
      path: '/makeupservices',
      name: 'makeupservices',
      component: () => import('../views/MakeupServices.vue')
    },
    {
      path: '/laptops',
      name: 'laptops',
      component: () => import('../views/Laptops.vue')
    },
    {
      path: '/smartphones',
      name: 'smartphones',
      component: () => import('../views/Smartphones.vue')
    },
    {
      path: '/phonecases',
      name: 'phonecases',
      component: () => import('../views/Phonecases.vue')
    },
    {
      path: '/watches',
      name: 'watches',
      component: () => import('../views/Watches.vue')
    },
    {
      path: '/electronics',
      name: 'electronics',
      component: () => import('../views/Electronics.vue')
    },
    {
      path: '/tutoring',
      name: 'tutoring',
      component: () => import('../views/Tutoring.vue')
    },
    {
      path: '/macronutrients',
      name: 'macronutrients',
      component: () => import('../views/Macronutrients.vue')
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
