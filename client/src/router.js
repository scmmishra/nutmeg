import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Note from '@/views/Note.vue'
import Register from '@/views/Auth/Register.vue'
import Login from '@/views/Auth/Login.vue'
import store from './store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresLogin: true }
    },
    {
      path: '/note',
      name: 'note',
      component: Note,
      meta: { requiresLogin: true }
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresLogin && !store.state.isUserLoggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router
