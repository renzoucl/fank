<template>
	<div id="box">
		<div id="top">
			<button @click="back()" id="return">&lt;</button>
			<button @click="login()" id="dl">跳过</button>
		</div>
		<div id="box1">
			<div>
				<h4>口味选择</h4>
				<ul>
					<li>清淡</li>
					<li>微辣</li>
					<li>中辣</li>
					<li>特辣</li>
				</ul>
			</div>
			<div>
				<h4>类别选择</h4>
				<ul>
					<li>烹饪</li>
					<li>甜食</li>
					<li>火锅</li>
					<li>素食</li>
					<li>烧烤</li>
					<li>蒸煮</li>
					<li>凉拌</li>
					<li>其他</li>
				</ul>
			</div>
			
		
			
		</div>
				<button @click="next()" class="btn">下一步</button>
	</div>
	
</template>

<script>
	export default{
		name:"Register6",
		methods:{
			back(){
				this.$router.push("/register5")
			},
			next(){
				this.$router.push("/register7")
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
		background:#212121;
		overflow: hidden;
		text-align: center;
	}
	#box1{
		height:377px;
		width:290px;
		background:url(/static/reg6.jpg) no-repeat;
		margin:44px auto 0;
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
	.btn{
		width:180px;
		height:42px;
		background: #FFDC14;
		color:#FFFFFF;
		border:none;
		border-radius: 21px;
		margin:-100px auto;
	}
	#box1 div:nth-child(1){
		margin-top:150px;
		margin-left:40px;
	}
	#box1 div:nth-child(1) h4{
		display: block;
		height:26px;
		width:90px;
		text-align: center;
		line-height: 26px;
		border:2px solid #FFDC14;
		border-radius: 13px;
		margin-left:60px;
	}
	#box1 div:nth-child(1) li{
		float: left;
		width:45px;
		height:22px;
		margin-left:5px;
		text-align: center;
		line-height: 22px;
		border:2px solid #FFDC14;
		border-radius: 11px;
		margin-top:10px;
	}
	
	
	#box1 div:nth-child(2){
		margin-top:40px;
		margin-left:40px;
	}
	#box1 div:nth-child(2) h4{
		display: block;
		height:26px;
		width:90px;
		text-align: center;
		line-height: 26px;
		border:2px solid #FFDC14;
		border-radius: 13px;
		margin-left:60px;
	}
	#box1 div:nth-child(2) li{
		float: left;
		width:45px;
		height:22px;
		margin-left:5px;
		text-align: center;
		line-height: 22px;
		border:2px solid #FFDC14;
		border-radius: 11px;
		margin-top:10px;
	}
	
	
</style>