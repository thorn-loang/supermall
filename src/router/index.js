import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home'
import Cart from '../views/cart/Cart'
import Profile from '../views/profile/Profile'
import Category from '../views/category/Category'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/Home',
    component:Home
  },
  {
    path:'/Cart',
    component:Cart
  },
  {
    path:'/Profile',
    component:Profile
  },
  {
    path:'/Category',
    component:Category
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
