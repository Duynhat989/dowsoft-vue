import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TiktokView from '../views/pages/Tiktok.vue'
import YoutubeView from '../views/pages/Youtube.vue'
import FacebookView from '../views/pages/Facebook.vue'
import LanguageView from '../views/pages/Language.vue'
import RulesView from '../views/pages/Rules.vue'
import MeView from '../views/layouts/Me.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/video-tiktok',
      name: 'tiktok',
      component: TiktokView
    },
    {
      path: '/video-youtube',
      name: 'youtube',
      component: YoutubeView
    },
    {
      path: '/video-facebook',
      name: 'facebook',
      component: FacebookView
    },
    {
      path: '/rules',
      name: 'rules',
      component: RulesView
    },
    {
      path: '/me',
      name: 'me',
      component: MeView
    },
    {
      path: '/languages',
      name: 'languages',
      component: LanguageView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: HomeView
    }
  ]
})

export default router
