<template>
    <div class="hello">
      <h1>我的</h1>
      <h2></h2>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'Mine',
    data(){
      return {
        str:"我的",
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
  
  </style>
  