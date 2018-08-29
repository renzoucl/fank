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
					<input type="text"value="请输入您的昵称" />
					<button id="qc"><span class="iconfont icon-wode"></span></button>
				</div>
				<div class="sjh">
					<span class="iconfont icon-wode"></span>
					<input type="text" value="请输入您的密码"/>
					<!--<button class="yzm">发送验证码</button>-->
					<button id="qc"><span class="iconfont icon-wode"></span></button>
				</div>
			</div>	
			<button @click="next()" class="next">下一步</button>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:"Register",
		methods:{
			back(){
				this.$router.push("/register7")
			},
			login(){
				this.$router.push("/login")
			},
			next(){
				this.$router.push("/register9")
			}
		}
	}
	
</script>

<style scoped="">
	
	#box{
		height:100%;
		width: 100%;
		background:url(/static/body.jpg);
		overflow: hidden;
	}
	#box1{
		height:292px;
		width:300px;
		background:url(/static/reg1.jpg);
		margin:20% auto 50px;
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
		margin-top:20px;
		border-bottom: 2px solid #FFDC14;
	}
	.sjh span{
		float: left;
		color:#FFDC14;
		font-size:20px;
		float: left;
	}
	.sjh input{
		border:none;
		width:160px;
		height:25px;
		color:#FFDC14;
		float: left;
	}
	.sjh #next{
		border:none;
		height:20px;
		width:70px;
		background: #FFDC14;
		font-size:12px;
		border-radius: 12px;
		color:#FFFFFF;
	}
	.sjh #qc{
		border:none;
		float: left;
		color:#FFDC14;
		font-size:20px;
		float: left;
		background: none;
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
	p{
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
</style>