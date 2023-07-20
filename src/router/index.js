import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Technology from '../views/TechnologyView.vue'
import AboutView from '../views/AboutView.vue'
import ProductView from '../views/ProductView.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Pikavue from '../components/Product/Pikavue.vue'
import Platform from '../components/Product/Platform.vue'
import Play from '../components/Product/Play.vue'
import Enhancer from '../components/Product/Enhancer.vue'
import Sdk from '../components/Product/Sdk.vue'
import Ai from '../components/Product/Ai.vue'
import Image from '../components/Product/Image.vue'
import Video from '../components/Product/Video.vue'
import Live from '../components/Product/Live.vue'
import Vr from '../components/Product/Vr.vue'
import Remote from '../components/Product/Remote.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/technology',
      name: 'technology',
      component: Technology
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView
    },
    {
      path: '/product/detail',
      name: 'product detail',
      component: ProductDetail,
      children: [
        {
          path: 'pikavue',
          component: Pikavue
        },
        {
          path: 'platform',
          component: Platform
        },
        {
          path: 'play',
          component: Play
        },
        {
          path: 'enhancer',
          component: Enhancer
        },
        {
          path: 'sdk',
          component: Sdk
        },
        {
          path: 'ai',
          component: Ai
        },
        {
          path: 'image',
          component: Image
        },
        {
          path: 'video',
          component: Video
        },
        {
          path: 'live',
          component: Live
        },
        {
          path: 'vr',
          component: Vr
        },
        {
          path: 'remote',
          component: Remote
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
  ]
})

export default router
