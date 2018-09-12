<template>
	<div class="main">
		<div class="top">
			<header>
			 <span @click="tap()"  class="iconfont icon-203"></span>
		      <div>{{str}}</div>
		     <span class=" gd iconfont icon-sousuo"></span>	
			</header>
		</div>	
		<div id="detail">
			<span class="iconfont icon-ambitus"></span>
			<div id="time">
				<h4>用时</h4>
				<p>15分钟</p>
			</div>
			<div id="cail">
				<h4>食材</h4>
				<p>14种</p>
			</div>
			<div id="num">
				<h4>餐量</h4>
				<p>1人</p>
			</div>
		</div>
		<div id="author">
			<div id="author-left"><img src="static/tx.jpg"/></div>
			<div id="author-right">
				<h4><b>一城天空（作者）</b></h4>
				<p><b>简介：</b>烙馍又名单饼、薄饼，是一种特色传统面食，至今已有着2000多年的历史，类似煎饼又和煎饼不同，烙馍是用未发酵的面粉和成柔软的面团,在一块圆形中间稍微突起的铁板上烙熟的，一般管这种铁板叫做“鏊子”。</p>
			</div>
		</div>
		<div id="sc">
			<div id="sc-left"><span class="iconfont icon-203"></span></div>
			<div id="sc-right">
				<b>食材统计</b>
				<p>在一块圆形中间稍微突起的铁板上烙熟的，一般管这种铁板叫做“鏊子”，煎饼也是用的同。</p>
			</div>
		</div>
		
		<div id="zz">
			<div id="sc-left"><span class="iconfont icon-203"></span></div>
			<div id="sc-right">
				<b>制作步骤</b>
				<p>在一块圆形中间稍微突起的铁板上烙熟的，一般管这种铁板叫做“鏊子”，煎饼也是用的同。</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Zaocan",
		data:function(){
			return{
				str:"美味早餐券"
			}
		},
		methods:{
			tap(){
				this.$router.push("/taocan")
			}
		}
	}
</script>

<style scoped="">
	.main{
		width:100%;
	}
	.top{
		height:120px;
		width:100%;
		background: url(../../static/lmjc.jpg) ;
		background-position-y: -90px;
	}
	header{
		position:fixed;top:0;height:45px;width:100%;display: flex;justify-content:space-between;
	}
	header span{
		height:25px;width:25px;background: #FFDC14;border-radius: 12px;margin-top:10px;text-align: center;line-height: 25px;color:#FFFFFF;
	}
	header span:nth-child(1){
		margin-left:10px;
	}
	.gd{
		margin-right:10px;
	}
	header div{
		color:#FFFFFF;line-height: 45px;
	}
	#detail{
		height:50px;width:90%;border:2px solid #E8E6E6;border-radius: 25px;
		margin-top: -20px; margin-left:5%; background: #FFFFFF;overflow: hidden;display: flex;justify-content: space-around;
	}
	#detail span{
		font-size:20px;margin-top:10px;	
	}
	#detail div{
		margin-top:8px;height:50px;width:40px;	
	}
	#detail h4{
		font-size:16px;
	}
	#detail p{
		font-size:12px;
		color:#D5D1D1;
	}
	#author{
		height:auto;width:90%;border:2px solid #D5D1D1;border-radius: 10px;
		margin-top:20px;margin-left:5%;overflow: hidden;
	}
	#author-left{
		margin-top:10px;margin-left:10px;float: left;
	}
	#author-right{
		height:100px;width:75%;float:left;margin-left:10px;margin-top:5px;
		
	}
	#author-right p{
		font-size:12px;color:#D5D1D1;
	}
	#sc{
		height:auto;width:90%;border:2px solid #D5D1D1;border-radius: 10px;
		margin-top:20px;margin-left:5%;overflow: hidden;
	}
	#sc-left{
		margin-top:7px;margin-left:20px;float: left;
	}
	#sc-right{
		height:auto;width:80%;float: left;margin-left:10px;margin-top:5px;
		
	}
	#sc-right p{
		font-size:12px;color:#D5D1D1;
	}
	#zz{
		width:90%;height:auto;border:2px solid #D5D1D1;border-radius:10px;
		margin-top:20px;margin-left:5%;overflow: hidden;	
	}
</style>