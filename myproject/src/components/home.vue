<template>
    <div class="hello">
      <h1>首页</h1>
     
      <p>66666666666666666666666666</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    data(){
      return {
        str:"首页",
        msg: ""
      }
    },
    mounted() {
      this.$emit("toparent",this.str)
    },
      

    
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
      p{
         font-size: 2rem
      }
  </style>
  