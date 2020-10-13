import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=> import('../views/Home'),
    redirect:'/recommend',
    children: [
      {
        path:'recommend',
        name: 'recommend',
        component: ()=> import('../views/Recommend'),
        children: [
          {
            path: ':id',
            name: 'recommendList',
            component: ()=> import('../views/RecommendList'),
          }
        ]
      },
      {
        path:'singers',
        name: 'singers',
        component: ()=> import('../views/Singers')
      },
      {
        path:'rank',
        name: 'rank',
        component: ()=> import('../views/Rank')
      }
    ]
  },
  {
    path: '**',
    redirect: '/recommend'
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
