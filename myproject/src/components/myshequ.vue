 <template>
        <div id="myshequ">
            <header>
                <div class="left">
                        <span class="iconfont icon-arrow_left_f"></span>
                </div>
                <div class="middle">我的社区</div>
                <div class="right">
                        <span class="iconfont icon-gengduo"></span>
                </div>
            </header>
            <div id="bj">
               
            </div>
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
      header .left{width: 10%;height: 45px;text-align: center;line-height: 45px}
      header .middle{width: 60%;height: 45px;text-align: center;line-height: 45px;font-weight: bold;color: #fff}
      header .right{width: 10%;height: 45px;text-align: center;line-height: 45px}
      header .left span{font-size: 26px;color: #fce452}
      header .right span{font-size: 20px;color: #fce452}

     #bj{width: 100%;height: 80px;background: red}
</style>
      