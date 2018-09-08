<template>
    <div id="djpuzi">
        <header>
	       <div><a href="javascript:history.go(-1)"><p><span class="iconfont icon-203"></span></p></a></div>
	      <div>{{str}}</div>
	      <div><p><span class="iconfont icon-sousuo" @click="sousuo()"></span></p></div>  
	    </header>  
        <section>
	    	<div class="s-top">
	    		<img src="static/djpz.png"/>
	    		<div class="dj-pic">
	    			<span class="iconfont icon-xinxi"></span>
	    			<div><img src="static/djpzpic.png"/></div>
	    			<span class="iconfont icon-dianhua"></span>
	    		</div>
	    		<div class="dj-xinxi">
	    			<p class="start1"></p>
	    			<h2 class="dianname">唐津牛排<span>（京广路店）</span></h2>
	    			<p class="diantg">好吃的牛排在哪里，当然在唐津牛排啦！</p>
	    			<div class="diandz">
	    				<span class="iconfont icon-dizhi1"></span>
	    				<p>京广路京沙大厦西100米京广路京沙大厦西100米</p>
	    			</div>
	    			<div class="diansj">
	    				<div class="diansj1">
	    					<strong>15</strong>
	    					<p>
	    						<span class="iconfont icon-tuijiancaipu"></span>
	    						
	    						<strong>菜单</strong>
	    					</p>
	    				</div>
	    				<div>
	    					<strong>15</strong>
	    					<p>
	    						<span class="iconfont icon-xin"></span>
	    						<strong>粉丝</strong>
	    					</p>
	    				</div>
	    				<div>
	    					<strong>1520</strong>
	    					<p>
	    						<span class="iconfont icon-xinxi"></span>
	    						<strong>咖评</strong>
	    					</p>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    	<div class="s-nav">
	    		<router-link to="/djpuzi_cai"  tag='p'>菜品</router-link>
	    		<router-link to="/djpuzi_yin"   tag='p'>饮品</router-link>
	    		<router-link to="/djpuzi_yhq" class="xzshi" tag='p'>优惠卷</router-link>
	    	</div>
	    	<div class="s-main">
	    		<div class="sm-yhq">
	    			<div>
	    				<div class="yhq-js">
		    				<div>
		    					<h3>￥5元优惠卷</h3>
			    				<p>仅限本店打折商品使用</p>
			    				<p><strong>有效期</strong><span>2018.8.28-2018.9.28</span></p>
		    				</div>
		    				<div>
		    					<img src="static/xj.png"/>
		    				</div>
		    				
		    			</div>
	    			</div>
	    			
	    			<p class="lingq"><span>立即领取</span></p>
	    		</div>
	    	
	    		<div class="sm-yhq">
	    			<div>
	    				<div class="yhq-js">
		    				<div>
		    					<h3>￥5元优惠卷</h3>
			    				<p>仅限本店打折商品使用</p>
			    				<p><strong>有效期</strong><span>2018.8.28-2018.9.28</span></p>
		    				</div>
		    				<div>
		    					<img src="static/xj.png"/>
		    				</div>
		    				
		    			</div>
	    			</div>
	    			
	    			<p class="lingq"><span>立即领取</span></p>
	    		</div>
	    	</div>
	    	
	    </section>
    </div>
  </template>
  
  <script>
  

  export default {
    name: 'Djpuzi_yhq',
    data(){
      return {
        str:"店家铺子",
      }
    },
    methods:{
	    getdata(msg){
	      this.tit=msg
	    },
	    sousuo(){
        this.$router.push("/search")
      }
	  },
    mounted() {
      this.$emit("toparent",this.str)
      
    },
        
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    	#djpuzi {height: 100vh;display: flex;flex-direction: column;}
	header{height:45px;background:#222222;color:#fff;text-align: center;line-height: 45px;font-size:20px;display: flex;justify-content: space-between;overflow: hidden;}
	header>div{height:45px;width: 100px;}
	header>div:nth-of-type(1){text-align: left;padding-left: 5px;font-size: 16px;display: flex;align-items: center;text-align: center;line-height: 28px;}
	
	header>div:nth-of-type(1) p{width: 28px;height: 28px;background: #fddb13;border-radius: 50%;margin-left: 5px;text-align: center;line-height: 28px;}
	header>div:nth-of-type(1) span{font-size: 22px;color: #fff;display: block;}
	
	header>div:nth-of-type(3){text-align: right;padding-right: 5px;display: flex;align-items: center;justify-content: flex-end;text-align: center;line-height: 28px;}
	header>div:nth-of-type(3) span{font-size: 22px;color: #fff}
	header>div:nth-of-type(3) p{width: 28px;height: 28px;background: #fddb13;border-radius: 50%;margin-right: 5px}
	section{flex: 1;overflow: auto;}
	.s-top{height:305px;}
	.s-top>img{width: 100%;height:143px}
	.dj-pic{
		position: relative;
		height: 70px;
		top:-35px;
		left: 0;
		display: flex;
		justify-content: center;
	}
	.dj-pic>span{display:inline-block;}
	.dj-pic>span:nth-of-type(1){position: absolute;top:15px;left:80px;width:30px ;height: 30px;border-radius:50% ;background: yellow;text-align: center;line-height: 30px;color: white;}
	.dj-pic>div{position: absolute;top: 0;left:0;right:0;margin:0 auto;width: 70px;height:70px;border-radius: 50%;background: #fff;border: 1px solid #999;}
	.dj-pic>div>img{width:50px;height:42px;position: absolute;top: 0;bottom:0;left:0;right:0;margin:auto;border-radius: 5px;}
	
	.dj-pic>span:nth-of-type(2){position: absolute;top:15px;right:80px;width:30px ;height: 30px;border-radius:50% ;background: yellow;text-align: center;line-height: 30px;color: white;}
	.dj-xinxi{display: flex;flex-direction: column;justify-content: center;margin-top: -20px;}
	.start1{width: 70px;height: 10px;background: url('/static/start.png') no-repeat;position: relative;top: 0;bottom: 0;left: 0;right: 0;margin: auto;}
	.dianname{text-align: center;font-size:16px ;font-weight: 900;line-height: 20px;margin-top: 10px;}
	.diantg{text-align: center;font-size:14px ;line-height: 20px;color: #666677;margin-top: 5px;}
	.diandz{font-size:12px ;line-height: 20px;color: #666677;display: flex;justify-content: center;}
	.diandz>span{color: yellow;}
	.diandz>p{width: 200px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
	.diansj{display: flex;justify-content: center;margin-top: 10px;margin-bottom:10px ;}
	.diansj>div{padding: 0 20px;display:flex;flex-direction:column;justify-content: center;}
	.diansj>div>strong{display: block;width: 100%;text-align: center;color: orange;}
	.diansj>div>p{font-size: 12px;color: #999;}
	.diansj>div>p>span{font-size: 12px;color: red;}
	.s-nav{display: flex;padding: 10px;justify-content: center;margin-top: 30px;}
	.s-nav>p{width: 33.3%;height: 45px;background: orangered;color: white;line-height: 45px;text-align: center;position: relative;}
	.s-nav>p:nth-of-type(1){border-top-left-radius:20px ;border-bottom-left-radius:5px ;}
	.s-nav>p:nth-of-type(3){border-top-right-radius:20px ;border-bottom-right-radius:5px ;}
	.s-nav>p>span{color: #C0C0C0;position: absolute;right: 0;top: 0;bottom: 0;margin: auto 0;}
	.s-nav>.xzshi{background: orange;}
	.s-nav>.xzshi>span{display: none;}
	.s-main{display: flex;flex-direction: column;justify-content: center;align-items: center;}
	.sm-yhq{display: flex;width: 90%;background: white;margin-bottom: 10px;height: 80px;}
	.sm-yhq>div{width: 85%;box-shadow:#C0C0C0 -5px 1px 5px 1px;padding: 5px 8px;border-radius: 5px;}
	.yhq-js{width: 100%;border: 1px solid orange;border-radius:5px ;display: flex;height: 70px;}
	.yhq-js>div:nth-of-type(1){width: 70%;font-size: 12px;padding:5px;}
	.yhq-js>div:nth-of-type(1)>h3{font-weight: 900;line-height: 20px;font-size: 14px;}
	.yhq-js>div:nth-of-type(1)>p{line-height: 20px;}
	.yhq-js>div:nth-of-type(1)>p:nth-of-type(1){line-height: 20px;width: 120px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
	.yhq-js>div:nth-of-type(1)>p:nth-of-type(2)>strong{font-weight: 900;margin-right: 5px;}
	.yhq-js>div:nth-of-type(2){width: 30%;border-left: 1px dashed #ccc;position: relative;}
	.yhq-js>div:nth-of-type(2)>img{position: absolute;top: 0;bottom: 0;right: 0;left: 0;margin: auto;}
	.lingq{width:15%;background: #ffdc14;border-radius:5px ;font-size: 18px;color: white;position: relative;text-align: center;line-height: 24px;letter-spacing:3px;box-shadow:#C0C0C0 -2px 1px 5px 1px;}
	.lingq span{display: block;position: absolute;width: 45px;height: 50px;top: 0;bottom: 0;left: 0;right: 0;margin: auto;}
	</style>
  
  