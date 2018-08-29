<!--<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">-->
<template>
	<div>
		<mt-swipe style="height:100vh">
		  <mt-swipe-item>
		  	<img src="static/q.jpg" />
		  	<button @click="tap()" class="btn">跳过</button>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="static/w.jpg" />
		  	<button @click="tap()" class="btn">跳过</button>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="static/e.jpg" />
		  	<button @click="tap()" class="btn">跳过</button>
		  </mt-swipe-item>
		  <mt-swipe-item class="sjskf">
		  	<!--<img src="static/r.jpg" />-->
		  	<button @click="tap1()" id="btn">立即体验</button>
		  </mt-swipe-item>
		</mt-swipe>
		
	</div>
</template>

<script>
	export default{
		name:"Index",
		methods:{
			tap(){
				this.$router.push("/lr")
			},
			tap1(){
				this.$router.push("/lr")
			}
		}
	}
	
	
</script>

<style scoped="">
	#btn{
		width:120px;
		height:30px;
		border:2px solid #000000;
		border-radius: 15px;
		text-align: center;
		line-height: 30px;
		position: absolute;
		bottom: 50px;
		left:140px;
		
		background: #FFFFFF;
		
	}
	.btn{
		border:1px solid #fae151;
		height:40px;
		width:40px;
		position:fixed;
		top:20px;
		right:20px;
		border-radius: 20px;
		background: #FFFFFF;
		text-align: center;
		line-height: 36px;
		color:#fae151;
	}
	img{
		height:100%;
		width:100%;
	}
	.sjskf{
		height:100%;width:100%;
		background: url(/static/r.jpg);
		background-size: cover;
		background-position: center center;
	}
</style>