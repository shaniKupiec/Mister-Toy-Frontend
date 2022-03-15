<template>
  <chart1-cmp v-if="isToys"/>
  <!-- <chart2-cmp/> -->
</template>

<script>
import chart1Cmp from '../components/chart1.vue'
// import chart2Cmp from '../components/chart2.vue'

export default {
  name: 'dashboard',
  components: {
    chart1Cmp,
    // chart2Cmp
  },
  created() {
    // console.log(this.$store.getters.toysForDisplay);
  },
  data() {
    return {
    }
  },
  computed: {
    isToys(){
      return this.$store.getters.toysForDisplay.length
    }
  },
}
</script>
