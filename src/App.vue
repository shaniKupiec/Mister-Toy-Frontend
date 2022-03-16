<template>
  <section class="main-layout">
    <app-header />
    <router-view class="main-app" />
    <app-footer />
  </section>
</template>

<script>
import appHeader from './components/app-header.vue'
import appFooter from './components/app-footer.vue'

export default {
  name: 'app',
  created() {
    this.$store.dispatch({ type: 'loadToys'})
  },
  methods: {},
  components: {
    appHeader,
    appFooter
  },
}
</script>