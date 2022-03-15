<template>
  <GMapMap
      :center="center"
      :zoom="10"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
  >
    <GMapMarker
        :key="marker.id"
        v-for="marker in markers"
        :position="marker.position"
    />
  </GMapMap>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      center: {lat: 32.091996, lng: 34.959813},
      markers: [
        {
          id: 'dfsldjl3r',
          position: {
            lat: 32.091996, lng: 34.959813
          },
        },
        {
          id: 'wertyu',
          position: {
            lat: 32.349664, lng: 34.920358
          },
        },
        {
          id: 'lkjhygtrf',
          position: {
            lat: 31.998558, lng: 34.780134
          },
        }
      ]
    }
  }
}
</script>

<style>
.vue-map-container{
    height: 80vh;
}
</style>