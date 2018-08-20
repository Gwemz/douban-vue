import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/pages/movie/Movie'
import Event from '@/pages/event/Event'
import About from '@/pages/about/About'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/movie'
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/event',
      name: 'Event',
      component: Event
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
