<template>
	<div id="dolist">
		<div class="logo">
			<img src="../../static/user_logo.png"/>
			<div class="line">
				<img src="../../static/timeline.png"/>
				<div class="part1">
					<p>2018.8.16</p>
					<div class="kuang1">
						<div id="k1">
							自己下厨做了几道菜犒劳自己~Happy
						</div>
					</div>
				
				</div>
				
				
				<div class="part2">
					
					<div class="kuang2">
						<div id="k2">
							吃饱才有力气减肥啊!!!!
						</div>
					</div>
				 
				</div>
				<!--<img src="../../static/kuang2.png" class="kuang2"/>-->
				
			</div>
			 <p class="t">2018.7.16</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Dolist',
		data(){
			return{
				str:'我的动态',
				msg:''
				
			}
		},
		mounted(){
            this.$emit("toparent",this.str)
            
            
          
			
		}
	}
</script>

<style scoped=''>
    .logo{
    	margin-left: 40%;
    }
    .line{
    	margin-left: 10%;
    }
    .part1{
    	position: absolute;
    	top: 130px;
    	left:100px;
    }
    .kuang1{
    	width: 174px;
    	height: 140px;
    	position: relative;
    	top: 0px;
    	left: -100px;
    	background: url(../../static/kuang1.png) no-repeat center;
    }
    #k1{width: 100px;height:80px;margin: 0 auto;margin-top:2px;padding: 15px;}
    #k2{width: 90px;height:80px;margin-top:25px;margin-left:55px;padding: 15px;}
    .t{
    	position: absolute;
    	top: 400px;
    	
    }
     .kuang2{
    	width: 175px;
    	height: 150px;
    	position: absolute;
    	top: 240px;
    	left: 200px;
    	background: url(../../static/kuang2.png) no-repeat center;
    	
    }
</style>