<template>
 <div class='container'>
   <div class = 'text'>
      <nuxt-link to="/" class="home-button">Home
     </nuxt-link>
     <h1>Contact</h1>
        
          <div class="main">
          <div class="row1">
          <input type="text" class="action" placeholder="Full Name">
          </div>
          <div class="row1">
          <input type="text" class="action"  placeholder="Email ID">
          </div>
          <div class="row1">
          <input type="text" class="action" placeholder="Phone Number">
          </div>
          <div class="row1">
          <input type="text" class="message" placeholder="Write your message">
          </div>
          <button class="submit"> Submit </button>
          </div>
        
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

<style scoped>
.row1{
  margin-bottom: 15px;
}
.action{
  height: 40px;
  width: 100%;
}
.message{
  height: 200px;
  width: 100%;
}
.submit{
  width: 100%;
  color: white;
  background-color: #ff2211;
  height: 35px;
}
</style>
