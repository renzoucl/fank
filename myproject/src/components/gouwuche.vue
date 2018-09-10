<template>
        <div id="gouwuche">
            <header>
                <div><a href="javascript:history.go(-1)"><span class="iconfont icon-203"></span></a></div>
                <div>购物车</div>
                <div><router-link to='/home' tag=p><span class="iconfont icon-shouye"></span></router-link></div>  
            </header>  
            <ul id="list">
                <li v-for="(item,i) in arr">
                        <!-- v-model="checked" -->
                    <!-- <el-checkbox class="zuo1" ></el-checkbox> -->
                    <div id="box" :ref="item.pid" v-if='isshow'>
                    	<input type="checkbox" class="ipt" v-model = "item.checked">
	                    <div class="zuo"><img :src="item.pimg" alt="a"></div>
	                    <div class="you"> 
	                        <div>
	                            <div class="name">{{item.pname}}</div>
	                            <p>配送费：￥3</p>
	                            <div class="jia">
	                                    <i class="el-icon-remove" @click="jian(i,item.pid)"></i>
	                                    <span class="num">{{item.pnum}}</span>
	                                    <i class="el-icon-circle-plus" @click="jia(i,item.pid)"></i>
	                            </div>
	                        </div>
	                        <div>
	                            <p>{{item.pprice}}</p>
	                            <i class="el-icon-delete shan" @click="delate(i,item.pid)"></i>
	                        </div>
	                    </div>
                    </div>
                    
                
                </li>
                
                
                    
            
                
            </ul>    
            <div id="jiesuan">
                <input type="checkbox"  v-model = "allChecked" @click="handleChecked()">
                <div class="money">合计：<span>￥{{pricetotale}}</span></div>
                <div class="btn">结算</div>
              
            </div>      
        </div>
        <!-- moban -->


 </template>
      
      <script>
          import $ from 'jquery'
          import axios from "axios"
          import Checkbix from "checkbix"
          Checkbix.init();
      export default {
        name: 'Gouwuche',
        data () {
          return {
            allChecked:false,
            checked: true,
            isshow:true,
            arr:[],
            arr1:[],
            val:"",
            checkval:[],
            price:0,
            // num:0,
          }
        },
        methods:{
          
            //删除
            delate(i,id){
            	var _this = this;
            	
            	console.log(this.$refs[id])
            	this.isshow=false

                axios({
                	method:"get",
                    url:"http://jx.xuzhixiang.top/ap/api/cart-delete.php",
                    params:{uid:111,pid:id}
                })
                .then(function(data){
//                  alert(data.data.msg)
//                  _this.$router.push("/gouwuche?id=111")
                   
                })
                
            },
            jia(i,id){
                var _this = this;
                 this.arr[i].pnum++
//              console.log(id)
                axios({
                	method:"get",
                    url:"http://jx.xuzhixiang.top/ap/api/cart-update-num.php",
                    params:{uid:111,pid:id,pnum:_this.arr[i].pnum}
                })
                .then(function(data){
//                  alert(data.data.msg)
//                    console.log(data.data)
               

                    
                })
                
            },
            jian(i,id){
                var _this = this;
                this.arr[i].pnum--
                if( this.arr[i].pnum<1){
                	 this.arr[i].pnum=1
                }
                
                 axios({
                 	method:"get",
                    url:"http://jx.xuzhixiang.top/ap/api/cart-update-num.php",
                    params:{uid:111,pid:id,pnum:_this.arr[i].pnum}
                })
                .then(function(data){
//                  alert(data.data.msg)
                    //console.log(data.data)
//                  _this.$router.push("/gouwuche?id=111")
                   
                })
            },
            handleChecked(item){
                  //全选
				if(this.allChecked==false) {
					for(var i = 0; i < this.arr.length; i++) {
						var item = this.arr[i];
						item.checked = true;
					}
				} else {  //取消全选
					for(var i = 0; i < this.arr.length; i++) {
                        var item = this.arr[i];
						item.checked = false;
					}
				}
				this.allChecked = !this.allChecked;

            }

        },
        
        mounted() {
            var that = this;
            axios({
				url:"http://jx.xuzhixiang.top/ap/api/cart-list.php",
				params:{id:111}
			})
			.then(function(data){
                that.arr=data.data.data
//              console.log(that.arr)
                
			})
        },

        watch:{
		 	'$route'(a){
//		 		console.log(a.query.id)
		 		var _this=this;
		 		 _this.isshow=true;
                axios({
			 		url:"http://jx.xuzhixiang.top/ap/api/cart-list.php",
			 		params:{id:111}
		 		})
		 		.then(function(data){
                  _this.arr=data.data.data
                 
   			})
		 	}
		},

        computed:{
            //计算总价
         pricetotale: function() {
            var tatol = 0;
            for(var i = 0; i < this.arr.length; i++) {
                var item = this.arr[i];
                if(item.checked==true){
                    tatol += Number(item.pprice) * item.pnum
                }
            }
            //千位分隔符正则
            return tatol.toString().replace(/\B(?=(\d{3})+$)/g, ',')
        }
        }
      }
      </script>
      
      
      <style scoped>
      header{height:45px;background:#222222;color:#fff;text-align: center;line-height: 45px;font-size:20px;display: flex;justify-content: space-between;overflow: hidden;display: flex}
	header>div{height:45px;width: 100px;}
	header>div:nth-of-type(1){text-align: left;padding-left: 5px;font-size: 16px;display: flex;align-items: center;text-align: center;line-height: 28px;}
	
	header>div:nth-of-type(1) a{width: 30px;height: 28px;background: #fddb13;border-radius: 50%;margin-left: 5px;text-align: center;line-height: 28px;display: block;}
	header>div:nth-of-type(1) span{font-size: 22px;color: #fff;display: block;}
	
	header>div:nth-of-type(3){text-align: right;padding-right: 5px;display: flex;align-items: center;justify-content: flex-end;text-align: center;line-height: 28px;}
	header>div:nth-of-type(3) span{font-size: 20px;color:#333;}
	header>div:nth-of-type(3) p{width: 28px;height: 28px;background: #fddb13;border-radius: 50%;margin-right: 5px}
      
      
      #list{min-height: 200px;height: auto!important;padding: 10px}
      #list li{height: 110px;width: 100%;}
      #box{height: 110px;width: 100%;margin-top: 10px;display: flex;justify-content: space-between;align-items: center;padding: 5px;box-sizing: border-box;box-shadow: 0 0 5px #ccc;}
      /* #list li .zuo1{width: 60px;height: 60px;} */
     #list li div .zuo{width: 30%;height: 100%;}
     #list li div .zuo img{width: 100%;height: 100%;}

      #list li div .you{width: 60%;height: 100%;display: flex;justify-content: space-between}
     #list li div .you>div:nth-of-type(1){width: 70%;height: 90%;font-family: "微软雅黑"}
      #list li div .you>div:nth-of-type(1) .name{width: 100%;height: 40px;font-size: 14px;font-weight: bold;white-space: wrap;overflow: hidden;text-overflow: ellipsis;color: #333}
     #list li div .you>div:nth-of-type(1) .jia{font-size: 20px;color: blue;font-weight: bold;margin-top: 5px;}
      #list li div .you>div:nth-of-type(1) p{color: gray;font-size: 12px;margin-top: 5px;}
     #list li div .you>div:nth-of-type(2){width: 30%;height: 100%;}
      #list li div .you>div:nth-of-type(2) p{width: 100%;height: 50%;text-align: center;line-height:50px;font-size: 20px;color: red;font-weight: bold ;overflow: hidden;}
      #list li div .you>div:nth-of-type(2) i{width: 100%;height: 50%;text-align: center;line-height:50px;font-size: 20px;color: red;font-weight: bold}
      
      
      
      #jiesuan{width: 100%;height: 50px;margin-top: 10px;display: flex;justify-content: space-around;align-items: center}
      #jiesuan .money{width: 50%;height: 50px;text-align: center;line-height: 50px;font-size: 20px;font-weight: bold}
      #jiesuan .btn{width: 30%;height: 40px;background: orangered;text-align: center;line-height: 40px;font-size: 20px;font-weight: bold;border-radius: 20px;box-shadow: 0 2px 5px gray;color: #fff}
      #jiesuan .money span{color: orangered}
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      </style>
      