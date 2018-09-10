<template>
    <div id="app">
        <router-view></router-view>
      </div>
  </template>
  
  <script>
    
  
  
  export default {
    name: 'App',
   
  }   
  
  </script>
  
  <style>
  *{margin:0;padding: 0}
  body,ul,li,dl,dt,dd,p,ol,h1,h2,h3,h4,h5,h6,form,img,table,fieldset,legend,menu,input,button{margin:0; padding:0;}
  ul,li,ol{list-style:none;}
  img,fieldset{border:0; }
  img{display:block;}
  a{text-decoration:none; color:#333;}
  h1,h2,h3,h4,h5,h6{font-weight:100;}
  body{ font-family:"微软雅黑";}
#app{
     height: 100vh;display: flex;flex-direction: column;flex: 1;
  }
  </style>
