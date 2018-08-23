<template>
    <div class="hello">
      <h1>店家</h1>
      <h2></h2>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'Dian',
    data(){
      return {
        str:"店家",
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
  