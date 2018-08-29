<template>
	<div >
		<header>
			<span class="iconfont icon-203"></span>
      		<div>{{str}}</div>
      		 <span id="ss"  class="iconfont icon-sousuo"></span>
		</header>
		<div class="main">
			<h3>规则如下</h3>
			<p>1.上传5个菜谱作品，配有图文结合形式</p>
			<p>2.在至少3个饭咔社区有活跃度</p>
			<button>立即认证</button>
		</div>
		<div class="change">
			<span></span>
			<span></span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Renzheng",
		data:function(){
			return{
				str:"认证营养专家"
			}
		}
	}
	
</script>

<style scoped="">
	header{
		background: #000000;
	}
	header div{
		font-weight: 600;
	}
	header span:nth-child(1){
		height:24px;width:24px;background: #FFDC14;text-align: center;line-height: 24px;
		border-radius: 12px;margin-top:10px;margin-left:10px;
	}
	#ss{
		height:24px;width:24px;background:none;text-align: center;line-height: 24px;
		border-radius: 12px;margin-top:10px;margin-right:10px;color:#000000;
	}
	.main{
		height:322px;width:325px;margin:30px auto;
		background: url(/static/renzheng.jpg);overflow: hidden;
	}
	h3{
		margin:140px 150px 10px;font-size:16px;font-weight: 600;width:100px;height:20px;
	}
	p{
		font-size:12px;margin-left:80px;margin-bottom: 5px;
	}
	button{
		background: #FFFFFF;
		height:34px;width:120px;border:2px solid #000000;border-radius: 17px;
		margin-top:10px;margin-left:120px;
	}
	.change{
		width:80px;height:30px;background: #D5D1D1;border-radius: 15px;margin:30px auto 0;
	}
	
</style>