<template>
    <div id="xican">
        <header>
	      <div><p><span class="iconfont icon-203"></span></p></div>
	      <div>{{str}}</div>
	      <div><p><span class="iconfont icon-sousuo"></span></p></div>  
	    </header>  
	    <div id="nav" @click="tap()">
	      	<div class="xuanzhong" >
	      		<span class="iconfont icon-jiangbei" style="color: orange;"></span>
	      		<strong style="color: orange;">综合排序</strong>
	      	</div>

	       <div >
	      	    <span class="iconfont icon-qicheqianlian-"></span>
	      	    <strong>月单排序</strong>
	       </div>
	      	<div>
	      		<span class="iconfont icon-xinxi"></span>
	      		<strong>热评排序</strong>
	      	</div>
	    </div>
        <section class="content1">
	        <div>
		      	<div class="list" style="display: block;">
			      	<div >
			      		<div class="list-left"><img src="static/xc.png"/><span></span></div>
			      		<div class="list-right">
			      			<div ><h3>阳光点咖啡店 </h3><span class="iconfont icon-xin"></span><strong>562</strong></div>
			      			
			      			<p>阳光点咖啡店是一家主营咖啡饮品的店铺，同时还有各种甜点供大家选择食用哦！</p>
			      			<div><span>品类多</span><span>安静</span><span>环境好</span></div>
			      			<div>
			      				<p><span class="iconfont icon-dizhi1"></span><strong>京广路京广路京广路京广路京广路京广路京广路京广路京广路京广路</strong></p>
			      				<div><p><span class="iconfont icon-qicheqianlian-"></span><strong>2100</strong></p>
			      				<p><span class="iconfont icon-xinxi"></span><strong>997</strong></p>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
			    </div>
			    
			    <div class="list" style="display: block;">
			      	<div >
			      		<div class="list-left"><img src="static/xc.png"/><span></span></div>
			      		<div class="list-right">
			      			<div ><h3>阳光点咖啡店 </h3><span class="iconfont icon-xin"></span><strong>562</strong></div>
			      			
			      			<p>阳光点咖啡店是一家主营咖啡饮品的店铺，同时还有各种甜点供大家选择食用哦！</p>
			      			<div><span>品类多</span><span>安静</span><span>环境好</span></div>
			      			<div>
			      				<p><span class="iconfont icon-dizhi1"></span><strong>京广路京广路京广路京广路京广路京广路京广路京广路京广路京广路</strong></p>
			      				<div><p><span class="iconfont icon-qicheqianlian-"></span><strong>2100</strong></p>
			      				<p><span class="iconfont icon-xinxi"></span><strong>997</strong></p>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
			    </div>
			    
			    
	        </div>
	      
	      	<div style="display: none;">
		      	<div class="list" style="display: block;">
			      	<div >
			      		<div class="list-left"><img src="static/xia.png"/><span></span></div>
			      		<div class="list-right">
			      			<div ><h3>阳光点咖啡店 </h3><span class="iconfont icon-xin"></span><strong>700</strong></div>
			      			
			      			<p>阳光点咖啡店是一家主营咖啡饮品的店铺，同时还有各种甜点供大家选择食用哦！</p>
			      			<div><span>品类多</span><span>安静</span><span>环境好</span></div>
			      			<div>
			      				<p><span class="iconfont icon-dizhi1"></span><strong>京广路京广路京广路京广路京广路京广路京广路京广路京广路京广路</strong></p>
			      				<div><p><span class="iconfont icon-qicheqianlian-"></span><strong>2100</strong></p>
			      				<p><span class="iconfont icon-xinxi"></span><strong>997</strong></p>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
			    </div>
	        </div>
	        
	        <div style="display: none;">
		      	<div class="list" style="display: block;">
			      	<div >
			      		<div class="list-left"><img src="static/xc.png"/><span></span></div>
			      		<div class="list-right">
			      			<div ><h3>阳光点咖啡店 </h3><span class="iconfont icon-xin"></span><strong>900</strong></div>
			      			
			      			<p>阳光点咖啡店是一家主营咖啡饮品的店铺，同时还有各种甜点供大家选择食用哦！</p>
			      			<div><span>品类多</span><span>安静</span><span>环境好</span></div>
			      			<div>
			      				<p><span class="iconfont icon-dizhi1"></span><strong>京广路京广路京广路京广路京广路京广路京广路京广路京广路京广路</strong></p>
			      				<div><p><span class="iconfont icon-qicheqianlian-"></span><strong>2100</strong></p>
			      				<p><span class="iconfont icon-xinxi"></span><strong>997</strong></p>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
			    </div>
	        </div>
	      
	     
	    </section>
    </div>
  </template>
  
  <script>
  import jquery from "jquery"

  export default {
    name: 'Xican',
    data(){
      return {
        str:"西餐",
      }
    },
    methods:{
	   tap(){
         
          $("#nav>div").on("click",function(){
           $("#nav span").css({"color":"red"})
           $("#nav strong").css({"color":""})
            var index = $(this).index();
            $(this).find("span").css({"color":"orange"})
             $(this).find("strong").css({"color":"orange"})
            $(".content1>div").eq(index).show().siblings().hide()   
          })
       }
	  },
    mounted() {
      this.$emit("toparent",this.str)
      
    },
        
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    	#xican {height: 100vh;display: flex;flex-direction: column;}
	header{height:45px;background:#222222;color:#fff;text-align: center;line-height: 45px;font-size:20px;display: flex;justify-content: space-between;overflow: hidden;}
	header>div{height:45px;width: 100px;}
	header>div:nth-of-type(1){text-align: left;padding-left: 5px;font-size: 16px;display: flex;align-items: center;text-align: center;line-height: 28px;}
	
	header>div:nth-of-type(1) p{width: 28px;height: 28px;background: #fddb13;border-radius: 50%;margin-left: 5px;text-align: center;line-height: 28px;}
	header>div:nth-of-type(1) span{font-size: 22px;color: #fff;display: block;}
	
	header>div:nth-of-type(3){text-align: right;padding-right: 5px;display: flex;align-items: center;justify-content: flex-end;text-align: center;line-height: 28px;}
	header>div:nth-of-type(3) span{font-size: 22px;color: #fff}
	header>div:nth-of-type(3) p{width: 28px;height: 28px;background: #fddb13;border-radius: 50%;margin-right: 5px}
	#nav{display: flex;justify-content: space-around;padding: 0 5px;}
	/*#nav .xuanzhong{color: orange;}
	#nav .xuanzhong>span{color: orange;}*/
	#nav>div{width: 33.3%;height: 38px;text-align: center;border: 1px solid #CCCCCC;line-height:38px ;color: #000000;}
	#nav>div>span{color: red;margin-right: 5px;font-size: 18px;}
  #nav>div>strong{font-size: 18px;}
	section{flex: 1;overflow: auto;padding: 0 5px;}
	
    .router-link-active>div{color: orange}
    .router-link-active>div>span{color: orange}
     .list{height: 76px;border: 1px solid #C2C2C2;border-radius: 10px;padding-right: 5px;margin-top: 20px;}
     .list>div{height: 86px;border: 1px solid #C2C2C2;border-radius: 10px;margin-top: -5px;background: #fff;padding-left:4px ;display: flex;}
    .list-left{width:80px ;height: 80px;}
    .list-left>img{width:80px ;height: 80px;vertical-align: middle;}
    .list-left>span{height: 100%;vertical-align: middle;}
    .list-right{padding-left:8px;}
    .list-right>div{padding: 2px 0;font-size: 14px;}
    .list-right>div:nth-of-type(1)>h3{font-size: 14px;font-weight: 900;float: left;margin-right: 10px;}
    .list-right>div:nth-of-type(1)>span{color: red;font-size: 12px;margin-right: 5px}
    .list-right>p{line-height: 12px;width:40% ;white-space:nowrap;overflow: hidden;text-overflow: ellipsis;font-size: 12px;}
      .list-right>div:nth-of-type(2){line-height: 12px;font-size: 12px;margin-top: 5px;}
    .list-right>div:nth-of-type(2)>span{
      	display: inline-block;height: 12px;padding: 0 5px;border: 1px solid orange;margin-right:5px ;border-radius: 12px;color: orange;}
    .list-right>div:nth-of-type(3){
      		display: flex;font-size: 12px;width: 40%;justify-content: space-between;}
    .list-right>div:nth-of-type(3)>p>span{font-size: 16px;color: yellow;margin-right: 5px;}
 	.list-right>div:nth-of-type(3)>p>strong{display:inline-block;width: 80px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
    .list-right>div:nth-of-type(3)>div{display: flex;}
    .list-right>div:nth-of-type(3)>div>p{margin-right: 5px;}
 	.list-right>div:nth-of-type(3)>div>p>span{font-size: 14px;margin-right: 5px;}
 	.list-right>div:nth-of-type(3)>div>p:nth-of-type(1)>span{color: red;}
 	.list-right>div:nth-of-type(3)>div>p:nth-of-type(2)>span{color: blue;}
	</style>
  
  