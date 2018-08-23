

<template>
  <div id="app">
    
    <header>{{tit}}</header>
    <section>
      <router-view @toparent="getdata"></router-view>
    </section>
    <footer>
        <router-link to="./home" tag="span">首页</router-link>
        <router-link to="./dian" tag="span">店家</router-link>
        <router-link to="./shequ" tag="span">社区</router-link>
        <router-link to="./ying" tag="span">营养师</router-link>
        <router-link to="./mine" tag="span">我的</router-link>
         
    </footer>
  </div>
</template>

<script>
        
export default {
  name: 'App',
  data(){
    return{
       tit:"首页"
    }
    
  },
  methods:{
    getdata(msg){
      this.tit=msg
    }
  }
}
</script>

<style>
  *{margin: 0;padding:0}
  .router-link-active{
      color: orange
  }
#app {
   height: 100vh;display: flex;flex-direction: column;
}
section{flex: 1}
header{height:50px;background:#222222;color:#fff;text-align: center;line-height: 50px;font-size:20px}
footer{height: 50px;background: #272727;color: #fff;text-align: center;line-height: 50px;display: flex;justify-content: space-around;font-size:20px}


</style>
