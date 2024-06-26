import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Courses from "../components/Products/Products.vue"
import Articles from "../components/Articles/Offers.vue"
import WishList from "../components/Wishlist/wishlist.vue"
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
      component: Courses
    },
    {
      path: '/articles',
      name: 'articles',
      component: Articles
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: WishList
    },
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
