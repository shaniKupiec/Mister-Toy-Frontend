<template>
  <section class="main-layout">
    <toy-filter @setFilter="setFilter" />
    <el-button  @click="addNew" round>Add New Toy</el-button>
    <toy-list :toys="toys" @removeToy="removeToy" />
    <el-button v-if="isLoading" type="primary" loading class="loading">Loading</el-button>
  </section>
</template>

<script>
import toyList from '../components/toy-list.vue'
import toyFilter from '../components/toy-filter.vue'

export default {
  name: 'toy-app',
  components: {
    toyList,
    toyFilter,
  },
  created() {},
  data() {
    return {}
  },
  methods: {
    setFilter(filterBy) {
      this.$store.dispatch({ type: 'filter', filterBy })
    },
    addNew() {
      this.$router.push('/toy/edit')
    },
    removeToy(toyId) {
      console.log('removing', toyId)
      this.$store.dispatch({
        type: 'removeToy',
        toyId,
      })
    },
  },
  computed: {
    toys() {
      return this.$store.getters.toysForDisplay
    },
    isLoading() {
      return this.$store.getters.isLoading
    },
  },
  unmounted() {},
}
</script>

<style>

.loading{
  left: 50%;
}
</style>
