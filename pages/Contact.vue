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

    <div class='sidebar'>  
     
       <div>  
       <button v-on:click="toggleSidebar" class="menu-button">
       MENU
       </button>
       </div>
       <ul class="side-nav" :class="isOpen ? 'open' : ''">
         <li><nuxt-link to="/">Bio</nuxt-link></li>
        <li><nuxt-link to ="/Resume">Resume</nuxt-link></li>
        <li><nuxt-link to="/Contact"> Contact</nuxt-link></li>
       </ul>
     
      
   </div>  
    
 </div>  
  
 
 </template>

<script>
export default {
  data(){
    return {
      isOpen: false
    }
  },
  methods :{
    toggleSidebar() {
      
      this.isOpen = !this.isOpen  
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
