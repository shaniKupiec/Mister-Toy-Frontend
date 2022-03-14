<template>
  <section class="main-layout">
    <!-- <todo-filter @filter="filter" /> -->
    <toy-list :toys="toys" @removeToy="removeToy" />
    <!-- <p v-if="isLoading">Loading...</p> -->
    <!-- <todo-add @add="add" /> -->
  </section>
</template>

<script>
import toyList from '../components/toy-list.vue'
// import todoAdd from '../cmps/todo-add.cmp.js'
// import todoFilter from '../cmps/todo-filter.cmp.js'

export default {
  name: 'toy-app',
  //  props: {
  //    car: Object,
  //  },
  components: {
    toyList,
  },
  created() {},
  data() {
    return {
      // filterBy: null,
    }
  },
  methods: {
    // filter(filterBy) {
    //   this.filterBy = filterBy
    //   this.$store.commit({
    //     type: 'filter',
    //     filterBy,
    //   })
    // },
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
