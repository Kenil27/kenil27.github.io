<template>
<div>
  <no-ssr>
  <div id="map-wrap">
    <v-map :zoom=4
           :center="[markers[0].lat, markers[0].lng]">
      <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
      <v-marker v-for="marker in markers" :key="marker.id" :lat-lng="[marker.lat, marker.lng]"></v-marker>
    </v-map>
  </div>
  </no-ssr>
</div>
</template>

<script>
  export default {
    ssr: false,
    data() {
      return {
        markers: [ 
          {id: 1, lat: 55.8350812, lng: 8.1634942 },
          {id: 2, lat: 47.413220, lng: -1.229482 }
        ]
      }
    }
  }
</script>
<style>
  #map-wrap {
    height: 100%;
    width: 100%;
  }
  
</style>