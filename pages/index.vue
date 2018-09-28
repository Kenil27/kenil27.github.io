<template>
 <div class='container-fluid'>
   <div class = 'text'>
     <h1>Hi, I am Kenil Shah</h1>
     <p class='tag'> Web Designer & Developer</p>
     <p>I am a Software Engineer. Currently I work for L&T Infotech (LTI). </p>
     <p>Apart from technlogies, I share my interest in cricket, music and playing flute.</p>
     <p>You can follow me on <a href=
     "https://angel.co/kenil27" target="_blank" rel="noopener">angel.co</a>, <a href="https://www.linkedin.com/in/kenil-shah-934a8a90/" 
     target="_blank" rel="noopener">LinkedIn</a></p>
     <p>ALso you can Contact me on my E-mail ID -<a href="mailto:kenilshah93@gmail.com">
       kenilshah93@gmail.com</a></p>
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
            <li><nuxt-link to="/Game">Play Tic Tac Toe !!!</nuxt-link></li>
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