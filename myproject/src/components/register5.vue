<template>
	<div id="box">
		<div id="top">
			<button @click="back()" id="return">&lt;</button>
			<button @click="login()" id="dl">跳过</button>
		</div>
		<div id="box1">
			<div class="xbh">选择您的体重</div>
			<div class="xby">CHOICE YOUR TIZHONG</div>
			<div class="nv">
				<div class="nv-left">
					<img src="/static/reg5.jpg" />
					<input type="radio" value="男" checked="checked"/>	
				</div>	
				<div class="nv-right">
					<input type="text" />
					<input type="text" />
					<input type="text" />
					<p>kg</p>
				</div>
			</div>
			
			
			
			
			<button @click="next()" class="btn">下一步</button>
		</div>
		
		
		
	</div>
	
</template>

<script >
	export default{
		name:"Register4",
		methods:{
			back(){
				this.$router.push("/register4")
			},
			next(){
				this.$router.push("/register6")
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
		width:260px;
		height:150px;
		float: left;
		margin-left:48px;
		margin-top:40px;
	}
	.nv-left{
		float:left;
	}
	.nv-right{
		float: right;
		margin-right:46px;
	}
	.nv-left input{
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
		margin:30px 60px;
	}
	.xbh{
		margin-top:112px;
		margin-left:106px;
		color:#FFDC14;
	}
	.xby{
		margin-top:10px;
		margin-left:70px;
		font-size:14px;
		color:#FFDC14;
	}
	.nv-right input{
		float: left;
		height:30px;
		width:20px;
		margin-top:100px;
		margin-left:5px;
		text-align: center;
		line-height: 30px;
		font-size:20px;
		color:#FFDC14;
		font-weight: 600;
		border:1px solid #FFDC14;
	}
	
	p{
		float: left;
		margin-top:110px;
		color:#FFDC14;
	}
</style>