import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import toyApp from '../views/toy-app.vue'
import toyDetails from '../views/toy-details.vue'
import toyEdit from '../views/toy-edit.vue'
import toyDashboard from '../views/toy-dashboard.vue'
import shopMap from '../views/shop-map.vue'
import userPage from '../views/user-page.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: toyDashboard
    },
    {
      path: '/shop',
      name: 'shop-map',
      component: shopMap
    },
    {
      path: '/user',
      name: 'user-page',
      component: userPage,
    },
    {
      path: '/toy',
      name: 'toy-app',
      component: toyApp
    },
    {
      path: '/toy/:toyId',
      name: 'toy-details',
      component: toyDetails
    },
    {
      path: '/toy/edit/:toyId?',
      name: 'edit',
      component: toyEdit
    },

  ]
})

export default router
