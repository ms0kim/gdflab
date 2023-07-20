import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectView from '../views/ProjectView.vue'
import ProjectDetail from '../views/ProjectDetail.vue'
import Pikavue from '../components/Project/Pikavue.vue'
import Platform from '../components/Project/Platform.vue'
import Play from '../components/Project/Play.vue'
import Enhancer from '../components/Project/Enhancer.vue'
import Sdk from '../components/Project/Sdk.vue'
import Ai from '../components/Project/Ai.vue'
import Image from '../components/Project/Image.vue'
import Video from '../components/Project/Video.vue'
import Live from '../components/Project/Live.vue'
import Vr from '../components/Project/Vr.vue'
import Remote from '../components/Project/Remote.vue'
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
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectView
    },
    {
      path: '/project/detail',
      name: 'project detail',
      component: ProjectDetail,
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
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
  ]
})

export default router
