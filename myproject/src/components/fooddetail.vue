<template>
	<div id="fooddetail">
			<header>
					<div class="left">
							<span class="iconfont icon-arrow_left_f"></span>
					</div>
					<div class="middle">我的银行卡</div>
					<div class="right">
							
					</div>
		  </header>
		<!--菜品详情的轮播-->
		<mt-swipe :auto="4000"  id="lunbo" style="box-shadow: 0px 5px 10px #888888;margin-top: 45px">
            <mt-swipe-item class="img"><img src="static/meat.png" alt="">
	            <h4><b>黑胡椒秘制酱两吃炸鸡腿</b></h4>
	            <p><b>BLACK PEPPER SECRET SAUCE TWO FRIED CHICKENS</b></p>
	            <p class="xiang">本店独家配方，全新口味，将鸡腿的美味与秘制酱完美结合，喷香扑鼻，吃了还想吃</p>
            </mt-swipe-item>
            <mt-swipe-item class="img"><img src="static/cake.png" alt="">
            	<h4><b>奶油草莓翻糖蛋糕</b></h4>
	            <p><b>CREAM STRAWBERRY CANDY CAKE</b></p>
	            <p class="xiang">新鲜的草莓搭配进口植物奶油，好吃不油腻，减肥爱美的女孩儿不要错过</p>
            </mt-swipe-item>
            <mt-swipe-item class="img"><img src="static/food1.jpg" alt="">
	            <h4><b>海鲜味增汤</b></h4>
	            <p><b>SEAFOOD MISO SOUP</b></p>
	            <p class="xiang">特聘日料大师小田切让研制适合中国食客口味的改良版味增汤，强烈推荐你试一试</p>
            </mt-swipe-item>
          </mt-swipe>
          
          
          <h3>
          	<span class="iconfont icon-shipin"></span>
          	<b>菜品测评</b>
          	<i>—FOOD TEST—</i>
          </h3>
          <div id="test">
          	  <div class="pj">鸡肉好吃</div>
              <div class="pj">店家服务态度好 </div>
              <div class="pj">送餐速度快  </div>
              <div class="pj"> 口味独特 </div>
              <!--<div class="pj">就餐环境好</div>
              <div class="pj"> 还会再来</div>-->
          </div>
             <!--底部的导航--> 
             <ul>
             	<li>
             		<p>购物车</p>
             		<p>SHOPPING CAR</p>
             	</li>
             	<li>
             		<p>立即点菜</p>
             		<p>ORDER NOW</p>
             	</li>
             	<li>

             		<button class="jia" @click="add()">+</button>
             		
             		<span id="cai">
						 <!-- {{this.$store.state.count}} -->
						
					</span>
             		
             		<button class="jian" @click="min()">—</button>
             		
             			
             		
             	</li>
             </ul>
                             
	</div>
</template>

<script>
	import $ from 'jquery'
	
	import {mapGetters,mapActions} from 'vuex';
	
	
	
	
	export default{
		name:'Fooddetail',
		data(){
			return{
				str:'菜品详情',
				msg:''
				
			}
		},
		mounted(){
            this.$emit("toparent",this.str)
        },
        // computed:mapGetters([]),
		// methods:{
		// 	...mapActions(['add','min'])
			
		// }
            
        
			
		
	}
</script>

<style scoped=''>
	header{height: 45px;width: 100%;background: #222222;display: flex;justify-content: space-between;position: fixed;top: 0;left: 0;z-index: 9999}
      header .left{width: 10%;height: 45px;text-align: center;line-height: 45px}
      header .middle{width: 60%;height: 45px;text-align: center;line-height: 45px;font-weight: bold;color: #fff}
      header .right{width: 10%;height: 45px;text-align: center;line-height: 45px}
      header .left span{font-size: 26px;color: #fce452}
      header .right span{font-size: 20px;color: #fce452}
	body{color: #222;}
	*{margin: 0;padding: 0;font-family: "微软雅黑"}
      #home{padding:0 8px}
      
      /*   顶部轮播图     */
      #lunbo{
      	margin: 0 auto;
      	margin-top: 10px;
      	width: 263px;
         height: 365px;
         border-radius: 5px;
         padding:5px 0
      }
      #lunbo img{height: 260px;width: 100%;}
      #lunbo p{
      	font-size: 12px;
      }
      .xiang{margin-top: 6px;}
      
      /*      菜品测试           */
      h3{margin-top: 20px;}
      .icon-shipin{
      	color:#fee97e;
      }
      i{display: block;font-weight: 900;}
      #test{
      	width:50%;
      	height:70px;
      	display: flex;
      	flex-wrap: wrap;
      	justify-content: space-around;
      	margin: 0 auto;
      }
      .pj{
      	border-radius: 20px;
      	padding:3px 5px;
      	height: 20px;
      	border:1px pink solid;
      	color: #fade19;
      	text-align: center;
      	font-size: 12px;
      	line-height: 20px;
     
      }
      
      /*       底部导航                      */
     /* ul{margin-left: 8px;position: absolute;bottom: 0;right: 0;width: 100%} */
     li{
     	height:42px;
     	float: left;
     	text-align: center;
     	padding: 0 12px;
     	background: #ff6714;
     	/* border-radius: ; */
     	}
		 li p{color: #fff;}
     	li:first-child{
     		border-radius:20px 0 0 0;
     	}
     	li:nth-child(3){
     		border-radius:0 20px 0 0 ;     		
     	}
     	li:hover{background: #ffdc14;}
     #cai{display:inline;margin:10px 5px 0 5px;float: left;}

       .jia{
      	float: left;
      	width:22px;
      	height: 22px;
      	background: #fbe11a;
      	border: 0;
      	margin-top: 12px;
      	border-radius: 50px;
      	font-size: 22px;
      	line-height: 22px;
      	color: white;
      	
      }
       .jian{
      	float: right;
      	margin-top: 12px;       	
      	width:22px;
      	height: 22px;
      	background: #fbe11a;
      	border: 0;
      	border-radius: 50%;
      	font-size: 15px;
      	line-height: 22px;
      	color: white;
      }
</style>