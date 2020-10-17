import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=> import('../views/Home'),
    redirect:'/recommend',
    children: [
      //推荐
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
      //歌手
      {
        path:'singers',
        name: 'singers',
        component: ()=> import('../views/Singers')
      },
      //排行榜
      {
        path:'rank',
        name: 'rank',
        component: ()=> import('../views/Rank')
      },
      //搜索
      {
        path: 'search',
        name: 'search',
        component: ()=> import('../views/Search'),
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
