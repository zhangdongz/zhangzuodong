import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from "../views/index/index.vue"
import Course from "../views/course/course.vue"
import News from "../views/news/news.vue"
import Book from "../views/book/book.vue"
import Person from "../views/person/person.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:"/index",
    children:[
      {path:"/index",name:"index",component:Index},
      {path:"/course",name:"course",component:Course},
      {path:"/news",name:"news",component:News},
      {path:"/book",name:"book",component:Book},
      {path:"/person",name:"person",component:Person},
    ]
  },
  {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
  },
  {
    path: '/pass',
    name: 'pass',
    component: () => import('../views/person/pass')
  },
  {
    path: '/shezhi',
    name: 'shezhi',
    component: () => import('../views/person/shezhi')
  },
  {
    path: '/zhuxiao',
    name: 'zhuxiao',
    component: () => import('../views/person/zhuxiao')
  },
  {
    path: '/sigin',
    name: 'sigin',
    component: () => import('../views/sigin')
  },
  {
    path: '/xiang/:id',
    name: 'xiang',
    component: () => import('../views/course/xiang')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
