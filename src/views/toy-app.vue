<template>
  <section class="main-layout">
    <toy-filter @setFilter="setFilter" />
    <toy-list :toys="toys" @removeToy="removeToy" />
    <!-- <p v-if="isLoading">Loading...</p> -->
    <!-- <todo-add @add="add" /> -->
  </section>
</template>

<script>
import toyList from '../components/toy-list.vue'
// import toyAdd from '../components/toy-add.vue'
import toyFilter from '../components/toy-filter.vue'

export default {
  name: 'toy-app',
  //  props: {
  //    car: Object,
  //  },
  components: {
    toyList,
    toyFilter,
  },
  created() {},
  data() {
    return {
    }
  },
  methods: {
    setFilter(filterBy) {
      console.log('filtering');
      this.$store.dispatch({
        type: 'loadToys',
        filterBy,
      })
    },
    // add(todo) {
    //   this.$store.dispatch({
    //     type: 'addTodo',
    //     todo,
    //   })
    // },
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
    // isLoading() {
    //   return this.$store.getters.isLoading
    // },
  },
  unmounted() {},
}
</script>
