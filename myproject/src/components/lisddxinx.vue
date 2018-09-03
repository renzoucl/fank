<template>
    <div id="ddxinxi">
        <header>
	      <div><p @click="todian()"><span class="iconfont icon-203"></span></p></div>
	      <div>{{str}}</div>
	      <div><!--<p><span class="iconfont icon-sousuo"></span></p>--></div>  
	    </header>  
	    <div class="snav">
        	<div >
        		<span></span>
        		<router-link to="/ddxinxi"  tag='p'><span class="iconfont icon-qicheqianlian-"></span><strong>订单信息</strong></router-link>
        		<span></span>
        	</div>
        	<div class="ddxx">
        		<span></span>
        		<router-link to="/lisddxinx"  tag='p'><span class="iconfont icon-icon"></span><strong>历史订单</strong></router-link>
        		
        		<span></span>
        			
        	</div>
        </div>

        <section>
        	<div class="lsdd">
        		<div class="lsdd-pic">
        			<img src="static/niurou.png" />
        		</div>
        		<div class="lsdd-xx">
        			<div>
        				<h3>五味粉丝蒸牛肉</h3>
        				<p>2018.08.28</p>
        			</div>
        			<p>-￥8：00</p>
        		</div>
        	</div>
        	
        	
        	<div class="lsdd">
        		<div class="lsdd-pic">
        			<img src="static/niurou.png" />
        		</div>
        		<div class="lsdd-xx">
        			<div>
        				<h3>五味粉丝蒸牛肉</h3>
        				<p>2018.08.28</p>
        			</div>
        			<p>-￥8：00</p>
        		</div>
        	</div>
        	
        	
        	<div class="lsdd">
        		<div class="lsdd-pic">
        			<img src="static/niurou.png" />
        		</div>
        		<div class="lsdd-xx">
        			<div>
        				<h3>五味粉丝蒸牛肉五味粉丝蒸牛肉</h3>
        				<p>2018.08.28</p>
        			</div>
        			<p>-￥8：00</p>
        		</div>
        	</div>
	    </section>
	  
    </div>
  </template>
  
  <script>
  

  export default {
    name: 'Lisddxinx',
    data(){
      return {
        str:"订单信息",
        
      }
    },
    methods:{
	    getdata(msg){
	      this.tit=msg
			},
		todian(){
		   console.log("aaa")
		   this.$router.push("/dian")
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
	
	.snav{display: flex;justify-content: space-around;padding-top: 10px;}
	.snav>div{width: 45%;height: 40px;background: #ff6714;text-align: center;line-height: 40px;border-radius:5px ;font-size: 16px;color: white;display: flex;align-items: center;justify-content: space-around;}
	.snav>div>span{display: block;width: 5px;height: 5px;border-radius: 50%;background: white;}
	.snav>div>p>span{display:inline-block;margin-right: 10px;width: 26px;height: 26px;text-align: center;line-height: 26px;background: white;color: red;border-radius: 50%;}
	.snav>div>p>strong{color: #000000;}
	.snav>.ddxx{background: orange;}
	section{flex: 1;overflow: auto;padding: 0 10px;margin-top: 20px;}
	.lsdd{display: flex;width: 100%;height: 80px;border-radius:10px ;box-shadow: #C0C0C0 1px 2px 5px 2px;margin-bottom: 20px;} 
	.lsdd-pic{width: 20%;height: 100%;position: relative;}
	.lsdd-pic>img{position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin: auto;}
	.lsdd-xx{width: 80%;height: 100%;display: flex;}
	.lsdd-xx>div{width: 70%;padding: 0 10px;}
	.lsdd-xx>div>h3{font-size: 18px;font-weight: 900;line-height: 40px;width: 160px;white-space: nowrap;overflow: auto;text-overflow: ellipsis;}
	.lsdd-xx>div>p{font-size: 16px;line-height: 30px;}
	.lsdd-xx>p{width: 30%;line-height: 80px;color: red;}
	</style>
  
  