import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "../components/home.vue"
import Dian from "../components/dian.vue"
import Ying from "../components/ying.vue"
import Shequ from "../components/shequ.vue"
import Mine from "../components/mine.vue"
import Pub from "../components/pub.vue"


Vue.use(Router)

//路由页面
export default new Router({
  routes: [
    {
      path:"/home",
      component:Home
    },
    {
      path:"/dian",
      component:Dian
    },
    {
      path:"/ying",
      component:Ying
    },{
      path:"/mine",
      component:Mine
    },
    {
      path:"/shequ",
      component:Shequ
    },
    // {
    //   path:"/pub",
    //   component:Pub,
    //       children:[
    //       {
    //         path:"/home",
    //         component:Home
    //       },
    //       {
    //         path:"/shequ",
    //         component:Shequ
    //       },
    //       {
    //         path:"/ying",
    //         component:Ying
    //       },
    //       {
    //         path:"/mine",
    //         component:Mine
    //       },
    //       {
    //         path:"/dian",
    //         component:Dian
    //       }
    //     ]
          
          
    // },


    {
      path:"/",
      redirect:"/home"
    }
  ]
})

