<template>
    
      <div id="ying">


        <div id="leader" @click="tap()">
          <div><span class="iconfont icon-hot-full" style="color:#fcdd13"></span><span style="color:#fcdd13">热点</span></div>
          <div><span class="iconfont icon-meishi"></span><span>疑症</span></div>
          <div><span class="iconfont icon-shipin"></span><span>定制</span></div>
        </div>
        
        <div class="content1">
          <div style="display: block;">
               <!-- 轮播 -->
            <div id="box">
			
              <div id="box1" class="card" @click="xiangqing()">
                
               </div>
               
               <div id="box2" class="card" @click="xiangqing()">
                
               </div>
               
               <div id="box3" class="card" @click="xiangqing()">
                 
               </div>
               
             </div> 

             <div class="biaoti">
              <p><span class="iconfont icon-shouye1"></span>推荐医师</p>
              <p>MORE+</p>
           </div>
     <!-- 左右轮播图 -->
            <div id="daren">
                        
              <ul class="list">
                <li v-for='item in arr'>
                  <div class="tu">
                      <img :src="item.pimg" alt="">
                  </div>
                  <p>{{item.pname}}</p>
                  
                  <p><span class="iconfont icon-xin"></span>粉丝<span>16</span>万</p>
                </li>
                
              </ul>
              
          
          </div>

           <div class="biaoti">
              <p><span class="iconfont icon-shouye1"></span>时下热点</p>
              <p>MORE+</p>
           </div>

           <ul id="hot">
              <li><span>1、眼睛干涩</span><span class="jindu"></span><span class="iconfont icon-xin">  91°</span></li>
              <li><span>2、眼睛干涩</span><span class="jindu"></span><span class="iconfont icon-xin">  91°</span></li>
              <li><span>3、眼睛干涩</span><span class="jindu"></span><span class="iconfont icon-xin">  91°</span></li>
           </ul>
            
          </div>

   <!-- 第二页 -->

          <div style="display: none;">
            <div class="biaoti" style="margin-top:0">
              <p><span class="iconfont icon-shouye1"></span>推荐医师</p>
              <p>MORE+</p>
           </div>
           <!-- 左右轮播图 -->
           <div id="daren">
                        
            <ul class="list">
              <li v-for='item in arr'>
                <div class="tu">
                    <img :src="item.pimg" alt="">
                </div>
                <p>{{item.pname}}</p>
                
                <p><span class="iconfont icon-xin"></span>粉丝<span>16</span>万</p>
              </li>
             
            </ul>
          
        
              </div>

              <div class="biaoti" style="margin-top:0">
                <p><span class="iconfont icon-shouye1"></span>推荐医师</p>
                <p>MORE+</p>
             </div>
             <ul id="life">
                 <li>
                    <div>的双方各</div>
                    <div>的规划</div>
                    <div>风格的话</div>
                 </li>
                 <li>
                  <div>的双方各</div>
                  <div>的规划</div>
                  <div>风格的话</div>
               </li>

             </ul>

          </div>
          <div style="display: none;">
              <ul id="imgguanggao">
                  <li>
                     <img  src="static/ding.jpg">
                  </li>
                  <li>
                    <img  src="static/ding.jpg">
                 </li>
              </ul>
          </div>
          

      </div>
      
    </div>
  </template>
  
  <script>
  	
  	import axios from 'axios'
  	
  export default {
    name: 'Ying',
    data(){
      return {
        str:"营养师",
        msg: "",
        arr:[]
      }
    },
    methods:{

       tap(){
         
          $("#leader>div").on("click",function(){
           $("#leader span").css({"color":""})
            var index = $(this).index();
            $(this).find("span").css({"color":"orange"})
            $(".content1>div").eq(index).show().siblings().hide()   
          })
       },
       xiangqing(){
          this.$router.push("/fooddetail")
       }
    },
    mounted() {
    	var _this=this
      this.$emit("toparent",this.str)
      var box=document.getElementById("box");
			
			setInterval(function(){

				box.firstChild.className = "disappear";
				setTimeout(function(){

					box.appendChild(box.firstElementChild);
					
				},100)

				
			},1000)
		axios({
				url:'http://jx.xuzhixiang.top/ap/api/productlist.php'
			}).then(function(data){
				console.log(data.data.data)
				_this.arr=data.data.data
			})
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    #ying{padding: 0 5px}
    #leader{width: 100%;height: 40px;display: flex;justify-content: space-between;position: fixed;top:45px;left: 0;z-index: 9999;}
    #leader>div{width: 33.33%;height:40px;background: #fff;border-bottom-left-radius:10px;border-bottom-right-radius:10px;box-shadow: 0px 0px 5px #888888;text-align: center;line-height: 40px;font-weight: bold}
    #leader>div span{color: #fb5a5b;margin-right: 5px;font-weight: bold}


.content1{width: 100%;height: 100vh;margin-top: 45px;position: relative;}
.content1>div{position: absolute;top: 0px;left: 0;width: 100%;height: 100vh;}   
/* div.content1>div:nth-of-type(1) {
	background:wheat;
}
div.content1>div:nth-of-type(2) {
	background:aquamarine;
}
div.content1>div:nth-of-type(3) {
	background:palegreen;
}
div.content1>div:nth-of-type(4) {
	background:plum;
}  */


/* 前后轮播 */
#box{height: 200px;position: relative;}
  	#box>div{height: 100%;width: 100%;text-align: center;position: absolute;transition: all 1s;}
    #box span{font-size: 60px;font-weight: bold;}
		#box1{background:url('../../static/110.jpg') no-repeat center/cover;border-radius: 10px;box-shadow: 0px 5px 10px #ddd;}
		#box2{background:url('../../static/111.jpg') no-repeat center/cover;border-radius: 10px;box-shadow: 0px 5px 10px #ddd;}
		#box3{background:url('../../static/112.jpg') no-repeat center/cover;border-radius: 10px;box-shadow: 0px 5px 10px #ddd;}
		#box>div:nth-of-type(1){transform: rotateX(-20deg) translatez(0) translatex(15%);opacity: 0.1;width: 70%;}
		#box>div:nth-of-type(2){transform: rotateX(-20deg) translatez(40px) translatex(5%);opacity: .5;width: 85%}
		#box>div:nth-of-type(3){transform: rotateX(-20deg) translatez(70px);opacity: 1;width: 100%} 
    
      .biaoti{height: 50px;display: flex;justify-content: space-between;align-items: center;margin-top: 20px;border-bottom: 1px solid #ddd}
      .biaoti p{width: 150px;height: 50px;}
      .biaoti p:nth-of-type(1){font-size: 20px;font-weight: bold;text-align: left;line-height: 50px}
      .biaoti p:nth-of-type(1) span{color:#fcdd13;font-size: 20px;margin-right: 10px}
      .biaoti p:nth-of-type(2){width:80px;border-radius: 20px;height:30px;text-align: center;line-height: 30px;font-weight: bold;background: #fdd90a;color: #fff;}

  #daren {
	overflow:hidden;
	width:100%;
	height:160px;
	
  display: flex;justify-content: space-between
	
}
#daren .list {
	position:relative;
	top:0px;
	left:0px;
	width:100%;
	height:100%;
	
	list-style:none;
	animation:mymove 5s infinite linear;
  
  display: flex;
  justify-content: space-between
}
#daren .list li {
	width:120px;
	height:150px;
	border:1px solid white;
	border: 1px solid gray;
	float:left;
	vertical-align:middle;
	text-align:center;
	line-height:98px;
	color:white;
	font-weight:bold;
  border-radius: 10%
}
    @-webkit-keyframes mymove {
      from {
          left:0px;
        }
        to {
          left:-100%;
        }
    }
#daren{margin-top: 5px}
#daren li{border: 1px solid gray}
#daren li .tu{width: 100%;height: 90px;border-radius: 50%;padding: 0 15px;box-sizing: border-box}
#daren li .tu img{width: 100%;height: 90px;border-radius: 50%}
#daren li p:nth-of-type(1){width: 100%;height: 20px;color: #000;margin-top: 3px;text-align: center;line-height: 20px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
#daren li p:nth-of-type(2){width: 100%;height: 20px;margin-top: 5px;color: #000;text-align: center;line-height: 20px;}
#daren li p:nth-of-type(2) span{color: red;margin-right: 5px}

/* 热点 */
#hot{min-height: 200px;height: auto!important;margin-top: 10px}
#hot li{margin-top:15px;display: flex;justify-content: space-between;box-shadow: 0 0 5px #ddd;border-radius: 10px;padding: 5px}
#hot li span{display: inline-block;}
#hot li span:nth-of-type(1){width: 40%;height: 20px;font-size: 12px;color: gray}
#hot li span:nth-of-type(3){width: 20%;height: 20px;font-size: 12px;color: red;margin-left: 10px}

#hot .jindu{display: inline-block;width: 100%;height: 5px;background: yellow;margin-top: 5px}


/* 第二页 */

#life{min-height: 200px;height: auto!important;margin-top: 10px}
#life li{width: 100%;height: 30px;display: flex;justify-content: space-between;margin-top: 10px}
#life li>div{width: 30%;height: 30px;text-align: center;line-height: 30px;border-radius: 8px;font-size: 14px;color: gray;box-shadow: 0 0 5px #ccc}
 

 /* 第三页 */
 #imgguanggao{min-height: 200px;height: auto!important;margin-top: 10px}
 #imgguanggao li{width: 100%;height: 120px;background: gray;margin-top: 5px;border-radius: 5px}
 #imgguanggao li img{width: 100%;height: 120px;border-radius: 5px}
 
 
  </style>
  