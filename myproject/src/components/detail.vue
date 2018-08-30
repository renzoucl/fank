<template>
        <div class="hello">
          
          
        </div>
</template>
      
      <script>
        import axios from "axios"
    export default {
           name: 'Detail',
            data () {
                return{
				     detail:[]
			   }
            },
           mounted(){
           console.log(this.$route.params.id)//接收id值
			var _this=this;
        
			axios({
				url:"http://jx.xuzhixiang.top/ap/api/detail.php",
				params:{id:_this.$route.params.id}
			})
			.then(function(data){
                _this.detail=data.data.data.pdesc
                console.log(_this.detail)
			})
 
		}
    }  
      </script>
      
      
      <style scoped>
     
      </style>
      