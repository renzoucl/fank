<template>
        <div id="gouwuche">
            <header>
                <div><p @click="todian()"><span class="iconfont icon-203"></span></p></div>
                <div>购物车</div>
                <div><!--<p><span class="iconfont icon-sousuo"></span></p>--></div>  
            </header>  
            <ul id="list">
                <li v-for="(item,i) in arr">
                    
                    <el-checkbox v-model="checked" class="zuo1"></el-checkbox>
                    <div class="zuo"><img src="" alt=""></div>
                    <div class="you"> 
                        <div>
                            <div class="name">{{item.name}}</div>
                            <p>配送费：￥3</p>
                            <div class="jia">
                                    <i class="el-icon-remove" @click="jian(i)"></i>
                                     <span class="num">0</span>
                                    <i class="el-icon-circle-plus" @click="jia(i)"></i>
                            </div>
                        </div>
                        <div>
                            <p>{{item.price}}</p>
                            <i class="el-icon-delete shan" @click="delate(i)"></i>
                        </div>
                    </div>
                
                </li>
                
                
                    
            
                
            </ul>          
        </div>
        <!-- moban -->


 </template>
      
      <script>
          import $ from 'jquery'

          import Checkbix from "checkbix"
          Checkbix.init();
      export default {
        name: 'Gouwuche',
        data () {
          return {
            checked: true,
            num:0,
            arr:[
                {name:"是个风格的不",price:120},
                {name:"问题如同",price:190},
                {name:"只需发个",price:150}
            ]
          }
        },
        methods:{
            todian(){
                this.$router.push("/home")
            },
            delate(i){
                $(".shan").eq(i).parents("li").remove()
                    
            },
            jia(i){
                var a = $(this).eq(i).prev().text();
                console.log(a++)
				a++;
                
                
               
            },
            jian(i){
                var num = Number($(".num").text())
                console.log(num)
                // $("#list>li .num").eq(i).text(num) 
                
            }

        },
        mounted() {
            // $("#list>li").on("click",function(){
            //     var index = $(this).index()
            //     console.log(index)
            // })
        },
      }
      </script>
      
      
      <style scoped>
      header{height:45px;background:#222222;color:#fff;text-align: center;line-height: 45px;font-size:20px;display: flex;justify-content: space-between;overflow: hidden;}
	header>div{height:45px;width: 100px;}
	header>div:nth-of-type(1){text-align: left;padding-left: 5px;font-size: 16px;display: flex;align-items: center;text-align: center;line-height: 28px;}
	
	header>div:nth-of-type(1) p{width: 28px;height: 28px;background: #fddb13;border-radius: 50%;margin-left: 5px;text-align: center;line-height: 28px;}
	header>div:nth-of-type(1) span{font-size: 22px;color: #fff;display: block;}
	
	header>div:nth-of-type(3){text-align: right;padding-right: 5px;display: flex;align-items: center;justify-content: flex-end;text-align: center;line-height: 28px;}
	header>div:nth-of-type(3) span{font-size: 22px;color: #fff}
	header>div:nth-of-type(3) p{width: 28px;height: 28px;background: #fddb13;border-radius: 50%;margin-right: 5px}
      
      
      #list{min-height: 200px;height: auto!important;padding: 10px}
      #list li{height: 110px;width: 100%;margin-top: 10px;display: flex;justify-content: space-between;align-items: center;padding: 5px;box-sizing: border-box;box-shadow: 0 0 5px #ccc}
      
      /* #list li .zuo1{width: 60px;height: 60px;} */
      #list li .zuo{width: 30%;height: 100%;background: red}
      #list li .zuo img{width: 20%;height: 100%;}

      #list li .you{width: 60%;height: 100%;display: flex;justify-content: space-between}
      #list li .you>div:nth-of-type(1){width: 70%;height: 90%;font-family: "微软雅黑"}
      #list li .you>div:nth-of-type(1) .name{width: 100%;height: 40px;font-size: 14px;font-weight: bold;white-space: wrap;overflow: hidden;text-overflow: ellipsis;color: #333}
      #list li .you>div:nth-of-type(1) .jia{font-size: 20px;color: blue;font-weight: bold;margin-top: 5px;}
      #list li .you>div:nth-of-type(1) p{color: gray;font-size: 12px;margin-top: 5px;}
      #list li .you>div:nth-of-type(2){width: 30%;height: 100%;}
      #list li .you>div:nth-of-type(2) p{width: 100%;height: 50%;text-align: center;line-height:50px;font-size: 20px;color: red;font-weight: bold }
      #list li .you>div:nth-of-type(2) i{width: 100%;height: 50%;text-align: center;line-height:50px;font-size: 20px;color: red;font-weight: bold}
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      </style>
      