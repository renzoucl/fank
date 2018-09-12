<template>
	<div>
	 <header>
	    <span @click="tap2()"  class="iconfont icon-203"></span>
       	<div>{{tit}}</div>
     	<span class=" gd iconfont icon-sousuo"></span>
	 </header>
	<div id="banner"><img src="static/bbz.jpg"/></div>
	<div id="main">
		<div id="list" @click="tap()">
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
		<div id="list" @click="tap()">
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
		<div id="list" @click="tap()">
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
		<div id="list" @click="tap()">
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
		<div id="list" @click="tap()">
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
		
		<div id="list" @click="tap()">
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
	
	</div>
</template>

<script>
	export default{
		name:"Taocan",
		data:function(){
			return{
				tit:"膳食套餐",
			}
		},
		methods:{
			tap(){
				this.$router.push("/zaocan")
			},
			tap2(){
				this.$router.push("/mine")
			}
		}
	}
</script>

<style scoped="">
header{
		position:fixed;top:0;height:45px;width:100%;
		background: #212121;display: flex;justify-content:space-between;
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
	#banner{
		position: fixed;top:45px;background: #FFFFFF;padding-bottom: 20px;width:100%;
	}
	#banner img{
		height:136px;width:90%;margin-top:10px;margin-left:5%;border-radius: 10px;
	}
	#main{
		margin-top:193px;overflow: hidden;height: auto;
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