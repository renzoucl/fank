<template>
    <div id="home">
       
          <mt-swipe :auto="4000"  id="lunbo" style="box-shadow: 0px 5px 10px #888888;">
            <mt-swipe-item style="background: red" class="img"><img src="static/1.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item style="background: green" class="img"><img src="static/2.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item style="background: orange" class="img"><img src="static/3.jpg" alt=""></mt-swipe-item>
          </mt-swipe>
       
          <div class="biaoti">
             <p><span class="iconfont icon-shouye1"></span>美食店铺</p>
             <p>MORE+</p>
          </div>
          <div class="toubiao">.------好店好铺美食多 . 缤纷美味更多精彩-------.</div>
      <!-- 美食 -->
          <div id="meishi">
              <div class="mei">
                  <div class="shang">
                    <img src="static/4.jpg">
                  </div>
                  <div class="sun">
                    <span>阳光咖啡</span>
                    <span class="iconfont icon-xin"></span>
                    <span>255</span>
                  </div>
                  <div class="xia">
                     <p><img src="static/8.jpg"><span class="iconfont icon-re"></span></span></p>
                     <div class="yan">
                       <p><span class="yan iconfont icon-yanjing"  > </span> <span>88</span></p>
                       <p><span class=" iconfont icon-qicheqianlian-"  ></span> <span>66</span></p>
                     </div>
                  </div>
              </div>

              <div class="mei">
                 
              </div>

              <div class="mei">

              </div>
          </div>
        <!-- 店铺活动 -->
          <div id="huodong" >
              <div class="biaoti">
                  <p><span class="iconfont icon-shouye1"></span>店铺活动</p>
                  <p>MORE+</p>
              </div>
              
   
          </div>
          <!-- 前后轮播 -->
          <div id="box">
			
             <div id="box1" class="card">
                <span>1</span>
              </div>
              
              <div id="box2" class="card">
                <span>2</span>
              </div>
              
              <div id="box3" class="card">
                <span>3</span>
              </div>
              
          </div> 
           
          <div id="daren">
            <div class="biaoti">
              <p><span class="iconfont icon-daren"></span>饭咖达人</p>
              <p>MORE+</p>
            </div>
          </div>
          <div class="toubiao">.------好店好铺美食多 . 缤纷美味更多精彩-------.</div>
          <!-- 左右轮播 -->
         <div id="zuoyou">
            <div class="wrap">
                <ul class="list">
                  <li> 1 </li>
                  <li> 2 </li>
                  <li> 3 </li>
                  <li> 4 </li>    
                </ul>
                <ul class="list">
                    <li> 1 </li>
                    <li> 2 </li>
                    <li> 3 </li>
                    <li> 4 </li>  
                  </ul>
              </div>
         </div>
         <div class="guanggao">
             <img src="static/w.png">
         </div>
         <!-- 专家 -->
         <div id="zhuanjia">
          <div class="biaoti">
            <p><span class="iconfont icon-yingyang"></span>营养专家</p>
            <p>MORE+</p>
          </div>
          <div class="toubiao">------好店好铺美食多 . 缤纷美味更多精彩------</div>
        </div>

        <div id="yingyang">
           <div class="content">
                <div class="zuo">
                    <div class="shang"></div>
                    <p>特朗普</p>
                    <p><span class="iconfont icon-dizhi"></span>美国.华盛顿特区.白宫</p>
                </div>
                <div class="you">
                  <h3>合理搭配每一天的饮食很重要</h3>
                  <p>爱对方的答复规范化个的韩国风格和健康就风哥哥和法国进口和</p>
                  <p><span class="iconfont icon-jian1"></span>  法国红酒哥哥个房间</p>
                  <p><span class="iconfont icon-hui1"></span>  请问而问题已入土十多个</p>
                </div>
           </div>


        </div>
    </div>
  </template>
  
  <script>
    // var bw = (document.documentElement.clientWidth/6.4)+"px";        
    //            var htmlTag = document.getElementsByTagName("html")[0];        
    //            htmlTag.style.fontSize=bw; 
    //          var classid = location.search.split("=")[1];

  export default {
    name: 'Home',
    data(){
      return {
        str:"首页",
        msg: ""
      }
    }
    ,
    mounted() {
      this.$emit("toparent",this.str)
      var box=document.getElementById("box");
			
			setInterval(function(){

				box.firstChild.className = "disappear";
				setTimeout(function(){

					box.appendChild(box.firstElementChild);
					
				},100)

				
			},1000)
    }
      
  
    
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    *{margin: 0;padding: 0;font-family: "微软雅黑"}
      #home{padding:0 8px}
      #lunbo{
         height: 150px;
         border-radius: 10px;
         padding:5px 0
      }
      #lunbo img{height: 150px;width: 100%;}

      .biaoti{height: 50px;display: flex;justify-content: space-between;align-items: center}
      .biaoti p{width: 150px;height: 50px;}
      .biaoti p:nth-of-type(1){font-size: 20px;font-weight: bold;text-align: left;line-height: 50px}
      .biaoti p:nth-of-type(1) span{color:#fcdd13;font-size: 20px;margin-right: 10px}

      .biaoti p:nth-of-type(2){width:80px;border-radius: 20px;height:30px;text-align: center;line-height: 30px;font-weight: bold;background: #fdd90a;color: #fff;}
      .toubiao{color: #fff;font-size: 14px;line-height: 30px;text-align: center;height: 30px;background: #fe6815;margin-top: 5px;border-top-left-radius: 8px;border-top-right-radius: 8px; }
    
      #meishi{height: 200px;;margin-top:10px;border-radius: 10px;display: flex;justify-content: space-between;}
      #meishi .mei{height: 200px;width: 32%;;border-radius: 10px;border: 1px solid gray;box-shadow: 0px 5px 10px #888888;}
      #meishi .mei .shang{height:100px;border-top-left-radius:10px;border-top-right-radius:10px;}
      #meishi .mei .shang img{height:100px;border-top-left-radius:10px;border-top-right-radius:10px;width: 100%}
      #meishi .mei .sun{height:25px;font-size: 14px;font-weight: bold;color: #696969;padding-left:5px;border-bottom: 1px solid gray;line-height: 25px;display: flex;justify-content: space-between}
      #meishi .mei .sun span:nth-of-type(1){font-size: 12px;font-weight: bold;}
      #meishi .mei .sun span:nth-of-type(2):hover{color: red;font-size: 12px}
      #meishi .mei .xia{height: 60px;margin-top: 5px;display: flex;justify-content: space-between}
      #meishi .mei .xia>p{width: 49%;height: 60px;position: relative}
      #meishi .mei .xia>p img{width: 100%;height: 60px}
      #meishi .mei .xia>p span{position: absolute;top: 0;right: 0;font-size: 24px;color: red}
      #meishi .mei .xia .yan{font-size: 16px;width: 49%;height: 60px;padding-top: 5px;box-sizing: border-box}
      #meishi .mei .xia .yan p:nth-of-type(1){width:100%;height:25px ;overflow: hidden}
      #meishi .mei .xia .yan p:nth-of-type(2){width: 100%;height:25px ;overflow: hidden}
      #meishi .mei .xia .yan p:nth-of-type(1) span:nth-of-type(1){color:#1ae4ed;font-weight: bold;margin-left: 5px;}
      #meishi .mei .xia .yan p:nth-of-type(2) span:nth-of-type(1){color:#f95f64;font-weight: bold;margin-left: 5px}
      #meishi .mei .xia .yan p:nth-of-type(1) span:nth-of-type(2){font-size: 12px;margin-top: 5px}
      #meishi .mei .xia .yan p:nth-of-type(2) span:nth-of-type(2){font-size: 12px}
     #huodong{margin-top: 20px}
     #daren{margin-top:40px}
     #zhuanjia{margin-top: 20px}
   /* 前后轮播 */
    #box{height: 200px;position: relative;}
  	#box>div{height: 100%;width: 100%;text-align: center;position: absolute;transition: all 1s;}
    #box span{font-size: 60px;font-weight: bold;}
		#box1{background: greenyellow;border-radius: 10px;box-shadow: 0px 5px 10px #888888;}
		#box2{background: orange;border-radius: 10px;box-shadow: 0px 5px 10px #888888;}
		#box3{background: purple;border-radius: 10px;box-shadow: 0px 5px 10px #888888;}
		#box>div:nth-of-type(1){transform: rotateX(-20deg) translatez(0);opacity: 0.1;width: 90%;}
		#box>div:nth-of-type(2){transform: rotateX(-20deg) translatez(40px);opacity: .5;width: 95%}
		#box>div:nth-of-type(3){transform: rotateX(-20deg) translatez(70px);opacity: 1;width: 100%} 
    
    #zuoyou{height:100px;background: yellow;margin-top: 10px;box-shadow: 0px 5px 10px #888888;}
    

    .guanggao{height: 50px;margin-top: 10px}
    .guanggao img{width: 100%;}
    /* 营养 */
    #yingyang{min-height: 200px;height: auto!important;margin-top: 5px;}
    #yingyang .content{height: 180px;display: flex;justify-content: space-between;border-left: 5px solid orange;border-radius: 10px;box-shadow: 0px 5px 10px #888888;}
    #yingyang .zuo{width: 30%;border-radius: 10px;padding-top: 10px}
    #yingyang .zuo .shang{width: 100%;height: 100px;background: yellow;border-radius: 50%}
    #yingyang .zuo p:nth-of-type(1){width: 100%;height: 20px;margin-top: 5px;text-align: center;line-height: 30px;font-weight: bold;font-size: 14px}
    #yingyang .zuo p:nth-of-type(2){width: 100%;height: 25px;margin-top: 5px;text-align: left;line-height: 30px;font-weight: bold;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;padding-left: 5px;font-size: 14px}
   
    #yingyang .you{width: 65%;border-radius: 10px;padding-top: 10px}
    #yingyang .you  h3{font-size: 16px;font-weight: bold}
    #yingyang .you p:nth-of-type(1){width: 100%;height: 40px;;margin-top: 15px;padding-right:15px;overflow: hidden;font-size:14px}
    #yingyang .you p:nth-of-type(2){width: 100%;height: 25px;;margin-top: 5px;padding-right:5px;color: gray;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size:14px}
    #yingyang .you p:nth-of-type(3){width: 100%;height: 25px;;margin-top: 10px;color: gray;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size:14px}
    #yingyang .you p:nth-of-type(2) span{color: #72cc8f;font-size: 20px}
    #yingyang .you p:nth-of-type(3) span{color: #72cc8f;font-size: 16px}

    .wrap {
	overflow:hidden;
	width:100%;
	height:100px;
	border:1px solid #000;
  display: flex;justify-content: space-between
	
}
.list {
	position:relative;
	top:0px;
	left:0px;
	width:100%;
	height:100%;
	border:1px solid #f00;
	list-style:none;
	animation:mymove 5s infinite linear;
  border: 1px solid red;
  display: flex;
  justify-content: space-between
}
.list li {
	width:120px;
	height:100px;
	border:1px solid white;
	background:blue;
	float:left;
	vertical-align:middle;
	text-align:center;
	line-height:98px;
	color:white;
	font-weight:bold;
}
    @-webkit-keyframes mymove {
      from {
          left:0px;
        }
        to {
          left:-100%;
        }
    }
	</style>
  
  