<template>
    <div id="ddxinxi">
        <header>
	      <div><p @click="tomine()"><span class="iconfont icon-203"></span></p></div>
	      <div>{{str}}</div>
	      <div><!--<p><span class="iconfont icon-sousuo"></span></p>--></div>  
	    </header>  
	    <div class="snav">
        	<div class="ddxx">
        		<span></span>
        		<router-link to="/ddxinxi"  tag='p'><span class="iconfont icon-qicheqianlian-"></span><strong>订单信息</strong></router-link>
        		
        		<span></span>
        	</div>
        	<div >
        		<span></span>
        		<router-link to="/lisddxinx"  tag='p'><span  class="iconfont icon-icon"></span><strong>历史订单</strong></router-link>
        		<span></span>
        			
        	</div>
        </div>

        <section>
        	<div class="sm-dd">
        		<div class="dd-header">
        			<div>
        				<span class="iconfont icon-shouye1"></span>
        				<p>唐津牛排</p>
        				<span class="iconfont icon-houtuimian"></span>
        			</div>
        			<p>派送中</p>
        		</div>
        		<div class="dd-xiangq">
        			<div class="xqimg">
        				<img src="static/xj.png"/>
        			</div>
        			<div class="xqxinx">
        				<div>
        					<div class="xqxinx-js">
        						<h3>香煎牛排</h3>
        						<p>￥20元</p>
        						<p><strong>订单时间</strong><span>2018.08.28</span></p>
        					</div>
        					<div class="xqshul">
        						<span class="iconfont icon-jia"></span>
        						<p>22</p>
        						<span class="iconfont icon-jian1"></span>
        					</div>
        					
        				</div>
        				<div class="dd-status">
        					<span>已支付</span>
        					<span>取消订单</span>
        					<span>催菜</span>
        					<span class="iconfont icon-shanchu"></span>
        				</div>
        			</div>
        			
        		</div>
        	</div>
	    	
	    	<div class="sm-dd">
        		<div class="dd-header">
        			<div>
        				<span class="iconfont icon-shouye1"></span>
        				<p>唐津牛排</p>
        				<span class="iconfont icon-houtuimian"></span>
        			</div>
        			<p>派送中</p>
        		</div>
        		<div class="dd-xiangq">
        			<div class="xqimg">
        				<img src="static/xj.png"/>
        			</div>
        			<div class="xqxinx">
        				<div>
        					<div class="xqxinx-js">
        						<h3>香煎牛排香煎牛排香煎牛排</h3>
        						<p>￥20元</p>
        						<p><strong>订单时间</strong><span>2018.08.28</span></p>
        					</div>
        					<div class="xqshul" >
        						<span :style="{background: colorA}" class="iconfont icon-jia" @click="jia($event,1)" ></span>
        						<p id="1">1</p>
        						<span :style="{background: colorA}" class="iconfont icon-jian1" @click="jian($event,1)" ></span>
        					</div>
        					
        				</div>
        				<div class="dd-status">
        					<span :style="{background: colorA}" @click='tap()'>支付订单</span>
        					<span v-show='false'>取消订单</span>
        					<span v-show='false'>催菜</span>
        					<span class="iconfont icon-shanchu"></span>
        				</div>
        			</div>
        			
        		</div>
        	</div>
        	
        	
        	<div class="sm-dd">
        		<div class="dd-header">
        			<div>
        				<span class="iconfont icon-shouye1"></span>
        				<p>唐津牛排</p>
        				<span class="iconfont icon-houtuimian"></span>
        			</div>
        			<p>派送中</p>
        		</div>
        		<div class="dd-xiangq">
        			<div class="xqimg">
        				<img src="static/xj.png"/>
        			</div>
        			<div class="xqxinx" ref='2'>
        				<div>
        					<div class="xqxinx-js">
        						<h3>香煎牛排香煎牛排香煎牛排</h3>
        						<p>￥20元</p>
        						<p><strong>订单时间</strong><span>2018.08.28</span></p>
        					</div>
        					<div class="xqshul" >
        						<span :style="{background: colorA}" class="iconfont icon-jia" @click="jia($event,2)"></span>
        						<p id='2'>1</p>
        						<span :style="{background: colorA}" class="iconfont icon-jian1" @click="jian($event,2)"></span>
        					</div>
        					
        				</div>
        				<div class="dd-status">
        					<span :style="{background: colorA}" @click='tap()'>支付订单</span>
        					<span v-show='false'>取消订单</span>
        					<span v-show='false'>催菜</span>
        					<span class="iconfont icon-shanchu" @click='del1()'></span>
        				</div>
        			</div>
        			
        		</div>
        	</div>
	    </section>
	   <div class="zhif" v-show='isShow'>
	   		<div>
	   			<span @click='quxiao()' class="iconfont icon-shanchu3"></span>
	   			<h3>请输入密码</h3>
	   			<p>
	   				<input type="text" value="1" />
	   				<input type="text" value="2" />
	   				<input type="text" value="3" />
	   				<input type="text" value="4" />
	   				<input type="text" value="5" />
	   				<input type="text" value="6" />
	   			</p>
	   			<button class="btn-sure" @click="btn_sure()">确定</button>
	   			<button class="btn-qx" @click="btn_qx()">取消</button>
	   			
	   		</div>
	   	
	   </div>
    </div>
  </template>
  
  <script>
  

  export default {
    name: 'Ddxinxi',
    data(){
      return {
        str:"订单信息",
        colorA:'yellow',
        isShow:false,
      }
    },
    methods:{
	    getdata(msg){
	      this.tit=msg
	    },
	    tap(){
	    	this.isShow=true
	    },
	    quxiao(){
	    	this.isShow=false
	    },
	   btn_sure(){
	   	this.isShow=false
	   },
	    btn_qx(){
	   	this.isShow=false
	   },
	   tomine(){
//		   console.log("aaa")
		   this.$router.push("/mine")
	   },
	   jia(e,a){
//	   		console.log(e.target)
//	   		console.log(a)
	   		var oP=document.querySelectorAll(".xqshul p")
	   		for(let i=0;i<oP.length;i++){
//	   			console.log(oP[i].getAttribute("id"))
	   			if(oP[i].getAttribute("id")==a){
//	   				console.log(oP[i])
	   				oP[i].innerHTML++
	   			}
	   		}
	   },
	   jian(e,a){
	   		var oP=document.querySelectorAll(".xqshul p")
	   		for(let i=0;i<oP.length;i++){
	   			if(oP[i].getAttribute("id")==a){
	   				oP[i].innerHTML--
	   				if(oP[i].innerHTML<=1){
	   					oP[i].innerHTML=1
	   				}
	   			}
	   		}
	   }
	  },
    mounted() {
      this.$emit("toparent",this.str)
      
    },
        
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    	#ddxinxi {height: 100vh;display: flex;flex-direction: column;}
	header{height:45px;background:#222222;color:#fff;text-align: center;line-height: 45px;font-size:20px;display: flex;justify-content: space-between;overflow: hidden;}
	header>div{height:45px;width: 100px;}
	header>div:nth-of-type(1){text-align: left;padding-left: 5px;font-size: 16px;display: flex;align-items: center;text-align: center;line-height: 28px;}
	
	header>div:nth-of-type(1) p{width: 28px;height: 28px;background: #fddb13;border-radius: 50%;margin-left: 5px;text-align: center;line-height: 28px;}
	header>div:nth-of-type(1) span{font-size: 22px;color: #fff;display: block;}
	
	header>div:nth-of-type(3){text-align: right;padding-right: 5px;display: flex;align-items: center;justify-content: flex-end;text-align: center;line-height: 28px;}
	header>div:nth-of-type(3) span{font-size: 22px;color: #fff}
	header>div:nth-of-type(3) p{width: 28px;height: 28px;background: #fddb13;border-radius: 50%;margin-right: 5px}
	section{flex: 1;overflow: auto;padding: 0 10px;margin-top: 20px;}
	.snav{display: flex;justify-content: space-around;padding-top: 10px;}
	.snav>div{width: 45%;height: 40px;background: #ff6714;text-align: center;line-height: 40px;border-radius:5px ;font-size: 16px;color: white;display: flex;align-items: center;justify-content: space-around;}
	.snav>div>span{display: block;width: 5px;height: 5px;border-radius: 50%;background: white;}
	.snav>div>p>span{display:inline-block;margin-right: 10px;width: 26px;height: 26px;text-align: center;line-height: 26px;background: white;color: red;border-radius: 50%;}
	.snav>div>p>strong{color: #000000;}
	.snav>.ddxx{background: orange;}
	.sm-dd{margin-bottom: 20px;}
	.dd-header{display: flex;justify-content: space-between;height: 20px;background: white;box-shadow: #F0F0F0 -1px -1px 5px 2px;border-radius: 5px;padding: 10px;font-size: 16px;border-bottom:1px dashed #F0F0F0 ;}
	.dd-header>div{display: flex;}
	.dd-header>div>span{margin-right:10px ;color: orange;}
	.dd-header>div>p{margin-right:10px ;font-weight: 900;}
	.dd-header>p{color:#ff6714 ;}
	.dd-xiangq{display: flex;height: 100px;background: white;box-shadow: #C0C0C0 1px 2px 5px 2px;border-radius: 5px;}
	.xqimg{width: 30%;position: relative;}
	.xqimg>img{width: 65px;height: 65px;position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;}
	.xqxinx{display: flex;flex-direction: column;width: 70%;}
	.xqxinx>div:nth-of-type(1){display: flex;justify-content: space-between;}
	.xqxinx-js{padding: 5px;font-size: 12px;}
	.xqxinx-js>h3{font-size: 14px;font-weight: 900;line-height: 20px;width: 100px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
	.xqxinx-js>p:nth-of-type(1){color: orange;line-height: 20px;font-size: 14px;}
	.xqxinx-js>p:nth-of-type(2)>strong{margin-right: 5px;line-height: 20px;}
	.xqxinx>div:nth-of-type(1)>.xqshul{display: flex;align-items: center;}
	.xqxinx>div:nth-of-type(1)>.xqshul>span{width: 30px;height: 30px;border-radius: 50%;background: #E0DDD3;text-align: center;line-height: 30px;color: white;font-size: 30px;}
	.xqxinx>div:nth-of-type(1)>.xqshul>p{margin: 0 5px;}
	.dd-status{padding-left:5px ;position: relative;}
	.dd-status>span{display: inline-block;border-radius: 2px;font-size: 12px;margin-right: 5px;padding: 5px;}
	.dd-status>span:nth-of-type(1){background: #f0f0f0;}
	.dd-status>span:nth-of-type(2){background: yellow;}
	.dd-status>span:nth-of-type(3){background: #ff6714;}
	.dd-status>span:nth-of-type(4){background: yellow;border-top-left-radius: 35px;position: absolute;right: -5px;bottom:-5px;color: white;}
	.zhif{background: rgba(0,0,0,0.2);height: 100%;position: absolute;width: 100%;}
	.zhif>div{width: 260px;height: 130px;background:white;position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;border-radius:10px ;}
	.zhif>div>span{display: block;width: 30px;height: 30px;font-size: 22px;text-align: center;line-height: 30px; border-radius: 50%;background: yellow;color: white;position: absolute;top: -15px;right: -15px;}
	.zhif>div>h3{color: orange;text-align: center;line-height: 30px;font-size: 20px;margin: 10px 0;}
	.zhif>div>p{display: flex;justify-content: space-around;}
	.zhif>div>p>input{width: 30px;height: 30px;border-radius: 50%;text-align: center;}
	.btn-sure{padding: 10px 20px;background: yellow;border-radius:10px ;font-size: 16px;position: absolute;left: 40px;bottom: -20px;outline: none;}
	.btn-qx{padding: 10px 20px;background: orange;border-radius:10px ;font-size: 16px;position: absolute;right: 40px;bottom: -20px;outline: none;}
	</style>
  
  