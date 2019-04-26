import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Note from '@/views/Note.vue'
import Register from '@/views/Auth/Register.vue'
import Login from '@/views/Auth/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/note',
      name: 'note',
      component: Note
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
