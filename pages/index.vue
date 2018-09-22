<template>
 <div class='container'>
   <div class = 'text'>
     <h1>Hi, I am Kenil Shah</h1>
     <p class='tag'> Web Designer & Developer</p>
     <p>I am a Software Engineer. Currently I work for L&T Infotech (LTI). </p>
     <p>Apart from technlogies, I share my interest in cricket, music and playing flute.</p>
     <p>If you want to connect with me, then you can follow me on <u>Facebook</u>, <u>LinkedIn</u>.
     Also you can leave me a message on <nuxt-link to="/Contact"><u>Contact Page</u></nuxt-link></p>
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
        <li><nuxt-link to="/Game"> Play Tic Tac Toe !</nuxt-link></li>
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

