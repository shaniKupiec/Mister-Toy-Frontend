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
    <div> price: {{ toy.price }} </div>
    <div> {{ formatedTime }} </div>
    <div> {{ inStock }} </div>
    <div>
      <router-link to="/toy">Back</router-link>
      <router-link to="/toy">
        <button @click="removeToy">Remove</button>
      </router-link>
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
      this.$store
        .dispatch({
          type: 'getToyById',
          toyId: this.$route.params.toyId,
        })
        .then((toy) => {
          this.toy = toy
          console.log(toy, 'toy')
        })
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
      if(this.$route.params.toyId) this.loadTodo()
    },
  },
}
</script>
