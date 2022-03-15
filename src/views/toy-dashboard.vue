<template>
  <!-- <section class=""> -->
    <chart1-cmp v-if="isToys" />
    <br>
    <br>
    <br>
    <chart2-cmp v-if="isToys" />
  <!-- </section> -->
</template>

<script>
import chart1Cmp from '../components/chart1.vue'
import chart2Cmp from '../components/chart2.vue'

export default {
  name: 'toy-dashboard',
  components: {
    chart1Cmp,
    chart2Cmp,
  },
  created() {},
  data() {
    return {}
  },
  computed: {
    isToys() {
      return this.$store.getters.toysForDisplay.length
    },
  },
}
</script>
