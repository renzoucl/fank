<template>
	<div>
		<header>
			<span class="iconfont icon-203"></span>
      		<div>{{str}}</div>
      		 <span id="ss"  class="iconfont icon-sousuo"></span>
		</header>
		
		<mt-cell title="推送开关"><mt-switch v-model="value"></mt-switch></mt-cell>
		 <mt-cell title="消息设置" to="//" is-link ></mt-cell>
  		<mt-cell title="2G/3G下显示图片"><mt-switch v-model="value"></mt-switch></mt-cell>
 		<mt-cell title="隐私设置" to="//" is-link ></mt-cell>
 		<mt-cell title="关于我们" to="//" is-link ></mt-cell>
 		<mt-cell title="意见反馈" to="//" is-link ></mt-cell>
		<mt-cell  title="版本更新"  to="//" is-link value="当前版本5.0"></mt-cell>
		<mt-cell title="清除缓存" value="18.8M"></mt-cell>

 



		 
		  
		 
		
		
	</div>
</template>

<script>
	export default{
		name:"Yingyangs",
		data:function(){
			return{
				str:"营养师",
				value:""
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
	
	
	
	
	
	
	
	
	
</style>