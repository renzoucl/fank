<template>
    <div id="djpuzi">
        <header>
	      <div><p><span class="iconfont icon-203"></span></p></div>
	      <div>{{str}}</div>
	      <div><p><span class="iconfont icon-sousuo"></span></p></div>  
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
	    		<router-link to="/djpuzi_yin" class="xzshi" tag='p'>饮品</router-link>
	    		<router-link to="/djpuzi_yhq"  tag='p'>优惠卷</router-link>
	    	</div>
	    	<div class="s-main">
	    		<div class="smian-top">
	    			<div class="smt-img">
	    				<img src="static/8.jpg"/>
	    				<p></p>
	    			</div>
	    			<div class="smt-right">
	    				<h3>秘制酱香牛肉</h3>
	    				<p>传统工艺，醇香可口，值得品尝！传统工艺，醇香可口，值得品尝！</p>
	    				<p>
	    					<strong>减</strong>
	    					<span>满30减5</span>
	    					<span>满50减10</span>
	    				</p>
	    				<div class="smr-hui">
	    					
	    					<p>
	    						<strong>惠</strong>
	    						<span>感谢新老客户，五折豁出去了！</span>
	    					</p>
	    					<div class="">
	    						<p>
	    							<span class="iconfont icon-icon"></span>
	    							<strong>2084</strong>
	    						</p>
	    						<p>
	    							<span class="iconfont icon-xinxi"></span>
	    							<strong>754</strong>
	    						</p>
	    					</div>
	    					
	    				</div>
	    			</div>
	    		</div>
	    		<div class="sm-show">
	    			<div class="box">
	    				<div class="show-img">
	    					<img src="static/7.png"/>
	    				</div>
	    				<div class="show-js">
	    					<h3>香辣吓</h3>
	    					<p>香辣可口，美味至极！</p>
	    				</div>
	    			</div>
	    			<div class="box">
	    				<div class="show-img">
	    					<img src="static/8.jpg"/>
	    				</div>
	    				<div class="show-js">
	    					<h3>香辣吓</h3>
	    					<p>香辣可口，美味至极！</p>
	    				</div>
	    			</div>
	    			<div class="box">
	    				<div class="show-img">
	    					<img src="static/xia.png"/>
	    				</div>
	    				<div class="show-js">
	    					<h3>香辣吓</h3>
	    					<p>香辣可口，美味至极！</p>
	    				</div>
	    			</div>
	    			<div class="box">
	    				<div class="show-img">
	    					<img src="static/xia.png"/>
	    				</div>
	    				<div class="show-js">
	    					<h3>香辣吓</h3>
	    					<p>香辣可口，美味至极！</p>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    	
	    	
	    </section>
    </div>
  </template>
  
  <script>
  

  export default {
    name: 'Djpuzi_yin',
    data(){
      return {
        str:"店家铺子",
      }
    },
    methods:{
	    getdata(msg){
	      this.tit=msg
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
	.smian-top{padding: 10px;height: 76px;display: flex;}
	.smt-img{width: 80px;height: 76px;border: 1px solid #C0C0C0;border-top-right-radius:10px;display: flex;flex-direction: column;justify-content: center;align-items: center;}
	.smt-img>img{width: 54px;height: 54px;}
	.smt-img>p{width: 80px;height: 20px;background: url("../../static/start.png") no-repeat center top;margin-top: 3px;}
	.smt-right{height: 74px;width: 100%;border: 1px solid #C0C0C0;border-top-left-radius: 10px;padding: 2px 10px 0 10px;}
	.smt-right>h3{font-size:14px ;font-weight: 900;}
	.smt-right>p:nth-of-type(1){font-size: 12px;width: 200px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
	.smt-right>p:nth-of-type(2){font-size: 12px;}
	.smt-right>p:nth-of-type(2)>strong{display: inline-block;width: 16px;height: 16px;background: green;text-align: center;line-height: 16px;}
	.smt-right>p:nth-of-type(2)>span{margin-left: 5px;}
	.smr-hui{font-size: 12px;margin-top: 2px;display: flex;justify-content:space-between ;}
	.smr-hui>p{display: flex;align-items: center;}
	.smr-hui>p>strong{display: inline-block;width: 16px;height: 16px;background: yellow;text-align: center;line-height: 16px;}
	.smr-hui>p>span{margin-left: 5px;display: inline-block;width: 120px;height: 16px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;line-height: 16px;}
	.smr-hui>div{display: flex;}
	.smr-hui>div>p{margin-left: 5px;}
	.smr-hui>div>p>span{font-size:12px ;color: red;}
	.sm-show{display: flex;flex-wrap: wrap;width: 100%;justify-content: space-around;}
	.box{width: 45%;height: 180px;border: 1px solid #C0C0C0;margin-bottom: 10px;border-top-left-radius:5px ;border-top-right-radius:5px ;}
	.show-img{width: 100%;height: 140px;background: #ffdc14;position: relative;border-top-left-radius:5px ;border-top-right-radius:5px ;}
	.show-img>img{position: absolute;top: 0;bottom: 0;left:0 ;right: 0;margin: auto;width:85px ;height: 75px;border-radius:50% ;}
	.show-js{height: 40px;font-size: 12px;padding: 5px;}
	.show-js>h3{font-weight:900 ;font-size: 14px;}
	.show-js>p{width: 120px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
	</style>
  
  