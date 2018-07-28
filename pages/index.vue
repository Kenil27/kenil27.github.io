<template>
 <div class='container'>
   <div class = 'text'>
     <h1>Hi, I am Kenil Shah</h1>
     <p class='tag'> Web designer & Development</p>
   </div>

   <div class='left'>     
     <button v-on:click="toggleSidebar" class="menu-button">
       Menu
     </button>
  <span class="nav"></span>
  <ul class="side-nav" :class="isOpen ? 'open' : ''">
    <li><nuxt-link to="/">Menu</nuxt-link></li>
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
      debugger
      this.isOpen = !this.isOpen  
    }
  } 
}
</script>

