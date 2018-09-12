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
					<span class="iconfont icon-wode"></span>
					<input type="text" placeholder="请输入您的邮箱/手机号"  v-model="phone"/>
				</div>
				<div class="sjh">
					<span class="iconfont icon-wode"></span>
					<input type="text" placeholder="请输入您的密码"/>
				</div>
				<div class="sjh">
					<span class="iconfont icon-wode"></span>
					<input type="text" placeholder="请再输入一遍密码"/>
				</div>
				<div id="xieyi">
					<input type="radio" class="xy" />
					<p id="wz">以阅读相关协议</p>
				</div>
				<div class="xx"><p class="tsxx">qq</p></div>
			</div>	
			<button @click="next()" class="next">下一步</button>
		</div>
		
	</div>
	
</template>

<script>
	import $ from "jquery"
	import axios from "axios"
	
	var flag=0;
	var flag1=false;
	var flag2=false;
	var flag3=false;
	var flag4=false;
	var $reg =/^(13[0-9]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
	var $reg1 =/^[0-9a-zA-Z_]{6,20}$/;


	export default{
		name:"Register2",
		data(){
			return{
				phone:""
			}
		},
		methods:{
			next(){
				var _this=this;
				if($(".xy").prop("checked")==false){
						$(".tsxx").text("请阅读用户协议并同意");
						$(".tsxx").show();
						flag4=false;
					}else{
						flag4=true;
				}
				
				
				
				if($(".getyzm>div:eq(2)").find("input").val()==""){
					$(".tsxx").show();
					$(".tsxx").text("请再次输入密码")					
				}else if($(".getyzm>div:eq(2)").find("input").val()!=$(".getyzm>div:eq(1)").find("input").val()){
					$(".tsxx").show();
					$(".tsxx").text("两次输入密码不一致")
					flag3=false;
				}else{
					flag3=true;
				}
				
				
				
				if($(".getyzm>div:eq(1)").find("input").val()==""){
					$(".tsxx").show();
					$(".tsxx").text("请输入密码")
				}else if(!$reg1.test($(".getyzm>div:eq(1)").find("input").val())){
						$(".tsxx").text("密码格式不正确");
						$(".tsxx").show();
						flag2=false;
					}else{
						flag2=true;
				}
				
				if($(".getyzm>div:eq(0)").find("input").val()==""){
					$(".tsxx").show();
					$(".tsxx").text("请输入电话号码")
				}else if(!$reg.test($(".getyzm>div:eq(0)").find("input").val())){
						$(".tsxx").text("手机号码格式不正确");
						$(".tsxx").show();
						flag1=false;
					}else{
						flag1=true;
				}
			
		
				flag=flag1+	flag2+flag3+flag4
				
				if(flag==4){
					var username=$(".getyzm>div:eq(0)").find("input").val();
					var pass=$(".getyzm>div:eq(1)").find("input").val();
	
					axios({
						method:"get",
						url:"http://jx.xuzhixiang.top/ap/api/reg.php",
						dataType:"json",
						params:{username:username,password:pass}
					}).then(function(data){
//						console.log(data.data)
						if(data.data.code==1){
							localStorage.setItem("next",_this.phone)
							_this.$router.push("/home")
							
						}
					})
					this.$store.commit("next",this.phone)
				}
				
			},
			
			back(){
				this.$router.push("/register")
			},
			login(){
				this.$router.push("/login")
			},
		},
		computed:{
			username(){
				return localStorage.getItem("next")
			}
		}
	}
	
</script>

<style scoped="scoped">
	
	#box{
		height:100vh;
		width: 100vw;
		background:url(../../static/body.jpg);
		overflow: hidden;
	}
	#box1{
		height:350px;
		width:300px;
		background:url(../../static/reg2.jpg);
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
		width:180px;
		height:23px;
		color:#FFDC14;
		font-size:12px;
		outline: none;
		margin-bottom: 2px;
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
		margin:20% auto 0;
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
		outline: none;
	}
	#wz{
		font-size:14px;
		float: left;
		line-height: 20px;
		margin-left:10px;
		color:#FFDC14;
		margin-top:-4px;
	}
	.xx{
		height:20px;width:160px;background: none;margin-left:30px;
	}
	.tsxx{
		height:20px;width:140px;text-align: center;line-height: 20px;background: #FFDC14;border-radius: 10px;font-size:14px; color:#FFFFFF;display: none;
	}
</style>