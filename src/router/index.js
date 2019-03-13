import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/views/Demo'
import Container from '@/views/Container'
import TableDemo from '@/views/TableDemo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user',
      name: 'Container',
      component: Container,
      children: [
        {
          path: 'menu-1',
          component: Demo
        },
        {
          path: 'menu-2',
          component: TableDemo
        }
      ]
    }
  ]
})
