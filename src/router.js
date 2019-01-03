import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Page404 from './views/404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import('./views/Blogs.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('./views/Services.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: { layout: "admin"},
      component: () => import('./views/Admin/Dashboard.vue')
    },
    {
      path: "*",
      name: "404",
      component: Page404
    }
  ]
})
