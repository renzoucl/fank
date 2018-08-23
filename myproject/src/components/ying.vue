<template>
    <div class="hello">
      <h1>营养师</h1>
      <h2>ggggggggggg</h2>
      
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
    mounted() {
      this.$emit("toparent",this.str)
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
  