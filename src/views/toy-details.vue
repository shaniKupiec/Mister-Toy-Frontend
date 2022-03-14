<!-- export default {
  template: `
        <section v-if="todo" :style="{backgroundColor: todo.color}">
          <div>{{todo.txt}}</div>
          <div>importance : {{todo.importance}}</div>
          <div></div>
          <div v-if="todo.doneAt">Done At : {{formatedTime}}</div>
          <div><router-link to="/todo-app">Back</router-link></div>
        </section>
        <section v-else>Loading...</section>
    `,
  components: {},
  data() {
    return {
      todo: null,
    }
  },
  created() {
    this.loadTodo()
  },
  methods: {
    loadTodo() {
      const prm = this.$store.dispatch({ type: 'getTodoById', todoId: this.$route.params.todoId })
      prm.then((todo) => (this.todo = todo))
    },
  },
  computed: {
    formatedTime() {
      var doneTime = new Date(this.todo.doneAt)
      return doneTime.toLocaleString()
    },
  },
  watch: {
    '$route.params.todoId'() {
      this.loadTodo()
    },
  },
} -->

<template>
  <section v-if="toy">
    <span> {{ toy.name }} </span>
    <ul>
      <li v-for="label in toy.labels" :key="label">{{ label }}</li>
    </ul>
    <span> price: {{ toy.price }} </span>
    <span> {{ formatedTime }} </span>
    <span> {{ inStock }} </span>
    <div><router-link to="/toy">Back</router-link></div>
    <div>
      <router-link to="/toy"><button @click="removeToy">X</button></router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'toy-details',
  components: {},
  data() {
    return {
      toy: null,
    }
  },
  created() {
    this.loadToy()
  },
  methods: {
    loadToy() {
      this.toy = this.$store.dispatch({ type: 'getToyById', toyId: this.$route.params.toyId })
      // this.toy = {
      //   _id: 't101',
      //   name: 'Talking Doll',
      //   price: 123,
      //   labels: ['Doll', 'Battery Powered', 'Baby'],
      //   createdAt: 1631031801011,
      //   inStock: true,
      // }
      // const prm = this.$store.dispatch({ type: 'getToyById', toyId: this.$route.params.toyId })
      // prm.then((toy) => (this.toy = toy))
    },
    removeToy() {
      this.$store.dispatch({
        type: 'removeToy',
        toyId: this.toy._id,
      })
    },
  },
  computed: {
    formatedTime() {
      var createdAt = new Date(this.toy.createdAt)
      return createdAt.toLocaleString()
    },
    inStock() {
      return this.toy.inStock ? 'in stock' : 'out  of stock'
    },
  },
  watch: {
    '$route.params.toyId'() {
      this.loadTodo()
    },
  },
}
</script>
