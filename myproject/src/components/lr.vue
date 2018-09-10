<template>
	<div id="box">
		<div id="box1">
			<img src="/static/maozi.jpg" />
			<span>w e l c o m e t o f a n k e</span>
			<div class="lr">
				<button @click="login()" class="login">登录</button>
				<button @click="register()" class="reg">注册</button>
			</div>	
			<p>其他登录方式</p>
			<ul>
				<li><a class="iconfont icon-qq"></a></li>
				<li><a class="iconfont icon-weixin"></a></li>
				<li><a class="iconfont icon-weibo"></a></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Lr",
		methods:{
			register(){
				this.$router.push("/register2")
			},
			login(){
				this.$router.push("/login")
			}
		}
	}
	
	
	
</script>

<style scoped="">
	#box{
		height:100%;
		width:100%;
		background:url(/static/body.jpg);
		
	}
	#box1{
		overflow: hidden;width:100%;
	}
	.login{
		height:40px;
		width:110px;
		background: #ffdc14;
		color:#FFFFFF;
		border-radius: 18px;
		border:none;
		font-size:16px;
	}
	.reg{
		height:40px;
		width:110px;
		background: #ffdc14;
		color:#FFFFFF;
		border-radius: 18px;
		border:none;
		font-size:16px;		
	}
	.lr{
		height:40px;width:260px;margin:160px auto 0;display: flex;justify-content: space-between;
	}
	p{
		height:22px;
		width:100px;
		border:1px solid #ffdc14;
		border-radius: 11px;
		font-size: 12px;
		text-align: center;
		line-height: 22px;
		margin:20px auto;
		color:#FFDC14;
	}
	ul{
		/*position: absolute;
		bottom:40px;
		left:110px;*/
		height:30px;width:160px;display: flex;justify-content: space-between;
		margin:20px auto;
	}
	ul li{
		float: left;
		width:30px;
		height:30px;
		border-radius: 15px;
		background: #FFDC14;
		text-align: center;
		line-height: 30px;
		background: #FFDC14;
		/*margin-right:30px;*/
		
	}
	a{
		color:#FFFFFF;
	}
	img{
		margin:100px auto;		
	}
	span{
		display: block;
		/*position: absolute;
		top:220px;
		left:90px;*/
		margin:100px auto;
		width:220px;
		height:40px;
		word-spacing: 10px;
		text-align: center;
		line-height: 40px;
		color:#FFFFFF;
		font-weight: 600;
	}
</style>