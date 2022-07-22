import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Signup from '../views/Signup.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path:'/book/:id/',
    name:'BookAbout',
    component:() => import("@/views/BookAbout.vue"),
   },
 
  {
   path:'/genre/:id/',
   name:'Genre',
   component:() => import("@/views/Genres.vue"),
  },
  {
    path:'/upload',
    name:'Upload',
    component:() => import("@/views/Upload.vue"),
   },
  { path: '/:catchAll(.*)',
    name:'NotFound',
    component: () => import('@/views/NotFound.vue') },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
