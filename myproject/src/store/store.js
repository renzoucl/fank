import Vue from "vue"
import Vuex from "vuex"


Vue.use(Vuex)


export default new Vuex.Store({
	state:{
		username:"",
		count:0
	},
	mutations:{
		next(a,b){
			a.username=b
		}
	}
	
})
