<template>
	<div id="search">
		<header>
	      <div><p><a class="iconfont icon-203" href="javascript:history.go(-1)"></a></p></div>
	      <div>{{str}}</div>
	      <div><!--<p><span class="iconfont icon-sousuo"></span></p>--></div>  
	    </header>  
		<div class="searchkuang">
			<a class="iconfont icon-sousuo" ></a>
			<input type="text" placeholder="搜索"/>
			<button>确定</button>
		</div>
		<div>
			<div >
				
				<h2><span class="iconfont icon-lingdang1"></span>一周热搜</h2>
				<div><img src="static/yizrs.png" /><span></span></div>
			</div>
			
			<div id="">
				<router-link to="/search" tag="div"><mt-badge :size="dx">秘制冰糖冬瓜</mt-badge></router-link>
				<router-link to="/search" tag="div"><mt-badge :size="dx">周黑鸭</mt-badge></router-link>
				<router-link to="/search" tag="div"><mt-badge :size="dx">杂粮铺板栗</mt-badge></router-link>
				<router-link to="/search" tag="div"><mt-badge :size="dx">炸美味薯条</mt-badge></router-link>
				<router-link to="/search" tag="div"><mt-badge :size="dx">黄焖鸡</mt-badge></router-link>
				<router-link to="/search" tag="div"><mt-badge :size="dx">蛋糕</mt-badge></router-link>
				<router-link to="/search" tag="div"><mt-badge :size="dx">小熊饼干</mt-badge></router-link>
				<router-link to="/search" tag="div"><mt-badge :size="dx">叫花鸡</mt-badge></router-link>
				<router-link to="/search" tag="div"><mt-badge :size="dx">土家酱香饼</mt-badge></router-link>
			</div>
			<div>
				<router-link to="/search" tag="div"><span class="iconfont icon-por_ren"></span><strong>咖友圈</strong></router-link>
				<router-link to="/search" tag="div"><span class="iconfont icon-xiangji"></span><strong>美食视频</strong></router-link>
				<router-link to="/search" tag="div"><span class="iconfont icon-wodecaipu"></span><strong>精彩菜谱</strong></router-link>
			</div>
			
			
		</div>
		
	</div>
</template>

<script>
	
	export default {
		name:'Search',
		data:function(){
			return{
				str:'搜索',
				value:'value',
				canceltext:'取消',
				placeHolder:'搜索',
				dx:'large'	
			}
		},
		mounted(){
			this.$emit('toparent',this.str)
		}
	}
</script>

<style scoped>
	header{height:45px;background:#222222;color:#fff;text-align: center;line-height: 45px;font-size:20px;display: flex;justify-content: space-between;overflow: hidden;}
	header>div{height:45px;width: 100px;}
	header>div:nth-of-type(1){text-align: left;padding-left: 5px;font-size: 16px;display: flex;align-items: center;text-align: center;line-height: 28px;}
	
	header>div:nth-of-type(1) p{width: 28px;height: 28px;background: #fddb13;border-radius: 50%;margin-left: 5px;text-align: center;line-height: 28px;}
	header>div:nth-of-type(1) a{font-size: 22px;color: #fff;display: block;color: white;}
	
	header>div:nth-of-type(3){text-align: right;padding-right: 5px;display: flex;align-items: center;justify-content: flex-end;text-align: center;line-height: 28px;}
	header>div:nth-of-type(3) span{font-size: 22px;color: #fff}
	header>div:nth-of-type(3) p{width: 28px;height: 28px;background: #fddb13;border-radius: 50%;margin-right: 5px}
	

	#search>div:nth-of-type(1){background: #C2C2C0;padding: 10px 5px;display: flex;justify-content: flex-start;align-items: center;}
	.searchkuang>span{width: 30px ;height: 30px;font-size: 24px;display: block;text-align: center;line-height: 30px;}
	.searchkuang>input{height: 20px;padding: 5px 10px;font-size: 16px;width: 65%;outline: none;border: 0;opacity: 0.8;margin-right: 5px;color: blue;}
	.searchkuang>button{padding:5px 12px;font-size: 14px;background:#999999;outline: none;border-radius: 5px;color: white;}
	#search>div:nth-of-type(2){padding: 5px; }
	
	#search>div:nth-of-type(2)>div:nth-of-type(1)>h2>span{font-size:24px ;margin-right: 10px;}
	#search>div:nth-of-type(2)>div:nth-of-type(1)>span{width: 18px;height: 20px;display:block;}
	#search>div:nth-of-type(2)>div:nth-of-type(1){display: flex;justify-content: space-between;height:32px;margin-bottom: 10px;}
	#search>div:nth-of-type(2)>div:nth-of-type(1)>div{height:100%;text-align: center;}
	#search>div:nth-of-type(2)>div:nth-of-type(1)>div>img{display:inline-block;vertical-align: middle;}
	#search>div:nth-of-type(2)>div:nth-of-type(1)>div>span{height: 100%;vertical-align: middle;display: inline-block;}
	#search>div:nth-of-type(2)>div:nth-of-type(2){display: flex;flex-wrap: wrap;justify-content:center;}
	#search>div:nth-of-type(2)>div:nth-of-type(2)>div{margin: 10px 5px;}
	#search>div:nth-of-type(2)>div:nth-of-type(3){display: flex;flex-wrap: wrap;justify-content:space-around;height: 75px;margin-top: 20px;}
	#search>div:nth-of-type(2)>div:nth-of-type(3)>div{width: 33.3%;height:75px ;display:flex ;flex-direction:column ;text-align: center;color: #999;}
	#search>div:nth-of-type(2)>div:nth-of-type(3)>div>span{font-size: 32px;}
	
	
</style>