import Vue from 'vue'
import VueRouter from 'vue-router'

import Inicio from '../views/Inicio.vue'
import About from '../views/About.vue'
import Contacto from '../views/Contacto.vue'
import Post from '../views/Post.vue'
import SobreMi from '../views/SobreMi.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/inicio'
  },
  { 
    path: '/inicio', 
    component: Inicio 
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/post/1',
    name: 'Post',
    component: Post
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path: '/sobremi',
    name: 'SobreMi',
    component: SobreMi
  }
]

const router = new VueRouter({
mode: 'history',
base: process.env.BASE_URL,
routes
});


export default router;
