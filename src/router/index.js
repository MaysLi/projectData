import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/Index.vue'
// import CreateData from '@/components/createData/CreateData.vue'
const CreateData = () => import('@/components/createData/CreateData.vue') //路由懒加载
const AnalysisData = () => import('@/components/analysisData/AnalysisData.vue') //路由懒加载
Vue.use(Router)
let children = [
  {
    path: '/createData',
    name: 'CreateData',
    component: CreateData,
    meta: {keepAlive: true}
  },{
    path: '/analysisData',
    name: 'AnalysisData',
    component: AnalysisData,
    meta: {keepAlive: true}
  }
]
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: children
    }
  ]
})
