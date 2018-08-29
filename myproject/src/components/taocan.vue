<template>
	<div>
	 <header>
	    <div><span class="iconfont icon-dizhi"></span>{{city}}</div>
       	<div>{{tit}}</div>
     	<div><p><span class="iconfont icon-sousuo"></span></p></div>
	 </header>
	<div id="banner"><img src="static/bbz.jpg"/></div>
	<div id="list">
		<div class="list-left"><img src="static/pdsrz.jpg"/></div>	
		<div class="list-right">
			<b>皮蛋瘦肉粥</b>
			<p>皮蛋瘦肉粥是一种广东省的地方传统名小吃。皮蛋瘦肉粥营养丰富，以切成小块的皮蛋及咸瘦肉为配料。</p>
			<ul>
				<li>口感顺滑</li>
				<li>质地粘稠</li>
				<li>好消化</li>
			</ul>
		</div>
	</div>
	<div id="list">
		<div class="list-left"><img src="static/pdsrz.jpg"/></div>	
		<div class="list-right">
			<b>皮蛋瘦肉粥</b>
			<p>皮蛋瘦肉粥是一种广东省的地方传统名小吃。皮蛋瘦肉粥营养丰富，以切成小块的皮蛋及咸瘦肉为配料。</p>
			<ul>
				<li>口感顺滑</li>
				<li>质地粘稠</li>
				<li>好消化</li>
			</ul>
		</div>
	</div>
	<div id="list">
		<div class="list-left"><img src="static/pdsrz.jpg"/></div>	
		<div class="list-right">
			<b>皮蛋瘦肉粥</b>
			<p>皮蛋瘦肉粥是一种广东省的地方传统名小吃。皮蛋瘦肉粥营养丰富，以切成小块的皮蛋及咸瘦肉为配料。</p>
			<ul>
				<li>口感顺滑</li>
				<li>质地粘稠</li>
				<li>好消化</li>
			</ul>
		</div>
	</div>
	<div id="list">
		<div class="list-left"><img src="static/pdsrz.jpg"/></div>	
		<div class="list-right">
			<b>皮蛋瘦肉粥</b>
			<p>皮蛋瘦肉粥是一种广东省的地方传统名小吃。皮蛋瘦肉粥营养丰富，以切成小块的皮蛋及咸瘦肉为配料。</p>
			<ul>
				<li>口感顺滑</li>
				<li>质地粘稠</li>
				<li>好消化</li>
			</ul>
		</div>
	</div>
	<div id="list">
		<div class="list-left"><img src="static/pdsrz.jpg"/></div>	
		<div class="list-right">
			<b>皮蛋瘦肉粥</b>
			<p>皮蛋瘦肉粥是一种广东省的地方传统名小吃。皮蛋瘦肉粥营养丰富，以切成小块的皮蛋及咸瘦肉为配料。</p>
			<ul>
				<li>口感顺滑</li>
				<li>质地粘稠</li>
				<li>好消化</li>
			</ul>
		</div>
	</div>
	
	
	</div>
</template>

<script>
	export default{
		name:"Taocan",
		data:function(){
			return{
				tit:"膳食套餐",
				city:"郑州"
			}
		}
	}
</script>

<style scoped="">
	/*header div:nth-child(1){
		height:24px;width:24px;background: #FFDC14;text-align: center;line-height: 24px;
		border-radius: 12px;margin-top:10px;margin-left:10px;
	}*/
	#banner img{
		height:136px;width:90%;margin-top:10px;margin-left:5%;border-radius: 10px;
	}
	#list{
		width:90%;height:auto;margin-top:20px;margin-left:5%;border:2px solid #D5D1D1;
		border-radius: 10px;display: flex;
		flex-direction: row;
	}
	.list-left{width:200px;height:auto;background: #1AE4ED;margin-right:10px}
	.list-left img{
		width:100%;height:100%;border-radius: 10px;margin-right: 10px;
	}
	b{margin-top:15px;font-size:14px}
	p{
		font-size:12px;color:#D5D1D1;width:100%;height:auto;float: left;overflow: hidden;
		text-overflow:ellipsis;white-space: wrap
	}
	
	li{
		font-size:12px;float: left;margin-right:7px;border:2px solid 		#FFDC14;border-radius: 14px;height:14px;margin-bottom:5px;padding:5px;
	}
	
	
	
	
	
	
	
	
	
	
	
	/*#list img{
		width:120px;height:80px;border-radius: 10px;float: left;margin-right:10px;
	}
	#list b{
		margin-top:15px;font-size:14px;
	}
	#list p{
		font-size:12px;color:#D5D1D1;width:60%;height:auto;float: left;overflow: hidden;
		text-overflow:ellipsis;white-space: wrap
	}
	li{
		font-size:12px;float: left;margin-right:7px;border:2px solid 		#FFDC14;border-radius: 14px;height:14px;margin-top:5px;padding:3px;
	}*/
</style>