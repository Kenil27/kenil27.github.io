<template>
 <div class='container-fluid'>
    <div class = 'text'>
     
      <nuxt-link to="/" class="home-button">Home
      </nuxt-link>
      <h1 class='cv'>Experience</h1>
    <div>
        <ul class='resume-list'>
        <li>
          <h3>Software Engineer, LTI</h3>
          <p class="date">June 2015 - Sept. 2018</p>
          <h5><b> Project : Veolia Water, France</b></h5>
          <p class="date">July 2016 - Sept. 2018</p>
          <p>Veolia Water is the water division of the French company
          Veolia Environment and the world’s largest supplier of water
          services.</p>
          <p>Hands on Experience in CNC Tasks like Package Management, 
            Maintenance of Servers, Path Code Installation, Security Management. 
            Worked on Third Party Job Scheduler - One Automic</p>
        </li>
        <li>
          <h5><b> Project: Statoil Fuel and Retail</b></h5>
          <p class="date">June 2015 - June 2016</p>
          <p>Role : Production Support (JD Edwards CNC)<br> Responsible for Restart and Maintaining of JDE Servers
          . Successfully implemented MRT feature of One Automic for job monitoring</p>
        </li>
        </ul>
          </div>
          <h1 class="cv">Education</h1>
          <div>
            <ul class="resume-list">
              <li>
                 <h3>Mumbai University</h3>
                 <p class="date">2011 - 2015</p>
                 <p>Bachelor of Engineering in Information Technology (I.T) (Mumbai university).</p>
                </li>
            </ul>
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
          </ul>      
        </div>  
    
 </div>  
  
 
 </template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style >
.cv {
  margin-bottom: 3%;
}
</style>
