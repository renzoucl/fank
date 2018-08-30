<template>
	<div id="fooddetail">
			<header>
					<div class="left">
						<router-link to='/dian'>
							<span class="iconfont icon-arrow_left_f"></span>								
						</router-link>
					</div>
					<div class="middle">菜品详情</div>
					<div class="right">
					<span class="iconfont icon-xin fr"></span>
							
					</div>
		  </header>
		
		<section>
			<br/><br/><br/>
			<div class="left">
					<span class="iconfont icon-dianpu" style="font-size:24px;font-weight:bold;margin-right:5px;color: #ff9900"></span>
					<span style="font-size:24px;font-weight:bold">好吃的烧烤店</span>

			</div>
			
		 <!-- <h1 style="line-height: 40px;">多人餐</h1>
		 <p class="top_tit">
		 	<span class="new">新品</span>
		 	<span>随时退</span>|<span>免预约</span>|<span>过期自动退</span>
		 	<span class="fr">半年销量889</span>
		  </p>		 -->
		 	
		 	<img :src="detail.pimg" style="margin-top: 20px;height: 200px;border-radius: 10px;padding: 0 8px;box-sizing: border-box" />
		
				<!-- <h3>其他</h3> -->
				<!--<p>{{detail}}</p>-->
			    <ul style="margin-top:20px;padding: 0 8px">
			    	<li >
			    		<span >{{detail.pname}}</span><span>（8份）</span>
			    		<b class="fr">￥24</b>
			    	</li>
			    	<li >
							<span >{{detail.pdesc}}</span><span>（8份）</span>
							<b class="fr">￥24</b>
					</li>
			    	<li >
							<span >{{detail.pid}}</span><span>（8份）</span>
							<b class="fr">￥24</b>
					</li>
			    	<li >
							<span >{{detail.pprice}}</span><span>（8份）</span>
							<b class="fr">￥24</b>
					</li>
			    	
			    </ul>
			    <div class="bot">
			    	<h1 class="fl price">
							{{detail.pprice}}
			    		<span>6折</span>
			    	   <p>门市最高价￥132</p>
			    	</h1>
			    	
			    	    <button class="buy fr">
			    	    	<router-link to='/ddxinxi'>
			    	    	立即抢购
			    	    	</router-link>
			    	    </button>
			    	
			    	
			    </div>
		</section>
                             
	</div>
</template>

<script>
    import $ from 'jquery'
	import axios from "axios"
      export default {
        name: 'Fooddetail',
        data () {
            return{
				detail:[]
			}
        },
        mounted(){
           console.log(this.$route.params.id)//接收id值
			var _this=this;
        
			axios({
				url:"http://jx.xuzhixiang.top/ap/api/detail.php",
				params:{id:_this.$route.params.id}
			})
			.then(function(data){
                _this.detail=data.data.data
                console.log(_this.detail)
			})
 
		}

      }
</script>

<style scoped=''>
	header{height: 45px;width: 100%;background: #222222;display: flex;justify-content: space-between;position: fixed;top: 0;left: 0;z-index: 9999}
      header .left{width: 10%;height: 45px;text-align: center;line-height: 45px}
      header .middle{width: 60%;height: 45px;text-align: center;line-height: 45px;font-weight: bold;color: #fff;}
      header .right{width: 10%;height: 45px;text-align: center;line-height: 45px}
      header .left span{font-size: 26px;color: #fce452}
      header .right span{font-size: 20px;color: #fce452}
	body{color: #222;}
	*{margin: 0;padding: 0;font-family: "微软雅黑"}
      #home{padding:0 8px}
      img{display:block;width: 100%}
      .icon-dianpu{color: #999999;margin-left: 10px;}
      .top_tit span{padding:0 3px; color: #999999;}
      .new{
      	width:75px;
      	height: 45px;
      	border:1px #ff9900 solid;
      	color: #ff9900;
      	margin-left: 4px;
      }
     .fr{float: right;margin-right: 10px;color: #222;font-weight: bold}
     .fl{float: left;margin-left: 10px;}
     h1,h2{font-weight: 900;margin-left: 10px;}
     h3{margin-top: 30px;font-weight: 900;margin-left: 10px;}
     ul li{line-height: 30px;margin-left: 10px;margin-top: 10px;font-weight: bold;display: flex;justify-content: space-between}
     ul li span:nth-of-type(1){display:inline-block;height:30px;width:220px;overflow:hidden;font-size: 16px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
	 ul li span:nth-of-type(2){display:inline-block;height:30px;width:70px;font-size: 16px;font-size: 16px}
     ul li b{font-weight: 100;}
     i{
     	font-style: normal;
     	border: 1px #ff9900 solid;
     	border-radius: 20px  20px  20px 5px;
     	color: #ff9900;
     	background: #fff9ed;
     	font-size: 12px;
     	padding: 3px;
     	}
     	.bot{
     		position: fixed;
     		bottom: 0;
     		width: 100%;
     		height: 90px;
			 background: #fff
     	}
     	.price{color: #ff9900;margin-top: 10px;}
     	.price span{border: 1px #ff9900 solid;padding:0 2px;font-size: 14px;margin-left: 5px;}
     	.price p{color: #999999;line-height: 40px;font-size: 15px;font-weight: 100;}
     	.buy{
     		width:130px;
     		height:50px;
     		color: white;
     		padding:5px 10px;
     		text-align: center;
     		line-height: 40px;
     		margin-top: 20px;
     		margin-left: 40px;
     		background: #ff9900;
     		border: 0;
     		font-size: 20px;
     		border-radius: 40px;
     		margin-bottom:50px;
     		}
</style>