<template>
 <div class='container'>
   <div class = 'text'>
      <nuxt-link to="/" class="home-button">Home</nuxt-link>
      <h1>Contact</h1>
        
        <div class="main">
          <form action="#" method="post" name="form_name" id="form_id" class="form_class" >
            <div class="row1">
              <input type="text" class="action" id="name" placeholder="Full Name">
            </div>

            <div class="row1">
              <input type="text" class="action" id="email" placeholder="Email ID">
            </div>

            <div class="row1">
              <input type="text" class="action" placeholder="Phone Number">
            </div>

            <div class="row1">
              <input type="text" class="message" placeholder="Write your message">
            </div>

            <button v-on:click= "submit_by_id" class="submit"> Submit </button>
          </form>
        </div>
        
    </div>

    <div class='sidebar'>  
       <div>  
        <button v-on:click="toggleSidebar" class="menu-button">MENU
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
    },
    submit_by_id() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    
      document.getElementById("form_id").submit(); //form submission
      alert(" Name : " + name + " Email : " + email +  " Submitted Successfully......");
  }
  } 
}
</script>

<style scoped>
.row1{
  margin-bottom: 15px;
}
.action{
  height: 3em;
  width: 100%;
}
.message{
  height: 15em;
  width: 100%;
}
.submit{
  width: 100%;
  color: white;
  background-color: #ff2211;
  height: 2.9em;
}
</style>
