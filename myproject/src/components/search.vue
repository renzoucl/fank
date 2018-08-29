<template>
	<div id="search">
		<header>
	      <div>{{str}}</div>
	    </header>
		<div >
			<mt-search
			  :v-model="value"
			  :cancel-text="canceltext"
			  :placeholder="placeHolder">
			</mt-search>
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
	header{height:45px;background:#222222;color:#fff;text-align: center;line-height: 45px;font-size:20px;display: flex;justify-content: center;}
	
	.mint-search {height: 100%;overflow: hidden;}
	#search>div:nth-of-type(1){height: 52px;}
	#search>div:nth-of-type(2){padding: 5px; }
	#search>div:nth-of-type(2)>div:nth-of-type(1)>span{width: 18px;height: 20px;display:block;}
	#search>div:nth-of-type(2)>div:nth-of-type(1){display: flex;justify-content: space-between;height:32px;margin-bottom: 5px;}
	#search>div:nth-of-type(2)>div:nth-of-type(1)>div{height:100%;text-align: center;}
	#search>div:nth-of-type(2)>div:nth-of-type(1)>div>img{display:inline-block;vertical-align: middle;}
	#search>div:nth-of-type(2)>div:nth-of-type(1)>div>span{height: 100%;vertical-align: middle;display: inline-block;}
	#search>div:nth-of-type(2)>div:nth-of-type(2){display: flex;flex-wrap: wrap;justify-content:center;}
	#search>div:nth-of-type(2)>div:nth-of-type(2)>div{margin: 3px;}
	#search>div:nth-of-type(2)>div:nth-of-type(3){display: flex;flex-wrap: wrap;justify-content:space-around;height: 75px;margin-top: 20px;}
	#search>div:nth-of-type(2)>div:nth-of-type(3)>div{width: 33.3%;height:75px ;display:flex ;flex-direction:column ;text-align: center;color: #999;}
	#search>div:nth-of-type(2)>div:nth-of-type(3)>div>span{font-size: 32px;}
	
	
</style>