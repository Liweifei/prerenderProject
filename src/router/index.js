import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=>import("@/components/home/home")
    },
    {
      path: '/page1',
      name: 'page1',
      component: ()=>import("@/components/page1/page1")
    },
    {
      path: '/page2',
      name: 'page2',
      component: ()=>import("@/components/page2/page2")
    },
  ]
})
