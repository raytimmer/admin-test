import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Login from '@/pages/Login'
import Index from '@/pages/Index'
import pageHeader from '@/components/page-header'
import sideBar from '@/components/side-bar'

Vue.use(Router)

export default new Router(
  {
    routes: [
      {
        path: '/',
        component: Login,
        name: '',
        hidden: false
      },
      {
        path: '/index',
        component: Index,
        name: '首页'
      },
      {
        path: '/index',
        component: pageHeader,
        name: '头部'
      },
      {
        path: '/index',
        component: sideBar,
        name: '头部'
      }
    ]
  }
)
