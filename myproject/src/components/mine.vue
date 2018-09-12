<template>
    <div id="wode">
        <div id="beijing">
             <div class="set"><span class="iconfont icon-shezhi2"></span></div>
             <div class="head">
                <div><span class="iconfont icon-xiugaiqianming"></span></div>
                <div @click="duih()"><img src="static/222.jpg"></div>
                <div><span class="iconfont icon-shezhi1"></span></div>
             </div>
             <div class="sign">
                  <div>{{username}}</div>
                  <p>宇宙大开发无限责任公司</p>
             </div>
             <div class="qiandao">
                <span class="iconfont icon-qiandao1"></span>
             </div>
        </div>
         <ul id="list">
            <li>
               <p><span class="iconfont icon-wujiaoxing"></span> 关注</p>
               <p>35</p>
            </li>
            <li>
              <p><span class="iconfont icon-xin"></span> 粉丝</p>
              <p>654</p>
             </li>
            <li>
              <p><span class="iconfont icon-shiwu"></span> 搜藏</p>
              <p>546</p>
            </li>
            <li>
              <p><span class="iconfont icon-xinxi"></span> 帖子</p>
              <p>45</p>
            </li>
         </ul>

       <ul id="list2">
       	<router-link to='/ddxinxi' tag='li'>
       		<div>
            	
                <span class="iconfont icon-qicheqianlian-"></span>  订单
            </div>
            <div>
                <p></p><span class="iconfont icon-houtuimian"></span>
            </div>
       	</router-link>
          
          	<router-link to='/gouwuche?id=111' tag='li'>
              <div> 
                  <span class="iconfont icon-meishi"></span>  我的购物车
              </div>
              <div>
                  <p></p><span class="iconfont icon-houtuimian"></span>
              </div>
            </router-link>
              <li @click="tap()">
              <div> 
                  <span class="iconfont icon-meishi"></span>  我的菜谱
              </div>
              <div>
                  <p>5</p><span class="iconfont icon-houtuimian"></span>
              </div>
            </li>
            <li @click="tap2()">
                <div>
                    <span class="iconfont icon-xinxi"></span>  消息通知
                </div>
                <div>
                    <p>0</p><span class="iconfont icon-houtuimian"></span>
                </div>
              </li>
            <li>
                    <div>
                        <span class="iconfont icon-shiwu"></span> 我的银行卡
                    </div>
                    <div>
                        <p>8</p><span class="iconfont icon-houtuimian"></span>
                    </div>
                </li>
            <li>
                
                <div>
                    <span class="iconfont icon-xinxi"></span>  我的动态
                </div>
                <div>
                    <p>0</p><span class="iconfont icon-houtuimian"></span>
                </div>
              </li>
              <li>
                  <div>
                      <span class="iconfont icon-shiwu"></span>  饭咖券
                  </div>
                  <div>
                      <p>8</p><span class="iconfont icon-houtuimian"></span>
                  </div>
              </li>
       </ul>

    </div>
</template>
  
  <script>
  export default {
    name: 'Mine',
    data(){
      return {
        str:"我的",
        msg: ""
      }
    },
    mounted() {
      this.$emit("toparent",this.str)
    },
     methods:{
    	tap(){
    		this.$router.push("/taocan")
    	},
    	tap2(){
    		this.$router.push("/yingyangs")
    	},
    	duih(){
    		this.$router.push("/chat")
    	}
    },
       computed:{
    	username(){
				return localStorage.getItem("next")
			}
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
     
    #beijing{position: relative;width: 100%;height: 200px;background: url('../../static/100.jpg') no-repeat center/cover; overflow: hidden;}
    #beijing .set{width: 30px;height: 30px;border-radius: 50%;background: yellowgreen;float: right;text-align: right;line-height: 30px;margin: 8px}
    #beijing .set span{font-size: 30px;color: #fff}
    #beijing .head{width: 100%;height: 80px;margin-top: 40px;display: flex;justify-content: center;align-items: center}
    #beijing .head>div:nth-of-type(1){width: 30px;height: 30px;;border-radius: 50%;background: #fff;margin-right:50px;text-align: center;line-height: 30px }
    #beijing .head>div:nth-of-type(1) span{font-size: 18px;color: red}
    #beijing .head>div:nth-of-type(2){width: 80px;height: 80px;;border-radius: 50%;background: #fff}
    #beijing .head>div:nth-of-type(2) img{width: 80px;height: 80px;;border-radius: 50%;}
    #beijing .head>div:nth-of-type(3){width: 30px;height: 30px;;border-radius: 50%;background: #fff;margin-left:50px ;text-align: center;line-height: 30px}
    #beijing .head>div:nth-of-type(3) span{font-size: 24px;color: red}
    #beijing .sign{width: 120px;height: 80px;margin: 0 auto}
    #beijing .sign>div{width: 100%;height: 25px;text-align: center;line-height: 25px;font-weight: bold}
    #beijing .sign>p{width: 100%;height: 25px;font-size: 16px;color: #fff;text-align: center;line-height: 25px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}

    #beijing .qiandao{width:30px;height: 30px;border-radius: 50%;background: #8dd5df;position: absolute;bottom: 5px;right: 20px;text-align: center;line-height: 30px;color: #fff}




    #list{width: 100%;height: 100px;border-bottom: 1px solid #ddd;display: flex;justify-content: space-between;margin-top:10px;padding: 8px;box-sizing: border-box;box-shadow: 0 0 15px #ccc}
    #list li{width: 80px;height: 80px;border-radius: 10px;display: flex;flex-direction: column;align-content: center;box-shadow: 0 4px 5px #ccc}
    #list li p:nth-of-type(1){width: 100%;height: 40px;text-align: center;line-height: 60px;color: gray;font-weight: bold;}
    #list li p:nth-of-type(2){width: 100%;height: 40px;text-align: center;line-height: 40px;font-weight: 800;color: gray;}
    
    #list2{min-height: 200px;height: auto!important;padding: 0 8px}
    #list2 li{width: 100%;height: 60px;border-radius: 10px;box-shadow: 0 0 10px #c2c2c0;margin-top:15px;display: flex;justify-content: space-between}
    #list2 li>div{width: 40%;height: 60px;text-align: left;line-height: 60px;padding: 0 10px;box-sizing: border-box;font-weight: bold}
    #list2 li>div span{font-size: 20px}
    #list2 li>div:nth-of-type(1) span:nth-of-type(1){color: red}
    #list2 li>div:nth-of-type(2) span:nth-of-type(1){color: gray}
    #list2 li>div:nth-of-type(2){width: 25%;display: flex;justify-content: space-between;align-items: center}
    #list2 li>div:nth-of-type(2) p{width: 25px;height: 25px;background: #f2c904;border-radius: 50%;text-align: center;line-height: 25px;color: #fff;margin-right: 10px}

  </style>
  