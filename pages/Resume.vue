<template>
 <div class='container'>
   <div class = 'text'>
     
     <nuxt-link to="/" class="home-button">Home
     </nuxt-link>
     <h1 class='cv'>Experience</h1>
     <div>
     <ul class='resume-list'>
        <li>
          <h3>Software Developer, LTI</h3>
          <p class="date">June 2015 - Present</p>
          <p>Veolia Water (formerly Vivendi Water, originally Compagnie
Générale des Eaux), is the water division of the French company
Veolia Environment and the world’s largest supplier of water
services.</p>
<p>Hands on Experience in CNC Tasks like Package Management, 
  Maintenance of Servers, Path Code Installation, Security Management. 
  Worked on Third Party Job Scheduler - One Automic</p>
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
