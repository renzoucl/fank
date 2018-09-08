<template>
    <div id="app1">
      
      <header>
        <div><span class="iconfont icon-dizhi"></span>{{city}}</div>
        <div>{{tit}}</div>
        <div><p><span class="iconfont icon-sousuo" @click="sousuo()"></span></p></div>  
      </header>
      <section>
        <router-view @toparent="getdata"></router-view>
        
      </section>
      <footer>
          <router-link to="./home" tag="div"><div class="shou"><span class="iconfont icon-shouye"></span>首页</div></router-link>
          <router-link to="./dian" tag="div"><div class="shou"><span class="iconfont icon-field"></span>店家</div></router-link>
          <router-link to="./shequ" tag="div"><div class="shou"><span class="iconfont icon-wujiaoxing"></span>社区</div></router-link>
          <router-link to="./ying" tag="div"><div class="shou"><span class="iconfont icon-xin2"></span>营养师</div></router-link>
          <router-link to="./mine" tag="div"><div class="shou"><span class="iconfont icon-wode"></span>我的</div></router-link>
           
      </footer>
    </div>
  </template>
  
  <script>
     
  
  export default {
    name: 'App',
    data(){
      return{
         tit:"首页",
         city:"郑州"
      }
      
    },
    methods:{
      getdata(msg){
        this.tit=msg
      },
      sousuo(){
        this.$router.push("/search")
      }
    }
  }
  </script>
  
  <style>
  /* body,ul,li,dl,dt,dd,p,ol,h1,h2,h3,h4,h5,h6,form,img,table,fieldset,legend,menu,input,button{margin:0; padding:0;}
  ul,li,ol{list-style:none;}
  img,fieldset{border:0; }
  img{display:block;}
  a{text-decoration:none; color:#333;}
  h1,h2,h3,h4,h5,h6{font-weight:100;}
  body{ font-family:"微软雅黑";}
  input,a{outline:none;} */
  .router-link-active{
        color: orange
    }
  #app1 {
     height: 100vh;display: flex;flex-direction: column;
  }
  
  header{height:45px;background:#222222;color:#fff;text-align: center;line-height: 45px;font-size:20px;display: flex;justify-content: space-between;overflow: hidden;}
  header>div{height:45px;width: 100px;}
  header>div:nth-of-type(1){text-align: left;padding-left: 10px;font-size: 16px}
  header>div:nth-of-type(1) span{font-size: 18px;margin-right: 5px}
  header>div:nth-of-type(3){text-align: right;padding-right: 5px;display: flex;align-items: center;justify-content: flex-end;text-align: center;line-height: 28px;}
  header>div:nth-of-type(3) span{font-size: 22px;color: #fff}
  header>div:nth-of-type(3) p{width: 28px;height: 28px;background: #fddb13;border-radius: 50%;margin-right: 5px}
  
  
 
  section{flex: 1;overflow: auto;overflow-x: hidden}
  
  .shou{height:50px;width:60px;display: flex;justify-content: center;flex-direction: column;align-items: center;}
  .shou{font-size: 13px}
  .shou span{font-size: 25px;height: 20px;margin-bottom: 3px;}
  
   footer{height: 50px;background: #272727;color: #fff;text-align: center;line-height: 50px;display: flex;justify-content: space-around;font-size:20px;overflow: hidden;}
  </style>
  