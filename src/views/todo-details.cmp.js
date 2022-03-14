export default {
  template: `
        <section v-if="todo" :style="{backgroundColor: todo.color}">
          <div>{{todo.txt}}</div>
          <div>importance : {{todo.importance}}</div>
          <div></div>
          <div v-if="todo.doneAt">Done At : {{formatedTime}}</div>
          <div><router-link to="/todo-app">Back</router-link></div>
        </section>
        <!-- <section v-else>Loading...</section> -->
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
}
