<template>
    <div class="hello">
      <h1>社区</h1>
      <h2></h2>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'Shequ',
    data(){
      return {
        str:"社区",
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
  