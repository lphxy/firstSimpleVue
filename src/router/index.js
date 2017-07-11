import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
/*组件1*/
import Reacommend from '@/components/recommend/recommend'
/*组件歌手*/
import Singer from '@/components/singer/singer'
import Rank from '@/components/rank/rank'
/*组件搜索*/
import Search from '@/components/search/search'

Vue.use(Router)
/****路由配置 */
export default new Router({
  routes: [
    /****配置导航区4个组件 */
    {
      path: '/recommend',
      name: 'Reacommend',
      component: Reacommend
    },
     {
      path: '/singer',
      name: 'Singer',
      component: Singer
    },
     {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }

  ]
})
