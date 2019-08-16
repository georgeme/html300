import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Movies from '@/views/Movies.vue'
import Stars from '@/views/Stars.vue'
import Trivia from '@/views/Trivia.vue'

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
      path: '/movies',
      name: 'movies',
      component: Movies
    },
    {
      path: '/stars',
      name: 'stars',
      component: Stars
    },
    {
      path: '/trivia',
      name: 'trivia',
      component: Trivia
    }
  ]
})
