 <template>
        <div id="myshequ">
            <header>
                <div class="left" @click="toshequ()">
                        <span class="iconfont icon-arrow_left_f" ></span>
                </div>
                <div class="middle">我的社区</div>
                <div class="right">
                        <span class="iconfont icon-gengduo"></span>
                </div>
            </header>
            <div id="bj">
                 <div class="bjcon">
                     <div class="touxiang">
                           <img src="static/222.jpg">
                     </div>
                     <div class="you">
                         <p>厨艺交流社区</p>
                         <p><span>关注：3.6K</span><span>帖子数：123456</span></p>
                         <p>★★★★★</p>
                     </div>
                 </div>
            </div>
            <div id="leader" @click="tap()">
                    <div><span class="iconfont icon-hot-full" style="color:#fcdd13"></span><span style="color:#fcdd13">最新帖子</span></div>
                    <div><span class="iconfont icon-shouxieqianming"></span><span>精品帖子</span></div>
                    <div><span class="iconfont icon-jiangbei"></span><span>活跃排名</span></div>
                    
           </div>
           <div id="xia">
                <div class="content1">
                        <div style="display: block;">
                                <ul id="list2">
                                        <li>
                                          <div>
                                              <span class="iconfont icon-zhiding"></span>
                                          </div>
                                          <div>"撒发生的德国和符合国家德国和符合国家德国和符合国家和看见"</div>
                                          <div>
                                              <span class="iconfont icon-xinxi"> 655</span>
                                          </div>
                                        </li>
                                        <li>
                                            <div>
                                                <span class="iconfont icon-zhiding"></span>
                                            </div>
                                            <div>"撒发生的德国和符合国家德国和符合国家德国和符合国家和看见"</div>
                                            <div>
                                                <span class="iconfont icon-xinxi"> 655</span>
                                            </div>
                                          </li>
                                          
                                    </ul>
                                    <ul id="pinglun">
                                            <li>
                                                <h3>哎菠萝的小猫</h3>
                                                <p><span class="iconfont icon-dizhi"></span>海底捞.太原店<span>13:55</span></p>
                                                <div>时代的的规范化个就好空间来看反对法国和加快法规和法国进口了</div>
                                                <ul class="pingtu">
                                                   <li></li>
                                                   <li></li>
                                                   <li></li>
                                                   <li></li>
                                                   <li></li>
                                                </ul>
                                                <div class="touxiang" @click="tomyfriend()"><img src="static/222.jpg" alt=""></div>
                                                <div class="xiaoxi">
                                                   <span class="iconfont icon-yanjing">  666</span>
                                                   <span class="iconfont icon-xinxi">  888</span>
                                                </div>
                                                 <!-- 评论 -->
                                               <!-- <ul class="pinglun2">
                                                   <li><span>哈哈哈</span>这家海底捞怎么样啊？</li>
                                                   <li><span>哈哈哈</span>这家海底捞怎么样啊？</li>
                                                   
                                               </ul> -->
                                            </li>
                                           
                                            <li>
                                               <h3>哎菠萝的小猫</h3>
                                               <p><span class="iconfont icon-dizhi"></span>海底捞.太原店<span>13:55</span></p>
                                               <div>时代的的规范化个就好空间来看反对法国和加快法规和法国进口了</div>
                                               <ul class="pingtu">
                                                  <li></li>
                                                  <li></li>
                                                  <li></li>
                                                  <li></li>
                                                  <li></li>
                                               </ul>
                                               <div class="touxiang"><img src="static/222.jpg" alt=""></div>
                                               <div class="xiaoxi">
                                                  <span class="iconfont icon-yanjing">  666</span>
                                                  <span class="iconfont icon-xinxi">  888</span>
                                               </div>
                                                <!-- 评论 -->
                                              <!-- <ul class="pinglun2">
                                                  <li><span>哈哈哈</span>这家海底捞怎么样啊？</li>
                                                  <li><span>哈哈哈</span>这家海底捞怎么样啊？</li>
                                                  
                                              </ul> -->
                                           </li>
                                       </ul>

                        </div>
                        <div style="display: none;">2</div>
                        <div style="display: none;">3</div>
                    </div>
           </div>
           <!-- <div id="xia">
                <div class="content1">
                        <div style="display: block;">1</div>
                        <div style="display: none;">2</div>
                        <div style="display: none;">3</div>
                    </div>
           </div> -->

           


        </div>
 </template>
      
    <script>
      export default {
        name: 'Myshequ',
        data () {
          return {
            msg: 'Welcome to Your Vue.js App'
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
       toshequ(){
           this.$router.push("/mine")
       },
       tomyfriend(){
          this.$router.push("/friendshome")
       }
    },
      }
    </script>
      
      
<style scoped>
   *{margin:0;padding:0}
      header{height: 45px;width: 100%;background: #222222;display: flex;justify-content: space-between;position: fixed;top: 0;left: 0;z-index: 9999}
      header .left{width: 10%;height: 45px;text-align: center;line-height: 45px}
      header .middle{width: 60%;height: 45px;text-align: center;line-height: 45px;font-weight: bold;color: #fff}
      header .right{width: 10%;height: 45px;text-align: center;line-height: 45px}
      header .left span{font-size: 26px;color: #fce452}
      header .right span{font-size: 20px;color: #fce452}

     #bj{width: 100%;height: 80px;background:url('../../static/bjw.jpg') no-repeat fixed center/cover;overflow: hidden;display: flex;justify-content: left;align-items: center;margin-top: 45px}
     #bj .bjcon{width: 250px;height: 60px;display: flex;justify-content: space-between}
     
     #bj .bjcon .touxiang{width: 60px;height: 60px;border-radius: 50%}
     #bj .bjcon .touxiang img{width: 60px;height: 60px;border-radius: 50%}

     #bj .bjcon .you{width: 100%;height: 60px;padding-left: 5px}
     #bj .bjcon p:nth-of-type(1){width: 100%;height: 20px;font-size: 12px;color: #fce452;font-weight: bold}
     #bj .bjcon p:nth-of-type(2){width: 100%;height: 20px;font-size: 12px;color: #fff;font-weight: bold}
     #bj .bjcon p:nth-of-type(3){width: 100%;height: 20px;font-size: 12px;color: orangered;font-weight: bold}
     
     #leader{width: 100%;height: 40px;display: flex;justify-content: space-between;z-index: 9999;padding: 0 8px;box-sizing: border-box}
    #leader>div{width: 33.33%;height:40px;background: #fff;border-bottom-left-radius:10px;border-bottom-right-radius:10px;box-shadow: 0px 0px 5px #888888;text-align: center;line-height: 40px;font-weight: bold}
    #leader>div span{color: #fb5a5b;margin-right: 5px;font-weight: bold}
     

     #xia{padding: 0 5px}
    .content1{width: 100%;height: 100vh;position: relative;box-sizing: border-box}
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

#list2{min-height: 50px;height: auto!important;padding: 0 8px}
    #list2 li{width: 100%;height: 40px;border-radius: 10px;box-shadow: 0 0 10px #c2c2c0;margin-top:15px;display: flex;justify-content: space-between}
    #list2 li>div{text-align: center;line-height:40px;font-weight: bold}
    #list2 li>div:nth-of-type(1){width: 20%;height: 40px;}
    #list2 li>div:nth-of-type(2){width: 60%;height: 40px;overflow: hidden;color: #555;font-size: 14px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
    #list2 li>div:nth-of-type(3){width: 20%;height: 40px;}
    
    #list2 li>div span{font-size: 20px} 
     #list2 li>div:nth-of-type(1) span{color: red}
     #list2 li>div:nth-of-type(3) span{color: blue;font-size: 14px}
    
   /* #list2 li>div:nth-of-type(2){width: 25%;display: flex;justify-content: space-between;align-items: center}
    #list2 li>div:nth-of-type(2) p{width: 25px;height: 25px;background: #f2c904;border-radius: 50%;text-align: center;line-height: 25px;color: #fff;margin-right: 10px} */
/* 第三页 */
#pinglun{min-height: 205px;height: auto!important;margin-top: 10px}
#pinglun>li{min-height: 50px;height: auto!important;border-radius: 10px;margin-top: 10px;margin-left: 15px;padding: 10px 20px 0px 70px;box-sizing: border-box;position: relative;box-shadow:0 0 10px #555 }
#pinglun>li h3{font-size: 16px;font-weight: bold;color: orange}
#pinglun>li p{font-size: 16px;color: gray}
#pinglun>li p span{color: orange;margin: 0 5px}
#pinglun>li>div{min-height: 20px;height: auto!important;font-size: 16px;font-weight: bold;color: #555;margin: 10px 0}
#pinglun>li .pingtu{display: flex;justify-content: space-between;margin-top: 10px;}



#pinglun>li .pingtu li{width: 100px;height: 50px;border: 1px solid red;margin: 0;padding: 0;border-radius: 5px;margin-right: 2px}
#pinglun>li .pingtu li img{width: 100px;height: 50px;}

#pinglun>li .touxiang{width: 60px;height: 80px;border: 1px solid #000;box-shadow: 0 2px 10px gray;border-radius: 50%;position:absolute;top: -5px;left: -5px}
#pinglun>li .touxiang img{width: 60px;height: 60px;border-radius: 50%}
#pinglun>li .xiaoxi{height: 100px;width: 100%;border-top: 1px solid gray;display: flex;justify-content: space-between}

#pinglun>li .xiaoxi span{color: lightblue}
#pinglun>li .pinglun2{min-height: 20px;height: auto!important;border: 1px solid #000;margin-top: -10px;margin-left: -60px;background: #fff;border-radius: 5px}
#pinglu>li .pinglun2 li{width: 90%;height: 20px;margin:0;padding: 0;line-height: 20px;font-size: 12px}
</style>
      