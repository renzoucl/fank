<template>
	<div id="main">
		<header>
			<span  @click="tap2()"  class="iconfont icon-203"></span>
      		<div>{{str}}</div>
      		 <span id="ss"  class="iconfont icon-ai221"></span>
		</header>
		
		<div id="chat">
		
		</div>
		
		<div id="dibu">
			<span class="iconfont icon-xiaolian"></span>
			<input type="text" placeholder="我来说句话"/>
			<span class="iconfont icon-yuyin"></span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Chat",
		data:function(){
			return{
				str:"与  二琪儿   聊天中",
			}
		},
		methods:{
			tap2(){
				this.$router.push("/friendshome")
			}
		},
		mounted(){
			
		},
	}
</script>

<style scoped="">
	#main{
		height:100%;width:100%;
	}
	header{
		background: #000000;height:45px;display: flex;justify-content: space-between;
	}
	header div{
		font-weight: 600;width:40%;margin:0 auto 0;color:#FFFFFF;margin-top:10px;
	}
	header span:nth-child(1){
		height:24px;width:24px;background: #FFDC14;text-align: center;line-height: 24px;
		border-radius: 12px;margin-top:10px;margin-left:10px;
	}
	#ss{
		height:24px;width:24px;background:#FFDC14;text-align: center;line-height: 24px;
		border-radius: 12px;margin-top:10px;margin-right:10px;
	}
	#chat{
		
		flex: 1;
	}

	#dibu{
		height:45px;width:100%;background: #000000;position: fixed;bottom: 0;display: flex;justify-content:space-around
	}
	#dibu span{
		width:30px;height:30px;border-radius: 15px;background: #FFDC14;text-align: center;
		line-height: 30px;margin-top:7px;
	}
	#dibu input{
		height:28px;width:70%;border:none;margin-top:8px;border-radius: 14px;outline:none;
	}
</style>