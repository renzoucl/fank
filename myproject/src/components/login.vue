<template>
	<div id="box">
		<div id="top">
			<button @click="back()" id="return">&lt;</button>
			<button @click="login()" id="dl">注册</button>
		</div>
			<p class="hy">w e l c o m e t o f a n k a</p>
		
		<div id="box1">
			<div class="getyzm">
				<div class="sjh">
					<span class="iconfont icon-wode"></span>
					<input type="text" placeholder="邮箱/手机号/饭咔号"  v-model="phone"/>
					<span class="iconfont icon-shanchu3" @click="sc1()"></span>
				</div>
				<div class="sjh">
					<span class="iconfont icon-wode"></span>
					<input type="text" placeholder="请输入您的密码" v-model="pass"/>
					<span class="iconfont icon-shanchu3" @click="sc2()"></span>
				</div>
				<div id="jlzt">
					<input class="jlmm" type="radio" value="记住密码" />  记住密码
					<a>忘记密码？</a>
				</div>
				<div class="xx"><p class="tsxx"></p></div>
				
			</div>	
			<button @click="next()" class="next">踏上饭咔之旅</button>
		</div>
		
	</div>
</template>

<script>
	
	import axios from "axios"
	
	
	var flag=0;
	var flag1=false;
	var flag2=false;
	var $reg =/^(13[0-9]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
	var $reg1 =/^[0-9a-zA-Z_]{6,20}$/;
	
	
	
	
	
	export default{
		name:"Login",
		data(){
			return{
				phone:"",
				pass:""
			}
		},
		methods:{
			back(){
				this.$router.push("/lr")
			},
			login(){
				this.$router.push("/register2")
			},
			sc2(){
				this.pass=""
			},
			sc1(){
				this.phone=""
			},
			next(){
				var _this=this;
				

					if($(".getyzm>div:eq(1)").find("input").val()==""){
						$(".tsxx").show();
						$(".tsxx").text("请输入密码")
						flag2=false
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

					flag=flag1+flag2;
					if(flag==2){
						var username=$(".getyzm>div:eq(0)").find("input").val();
						var pass=$(".getyzm>div:eq(1)").find("input").val();
						
						axios({
							methods:"get",
							url:"http://jx.xuzhixiang.top/ap/api/login.php",
							dataType:"json",
							params:{username:username,password:pass}
						}).then(function(data){
//							console.log(data.data)
							if(data.data.code==1){
								localStorage.setItem("next",_this.phone)
								_this.$router.push("/home")
							}else{
								$(".tsxx").show();
								$(".tsxx").text("账号不存在")
							}
						})
						this.$store.commit("next",this.phone)
						
					}
			}
		}
	}
	
</script>

<style scoped="">
	
	#box{
		height:100ch;
		width: 100vw;
		background:url(../../static/body.jpg);
		background-size: cover;
		overflow: hidden;
	}
	#box1{
		height:292px;
		width:300px;
		background:url(../../static/reg1.jpg);
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
		float:left;
	}
	.sjh input{
		border:none;
		width:160px;
		height: 25px;
		color:#FFDC14;
		float: left;
		outline: none;
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
		margin-top: 20px;
		margin-left:60px;
		outline: none;
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
	
	#jlzt{
		margin-top:10px;
		color:#FFDC14;
		font-size:14px;
	}
	.jlmm{
		color:#FFDC14;
		font-size:14px;
		outline: none;
	}
	a{
		color:#FFDC14;
		font-size:14px;
		float: right;
		margin-right:35px;
		z-index: -9999;
	}
	/*.xx{
		position: absolute;z-index: 9999;margin-left:80px;margin-top:-30px;background:none;height:34px;width:160px;}
	.tsxx{
		height:34px;width:150px;background: #FFFFFF;color:#FFDC14;font-size: 14px;
		text-align: center;line-height: 34px;border:1px solid #FFDC14;
		border-radius: 8px;display: none;
	}*/
	
	
	
	.xx{
		height:20px;width:160px;background: none;margin-left:30px;
	}
	.tsxx{
		height:20px;width:140px;text-align: center;line-height: 20px;background: #FFDC14;border-radius: 10px;font-size:14px;display: none;color:#FFFFFF;
	}
</style>