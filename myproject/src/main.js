// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./icon/iconfont.css"
import MintUI from 'mint-ui'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Checkbix from "checkbix"


import 'mint-ui/lib/style.css'
//import "./js/jquery.js"
import $ from "jquery"
Vue.use(MintUI)
Vue.use(Checkbix)
Vue.use(ElementUI);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
