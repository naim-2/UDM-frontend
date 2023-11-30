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
    },
    {
      path: '/sell',
      name: 'sell',
      component: () => import('../views/Sell.vue')
    },
    {
      path: '/addProduct',
      name: 'addProduct',
      component: () => import('../views/AddProduct.vue')
    },
    {
      path: '/editProduct',
      name: 'editProduct',
      component: () => import('../views/EditProduct.vue')
    },
    {
      path: '/clothes/:product',
      name: 'clothesProducts',
      component: () => import('../views/ClothItem.vue')
    },
    {
      path: '/laundry/:product',
      name: 'laundryProducts',
      component: () => import('../views/LaundryItem.vue')
    },
    {
      path: '/shoes/:product',
      name: 'shoesProducts',
      component: () => import('../views/ShoeItem.vue')
    },
    {
      path: '/bags/:product',
      name: 'bagsProducts',
      component: () => import('../views/BagItem.vue')
    },
    {
      path: '/makeup/:product',
      name: 'makeupProducts',
      component: () => import('../views/MakeupItem.vue')
    },
    {
      path: '/makeupservices/:product',
      name: 'makeupservicesProducts',
      component: () => import('../views/MakeupServiceItem.vue')
    },
    {
      path: '/laptops/:product',
      name: 'laptopsProducts',
      component: () => import('../views/LaptopItem.vue')
    },
    {
      path: '/smartphones/:product',
      name: 'smartphonesProducts',
      component: () => import('../views/SmartphoneItem.vue')
    },
    {
      path: '/phonecases/:product',
      name: 'phonecasesProducts',
      component: () => import('../views/PhonecaseItem.vue')
    },
    {
      path: '/watches/:product',
      name: 'watchesProducts',
      component: () => import('../views/WatchItem.vue')
    },
    {
      path: '/electronics/:product',
      name: 'electronicsProducts',
      component: () => import('../views/ElectronicItem.vue')
    },
    {
      path: '/tutoring/:product',
      name: 'tutoringProducts',
      component: () => import('../views/TutoringItem.vue')
    },
    {
      path: '/macronutrients/:product',
      name: 'macronutrientsProducts',
      component: () => import('../views/MacronutrientItem.vue')
    },
  ]
})

export default router
