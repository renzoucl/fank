import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Home from "../components/home.vue"
import Dian from "../components/dian.vue"
import Ying from "../components/ying.vue"
import Shequ from "../components/shequ.vue"
import Mine from "../components/mine.vue"
import Pub from "../components/pub.vue"
import Myshequ from "../components/myshequ.vue"
import Friendshome from "../components/friendshome.vue"
import Detail from "../components/detail.vue"
import Gouwuche from "../components/gouwuche.vue"

// 聂响
import Djpuzi_yhq from "../components/djpuzi_yhq.vue"
 import Djpuzi_cai from "../components/djpuzi_cai.vue"
 import Djpuzi_yin from "../components/djpuzi_yin.vue"
 import Search from "../components/search.vue"
 import Lisddxinx from "../components/lisddxinx.vue"
 import Xican from "../components/xican.vue"
 import Ddxinxi from "../components/ddxinxi.vue"

// 邵婷婷
  import Dolist from "../components/dolist.vue"
  import Bankcard from "../components/bankcard.vue"
  import Fooddetail from "../components/fooddetail.vue"

//朱怀印
import Register from "../components/register.vue"
import Lr from "../components/lr.vue"
import Index from "../components/index.vue"
import Register2 from "../components/register2.vue"
import Register3 from "../components/register3.vue"
import Register4 from "../components/register4.vue"
import Register5 from "../components/register5.vue"
import Register6 from "../components/register6.vue"
import Register7 from "../components/register7.vue"
import Register8 from "../components/register8.vue"
import Register9 from "../components/register9.vue"
import Login from "../components/login.vue"
import Zaocan from "../components/zaocan.vue"
import Taocan from "../components/taocan.vue"
import Szt from "../components/szt.vue"
import Renzheng from "../components/renzheng.vue"
import Yingyangs from "../components/yingyangs.vue"
import Chat from "../components/chat.vue"

Vue.use(Router)

//路由页面
export default new Router({
  routes: [
    {
			path:'/gouwuche',
			component:Gouwuche
		},
    {
			path:'/detail',
			component:Detail
		},
    
    {
			path:"/register",
			component:Register
		},
		{
			path:"/lr",
			component:Lr
		},
		{
			path:"/index",
			component:Index
		},
		{
			path:"/register2",
			component:Register2
		},
			{
			path:"/register3",
			component:Register3
		},
		{
			path:"/register4",
			component:Register4
		},
		{
			path:"/register5",
			component:Register5
		},
		{
			path:"/register6",
			component:Register6
		},
		{
			path:"/register7",
			component:Register7
		},
		{
			path:"/register8",
			component:Register8
		},
			{
			path:"/register9",
			component:Register9
		},
			{
				path:"/login",
				component:Login
			},
			{
				path:"/zaocan",
				component:Zaocan
			},
			{
				path:"/taocan",
				component:Taocan
			},
			{
				path:"/szt",
				component:Szt
			},
			{
				path:"/renzheng",
				component:Renzheng
			},
			{
				path:"/yingyangs",
				component:Yingyangs
			},
			{
				path:"/chat",
				component:Chat
			},
    
    {
      path:"/djpuzi_yhq",
      component:Djpuzi_yhq
    },
    {
      path:"/djpuzi_cai",
      component:Djpuzi_cai
    },
    {
      path:"/djpuzi_yin",
      component:Djpuzi_yin
    },
    {
      path:"/search",
      component:Search
    },
    {
      path:"/lisddxinx",
      component:Lisddxinx
    },
    {
      path:"/xican",
      component:Xican
    },
    {
      path:"/ddxinxi",
      component:Ddxinxi
    },
    {
      path:"/dolist",
      component:Dolist
    },
    {
      path:"/bankcard",
      component:Bankcard
    },
    {
      path:"/fooddetail/:id",
      component:Fooddetail
    },

     {
      path:"/myshequ",
      component:Myshequ
    },
    {
      path:"/friendshome",
      component:Friendshome
    },
    
    {
      path:"/pub",
      component:Pub,
          children:[
          {
            path:"/home",
            component:Home
          },
          {
            path:"/shequ",
            component:Shequ
          },
          {
            path:"/ying",
            component:Ying
          },
          {
            path:"/mine",
            component:Mine
          },
          {
            path:"/dian",
            component:Dian
          }
        ]
          
          
    },


    {
      path:"/",
      redirect:"/home"
    }
  ]
})

