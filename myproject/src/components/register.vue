<template>
	<div id="box">
		<div id="top">
			<button @click="back()" id="return">&lt;</button>
			<button @click="login()" id="dl">登录</button>
		</div>
			<p class="hy">w e l c o m e t o f a n k a</p>
		
		<div id="box1">
			<div class="getyzm">
				<div class="sjh">
					<span class="iconfont icon-wode" ></span>
					<input type="text" placeholder="请输入您的手机号"  v-model="phone"/>
				</div>
				<div class="mima">
					<span class="iconfont icon-wode"></span>
					<input type="text" placeholder="请输入您的验证码" v-model="yzm"/>
					<button class="yzm" @click="send()">发送验证码</button>
				</div>
				<div class="xx"><p class="tsxx"></p></div>
			</div>	
			<button @click="next()" class="next">下一步</button>
			<!--<p>欢迎----{{this.$store.state.username}}</p>-->
		</div>
		
	</div>
</template>

<script>
	
import axios from "axios"
	
	var flag=0;
	var flag1=false;
	var flag2=false;
	
	 var $reg =/^(13[0-9]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
	
	export default{
		name:"Register",
		data:function(){
			return{
				phone:"",
				yzm:""
			}
		},
		methods:{
			back(){
				this.$router.push("/lr")
			},
			login(){
				this.$router.push("/login")
			},
			next(){

				var _this=this;
				axios({
					method:"post",
					url:"http://localhost:3000/register",
					params:{id:"2",phoneNum:_this.phone,yzm:_this.yzm}
				}).then(function(data){
					console.log(data.data)
					if(data.data==1){
						_this.$router.push("/register2")
					}
				})

				this.$store.commit("next",this.phone)

			},
			send(){
			
			
			if($(".sjh").find("input").val()==""){
				$(".tsxx").show();
				$(".tsxx").text("请输入电话号码")
			}else if
				
				(!$reg.test($(".sjh").find("input").val())){
						$(".tsxx").text("手机号码格式不正确");
						$(".tsxx").show();
						flag1=false;
					}else{
						flag1=true;
				}
			

				var _this=this;
				axios({
					method:"post",
					url:"http://localhost:3000/register",
					params:{id:"1",phoneNum:_this.phone}
				}).then(function(data){
					console.log(data.data)
				})
			}
		}
	}
	
</script>

<style scoped="">
	
	#box{
		height:100vh;
		width: 100vw;
		background:url(../../static/body.jpg);
		overflow: hidden;
	}
	#box1{
		height:292px;
		width:300px;
		background:url(../../static/reg1.jpg);
		margin:25% auto 0;
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
		margin-bottom: 15px;
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
		outline: none;
	}
	
	.mima{
		height:25px;
		width:210px;
		margin-bottom: 15px;
		margin-top:20px;
		border-bottom: 2px solid #FFDC14;
	}
	.mima span{
		float: left;
		color:#FFDC14;
		font-size:20px;
	}
	.mima input{
		border:none;
		width:110px;
		color:#FFDC14;
		outline: none;
	}
	
	.mima button{
		border:none;
		height:20px;
		width:70px;
		background: #FFDC14;
		font-size:12px;
		border-radius: 12px;
		color:#FFFFFF;
		outline: none;
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
		outline: none;
	}
	.hy{
		display: block;
		/*position: absolute;
		top:160px;
		left:90px;*/
		margin:35% auto 0;
		width:220px;
		height:40px;
		word-spacing: 10px;
		text-align: center;
		line-height: 40px;
		color:#FFFFFF;
		font-weight: 600;
	}
	.xx{
		height:20px;width:160px;background: none;margin-left:30px;
	}
	.tsxx{
		height:20px;width:140px;text-align: center;line-height: 20px;background: #FFDC14;border-radius: 10px;font-size:14px;display: none;color:#FFFFFF;
	}
</style>