<template>
  <section class="main-layout">
    <toy-filter @setFilter="setFilter" />
    <button @click="addNew">Add New Toy</button>
    <toy-list :toys="toys" @removeToy="removeToy" />
    <p v-if="isLoading">Loading...</p>
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
