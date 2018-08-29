<template>
	<div id="box">
		<div id="top">
			<button @click="back()" id="return">&lt;</button>
			<button @click="login()" id="dl">跳过</button>
		</div>
		
		
		<div id="add">
			+
		</div>
		
		
		<div class="info">
			<p>昵称</p>
			<input type="text"/>
			<span class="iconfont icon-dazhe"></span>
		</div>
		<div class="info">
			<p>性别</p>
			<input type="text"/>
			<span class="iconfont icon-dazhe"></span>
		</div>
		<div class="info">
			<p>体重</p>
			<input type="text"/>
			<span class="iconfont icon-dazhe"></span>
		</div>
		<div class="info">
			<p>身高</p>
			<input type="text"/>
			<span class="iconfont icon-dazhe"></span>
		</div>
		<div class="info">
			<p>偏好</p>
			<input type="text"/>
			<span class="iconfont icon-dazhe"></span>
		</div>
		
		
		
		
		<button @click="next()" class="btn">保存资料</button>
	</div>
</template>

<script>
	export default{
		name:"Register7",
		methods:{
			next(){
				this.$router.push("/register8")
			},
			back(){
				this.$router.push("/register6")
			}
		}
	}
	
	
	
</script>

<style scoped="">
		#box{
			height:100%;
			width: 100%;
			background:#212121;
			overflow: hidden;
			text-align: center;
		}
		#top{
			width:100%;
		}
		#return{
		height:18px;
		width:18px;
		border:1px solid #FFDC14;
		border-radius: 50%;
		background: none;
		color:#FFDC14;
		margin-top:10px;
		margin-left:10px;
	}
	
	#dl{
		height:22px;
		width:46px;
		text-align: center;
		line-height: 22px;
		color:#FFDC14;
		border:1px solid #FFDC14;
		border-radius: 11px;
		background: none;
		margin-right:10px;
		margin-top:10px;
		float: right;
	}
	#add{
		height:80px;
		width:80px;
		background: #FFFFFF;
		color:#FFDC14;
		font-size:30px;
		text-align: center;
		line-height:80px;
		border-radius: 50%;
		/*margin-top:100px;
		margin-left:150px;*/
		margin:20% auto 0;
	}
	.btn{
		width:180px;
		height:42px;
		background: #FFDC14;
		color:#FFFFFF;
		border:none;
		border-radius: 21px;
		margin:40px auto;
	}
	.info{
		width:260px;
		height:40px;
		background: #3a3a3a;
		border-radius: 20px;
		/*margin-top:20px;
		margin-left:60px;*/
		margin:20px auto 0;
	}
	.info input{
		height:40px;
		width:160px;
		background: #3A3A3A;
		border:none;
		color:#FFDC14;
		float: left;
		font-size:16px;
		margin-left:20px;
	}
	p{
		margin-left:15px;
		color:#FFDC14;
		float: left;
		line-height: 40px;
		
	}
	.info span{
		float: left;
		line-height: 40px;
		font-size:20px;
		color:#FFDC14;
	}
</style>