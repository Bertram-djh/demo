
import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Nowplaying from '../views/films/Nowplaying'
import Comingsoon from '../views/films/Comingsoon'
import Search from '../views/Search'
import Detail from '../views/Detail'
import Order from '../views/Order'
import Login from '../views/Login'
import News from '@/views/News'
import City from '@/views/City'

Vue.use(VueRouter) // 注册路由插件，两个全局 router-view  router-link

// 配置表
const routes = [
  {
    path: '/films',
    component: Films,
    // 嵌套路由
    children: [
      {
        path: '/films/nowplaying',
        component: Nowplaying
      },
      {
        path: '/films/comingsoon',
        component: Comingsoon
      },
      {
        path: '/films',
        redirect: '/films/nowplaying'
      }
    ]
  },
  {
    path: '/cinemas/search',
    component: Search
  },
  {
    path: '/news',
    component: News
  },
  {
    path: '/city',
    component: City
  },
  {
    name: 'nameDetail', // 命名路由
    path: '/detail/:myid', // 动态二级路由
    component: Detail
  },
  {
    path: '/cinemas',
    component: Cinemas
  },
  {
    path: '/center',
    component: () => import('@/views/Center'), // 路由懒加载
    meta: {
      isRequired: true // 路由拦截判定
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      isRequired: true // 路由拦截判定
    }
  },
  {
    path: '/login',
    component: Login
  },
  { // 重定向，默认地址条状到/films
    path: '/',
    redirect: '/films'
  },
  {
    path: '*',
    redirect: '/films'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.isRequired) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
        // 路由元信息
      })
    }
  } else {
    next()
  }
})
export default router
