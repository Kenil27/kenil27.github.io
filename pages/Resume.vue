<template>
 <div class='container'>
   <div class = 'text'>
     
     <nuxt-link to="/" class="home-button">Home
     </nuxt-link>
     <h1>Resume</h1>

   </div>

<div class="left">
  </div>
    
 </div>  
  
 
 </template>

<script>
export default {
  data : function(){
    return {}
  },
  methods :{
    Details1 : function(){
      this.$router.push("details1");
    }
  } 
}
</script>

<style >

</style>
