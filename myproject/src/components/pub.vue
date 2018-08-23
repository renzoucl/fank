<template>
    <div id="app1">
      <!-- <img src="./assets/logo.png">-->
       
      <header>模板</header>
      
    </div>
  </template>
  
  <script>
    
        //  var bw = (document.documentElement.clientWidth/6.4)+"px";        
        //  var htmlTag = document.getElementsByTagName("html")[0];        
        //      htmlTag.style.fontSize=bw; 
        //  var classid = location.search.split("=")[1];
         
  
  
  export default {
    name: 'Pub',
    data:function(){
       return {tit:"首页"}
    },
    methods:{
      getdata(msg){
          this.tit = msg
      },
      
    }
  }   
  
  
  
    
  
  </script>
  
  <style>
    
  </style>
  