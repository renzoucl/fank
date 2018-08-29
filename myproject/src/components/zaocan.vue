<template>
	<div class="main">
		<div class="top">
			<header>
			 <span class="iconfont icon-203"></span>
		      <div>{{str}}</div>
		     <span id="ss"  class="iconfont icon-sousuo"></span>	
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
		background: url(/static/lmjc.jpg) ;
		background-position-y: -90px;
	}
	header{
		background: none;
		/*position: fixed;
		top:0;*/
	}
	header div{
		font-weight: 600;
	}
	header span:nth-child(1){
		height:24px;width:24px;background: #FFDC14;text-align: center;line-height: 24px;
		border-radius: 12px;margin-top:10px;margin-left:10px;
	}
	#ss{
		height:24px;width:24px;background: #FFDC14;text-align: center;line-height: 24px;
		border-radius: 12px;margin-top:10px;margin-right:10px;
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