<template>
	<div id="box">
		<div id="top">
			<button @click="back()" id="return">&lt;</button>
			<button @click="login()" id="dl">注册</button>
		</div>
			<p class="hy">w e l c o m e t o f a n k e</p>
		
		<div id="box1">
			<div class="getyzm">
				<div class="sjh">
					<span class="iconfont icon-wode"></span>
					<input type="text"value="邮箱/手机号/饭咔号" />
				</div>
				<div class="sjh">
					<span class="iconfont icon-mima"></span>
					<input type="text" value="请输入您的验证码"/>
				</div>
				<div id="jlzt">
					<input class="jlmm" type="radio" value="记住密码" />  记住密码
					<a>忘记密码？</a>
				</div>
			</div>	
			<button @click="next()" class="next">踏上饭咔之旅</button>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:"Login",
		methods:{
			back(){
				this.$router.push("/lr")
			},
			login(){
				this.$router.push("/register")
			},
			next(){
				this.$router.push("/home")
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
		/*margin-bottom: 25px;*/
		margin-top:20px;
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
		color:#FFDC14;
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
		margin-top: 40px;
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
	
	#jlzt{
		margin-top:10px;
		color:#FFDC14;
		font-size:14px;
	}
	.jlmm{
		color:#FFDC14;
		font-size:14px;
	}
	a{
		color:#FFDC14;
		font-size:14px;
		float: right;
		margin-right:35px;
	}
</style>