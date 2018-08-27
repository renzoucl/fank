<template>
    
      <div id="ying">


        <div id="leader" @click="tap()">
          <div><span class="iconfont icon-hot-full" style="color:#fcdd13"></span><span style="color:#fcdd13">热点</span></div>
          <div><span class="iconfont icon-meishi"></span><span>疑症</span></div>
          <div><span class="iconfont icon-shipin"></span><span>定制</span></div>
        </div>
        
        <div class="content1">
          <div style="display: block;">
              <h3>内容1</h3>
          </div>
          <div style="display: none;">
              <h3>内容2</h3>
          </div>
          <div style="display: none;">
              <h3>内容3</h3>
          </div>
          <div style="display: none;">
              <h3>内容4</h3>
          </div>



      </div>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'Ying',
    data(){
      return {
        str:"营养师",
        msg: ""
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
       }
    },
    mounted() {
      this.$emit("toparent",this.str)
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
div.content1>div:nth-of-type(1) {
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
} 
    
  </style>
  