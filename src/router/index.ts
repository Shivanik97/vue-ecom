import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Products from "../components/Products/Products.vue"
import Offers from "../views/Offers.vue"
import { auth0 } from '../config/authConfig'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/courses',
      name: 'courses',
      component: Products
    },
    {
      path: '/articles',
      name: 'articles',
      component: Offers
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const { isAuthenticated, loginWithRedirect } = auth0

  if (to.path !== '/' && !isAuthenticated) {
    await loginWithRedirect()
  } else {
    next()
  }
})

export default router
