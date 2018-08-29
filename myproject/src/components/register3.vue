<template>
	<div id="box">
		<div id="top">
			<button @click="back()" id="return">&lt;</button>
			<button @click="login()" id="dl">跳过</button>
		</div>
		<div id="box1">
			<div class="xbh">选择您的性别</div>
			<div class="xby">CHOICE YOURXINGBIE</div>
			<div class="nv">
				<img src="/static/reg4.jpg" />
				<input type="radio" value="女"/>
				
				
			</div>
			<div class="nan">
				<img src="/static/reg5.jpg" />
				<input type="radio"  value="男"/>
			</div>
			
			
			
			<button @click="next()" class="btn">下一步</button>
		</div>
		
		
		
	</div>
	
</template>

<script>
	export default{
		name:"Register3",
		methods:{
			back(){
				this.$router.push("/register2")
			},
			next(){
				this.$router.push("/register4")
			},
			login(){
				this.$router.push("/register7")
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
		height:450px;
		width:300px;
		background:url(/static/reg3.jpg);
		margin:30% auto 0;
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
	.nv{
		width:72px;
		height:150px;
		float: left;
		margin-left:58px;
		margin-top:40px;
	}
	.nv input{
		margin-left:30px;
		margin-top:10px;
	}
	.nan{
		float: right;
		width:72px;
		height:150px;
		margin-right:58px;
		margin-top:40px;
	}
	.nan input{
		margin-left:30px;
		margin-top:10px;
	}
	.btn{
		width:180px;
		height:42px;
		background: #FFDC14;
		color:#FFFFFF;
		border:none;
		border-radius: 21px;
		/*position: absolute;
		bottom:50px;
		left:90px;*/
		margin:20px 60px 0;
	}
	.xbh{
		margin-top:112px;
		margin-left:106px;
		color:#FFDC14;
	}
	.xby{
		margin-top:10px;
		margin-left:80px;
		font-size:14px;
		color:#FFDC14;
	}
</style>