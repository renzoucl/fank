 <template>
        <div id="myshequ">
            <header>
                <div class="left">
                        <span class="iconfont icon-arrow_left_f"></span>
                </div>
                <div class="middle"></div>
                <div class="right">
                        <span class="iconfont icon-gengduo"></span>
                </div>
            </header>
        </div>
 </template>
      
    <script>
      export default {
        name: 'Myshequ',
        data () {
          return {
            msg: 'Welcome to Your Vue.js App'
          }
        }
      }
    </script>
      
      
<style scoped>
      header{height: 45px;width: 100%;background: #222222;display: flex;justify-content: space-between}
      header .left{width: 20%;height: 45px;background: red}
      header .middle{width: 60%;height: 45px;background: greenyellow}
      header .right{width: 20%;height: 45px;background: red}
      header .left span{font-size: 16px}


</style>
      