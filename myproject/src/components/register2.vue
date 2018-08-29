<template>
	<div id="box">
		<div id="top">
			<button @click="back()" id="return">&lt;</button>
			<button @click="login()" id="dl">登录</button>
		</div>
		
		<p class="hy">w e l c o m e t o f a n k e</p>
		
		
		<div id="box1">
			<div class="getyzm">
				<div class="sjh">
					<span class="iconfont icon-wode"></span>
					<input type="text"value="请输入您的邮箱/手机号" />
				</div>
				<div class="sjh">
					<span class="iconfont icon-wode"></span>
					<input type="text" value="请输入您的密码"/>
				</div>
				<div class="sjh">
					<span class="iconfont icon-wode"></span>
					<input type="text" value="请再输入一遍密码"/>
				</div>
				<div id="xieyi">
					<input type="radio" class="xy"/>
					<p id="wz">以阅读相关协议</p>
				</div>
			</div>	
			<button @click="next()" class="next">下一步</button>
		</div>
		
	</div>
	
</template>

<script>
	export default{
		name:"Register2",
		methods:{
			next(){
				this.$router.push("/register3")
			},
			
			back(){
				this.$router.push("/register")
			},
			login(){
				this.$router.push("/login")
			},
		}
	}
	
</script>

<style scoped="scoped">
	
	#box{
		height:100%;
		width: 100%;
		background:url(/static/body.jpg);
		overflow: hidden;
	}
	#box1{
		height:350px;
		width:300px;
		background:url(/static/reg2.jpg);
		margin:20% auto 0;
		overflow: hidden;
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
	.getyzm{
		margin-top:80px;
		margin-left:50px;
	}
	.sjh{
		height:25px;
		width:210px;
		margin-bottom: 25px;
		margin-top:10px;
		border-bottom: 2px solid #FFDC14;
	}
	.sjh span{
		float: left;
		color:#FFDC14;
		font-size:20px;
	}
	.sjh input{
		border:none;
		width:110px;
		height:25px;
		color:#FFDC14;
		font-size:12px;
	}
	.sjh button{
		border:none;
		height:20px;
		width:70px;
		background: #FFDC14;
		font-size:12px;
		border-radius: 12px;
		color:#FFFFFF;
	}
	.next{
		height:40px;
		width:180px;
		background: #FFDC14;
		color:#FFFFFF;
		border:none;
		border-radius: 20px;
		margin-top: 10px;
		margin-left:60px;
	}
	.hy{
		display: block;
		/*position: absolute;
		top:160px;
		left:90px;*/
		margin:40% auto 0;
		width:220px;
		height:40px;
		word-spacing: 10px;
		text-align: center;
		line-height: 40px;
		color:#FFFFFF;
		font-weight: 600;
	}
	#xieyi{
		height:20px;
		
	}
	.xy{
		float: left;
		color:#FFDC14;
		background: #FFDC14;
	}
	#wz{
		font-size:14px;
		float: left;
		line-height: 20px;
		margin-left:10px;
		color:#FFDC14;
	}
</style>