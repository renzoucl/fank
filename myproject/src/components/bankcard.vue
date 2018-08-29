<template>
	<div id="bankcard">

			<header>
					<div class="left">
							<span class="iconfont icon-arrow_left_f"></span>
					</div>
					<div class="middle">我的银行卡</div>
					<div class="right">
							
					</div>
		</header>
		<!--银行卡顶部轮播-->
		 <mt-swipe :auto="4000"  id="lunbo" style="box-shadow: 0px 5px 10px #888888;height:260px;background:white;margin-top: 45px">
            <mt-swipe-item class="img"><img src="static/goldcd.png" alt="">
            <p style="text-align: center;">请选择您支付所用的银行卡</p>
            <p>PLEASE SELECT THE CARD YOU USED TO PAY</p>
            </mt-swipe-item>
            <mt-swipe-item class="img"><img src="static/nocd.png" alt="">
            <p style="text-align: center;">请选择您支付所用的银行卡</p>
            <p>PLEASE SELECT THE CARD YOU USED TO PAY</p>
            </mt-swipe-item>
            <mt-swipe-item class="img"><img src="static/gscard.png" alt="">
            <p style="text-align: center;">请选择您支付所用的银行卡</p>
            <p>PLEASE SELECT THE CARD YOU USED TO PAY</p>
            </mt-swipe-item>
          </mt-swipe>
		       <button class="pay">立即支付 </button>
		    <div id="ka">
		    	<div class="cd cd1">
		      	<img src="../../static/jianshe.png"/>		    		
		    		<button class="jian">—</button>
		    	</div> 	
		      <div class="cd cd2">
		      	<img src="../../static/ny.png"/>		      	
		      	<button class="jian">—</button>
		      </div> 	
		      <div class="cd cd3">
		      	<img src="../../static/gs.png"/>		      	
		      	<button class="jian">—</button>
		      </div> 
		      
		      <div class="cd cd4">
		      	
		      	<img src="../../static/yz.png"/>
		      	<button class="jia">+</button>
		      	
		      </div> 	
		      <div class="cd cd5">
		      	
		      	<img src="../../static/zs.png"/>		      	
		      	<button class="jia">+</button>
		      	
		      </div> 	
		      	
		      <div class="cd cd6">
		      	
		      	<img src="../../static/zg.png"/>
		      	<button class="jia">+</button>
		      	
		      </div> 	
		      	
		      	
		      <!--<div class="cd cd7">
		      	
		      	<img src="../../static/yz.png"/>
		      	<button class="jia">+</button>
		      	
		      </div> 	
		      <div class="cd cd8">
		      	
		      	<img src="../../static/jt.png"/>		      	
		      	<button class="jia">+</button>
		      	
		      </div> 	-->
		    </div>   
		      
		      
	</div>
</template>

<script>
	export default{
		name:'Bankcard',
		data(){
			return{
				str:'我的银行卡',
				msg:''
				
			}
		},
		mounted(){
            this.$emit("toparent",this.str)
            
            
          
			
		}
	}
</script>

<style scoped=''> 
	 *{margin: 0;padding: 0;font-family: "微软雅黑"}
	 header{height: 45px;width: 100%;background: #222222;display: flex;justify-content: space-between;position: fixed;top: 0;left: 0;z-index: 9999}
      header .left{width: 10%;height: 45px;text-align: center;line-height: 45px}
      header .middle{width: 60%;height: 45px;text-align: center;line-height: 45px;font-weight: bold;color: #fff}
      header .right{width: 10%;height: 45px;text-align: center;line-height: 45px}
      header .left span{font-size: 26px;color: #fce452}
      header .right span{font-size: 20px;color: #fce452}


      #bankcard{padding:0 8px;}
      #lunbo{
         height: 150px;
         border-radius: 10px;
         padding:5px 0
      }
      #lunbo img{height: 200px;width: 100%;}
      p{text-align: center;}
      .pay{
      	border: 0;
      	background-color:#fec23e;
      	width:125px;
      	height: 43px;
      	color: white;
      	font-size: 16px;
      	line-height: 43px;
        text-align: center;
      	border-radius: 10px;
      	box-shadow: 2px 2px 3px #de7c00;
      	margin-top: 25px;
      	margin-bottom: 5px;
      	margin-left:125px;
      }
      .btn{
      	float: right;
      	font-size: 12px;
      	padding-top: 0;
      	margin-top: 0;
      }
      #ka{
      	display: flex;
      	flex-wrap: wrap;
      	margin-top: 20px;
      	margin-left:8px;
      	
      }
      .cd{
      	width:160px;
      	height: 50px;
      	border: 2px #f3f3f3 solid;
      	border-radius: 10px;
      	margin:3px;
      	
      }
      .jia{
      	float: right;
      	width:22px;
      	height: 22px;
      	background: #fbe11a;
      	border: 0;
      	margin-top: 15px;
      	border-radius: 50px;
      	font-size: 22px;
      	line-height: 22px;
      	color: white;
      	
      }
       .jian{
      	float: right;
      	margin-top: 15px;       	
      	width:22px;
      	height: 22px;
      	background: #f1f1f1;
      	border: 0;
      	border-radius: 50%;
      	font-size: 15px;
      	line-height: 22px;

      }
      img{
      	width:135px;height:50px;float: left;
      }
      .cd4{
      	/*background: url(../../static/yz.png) no-repeat center/cover;*/
      }
</style>