export default {
  template: `
          <section v-if="todo" class="cmp flex">
            <input type="text" v-model="todo.txt" ref="txtInput">
            <input type="number" min="1" max="10" v-model="todo.importance" title="importance">
            <input type="color"  v-model="todo.color">
            <input v-if="todo.doneAt" type="checkbox" id="done" @change="toggleDone" checked>
            <input v-else type="checkbox" id="done" @change="toggleDone">
            <label for="done">Done</label>
            <router-link to="/todo-app" @click="update">SAVE</router-link>
              <div class="cmp">
                <router-link to="/todo-app">Back</router-link>
                <router-link to="/todo-app" @click="remove()">Delete</router-link>
              </div>
          </section>
          <!-- <section v-else>Loading...</section> -->
    `,
  created() {
    this.loadTodo()
  },
  data(){
    return {
      todo: null,
    }
  },
  methods: {
    loadTodo() {
      const prm = this.$store.dispatch({ type: 'getTodoById', todoId: this.$route.params.todoId })
      prm.then((todo) => {
        this.todo = todo
        // this.$refs.txtInput.focus()
        console.log(todo);
      })
    },
    toggleDone() {
      this.todo.doneAt = this.todo.doneAt ? null : Date.now()
    },
    update() {
      this.$store.dispatch({
        type: 'updateTodo',
        todo: this.todo,
      })
    },
    remove() {
      const todoId = this.todo._id
      this.$store.dispatch({
        type: 'removeTodo',
        todoId,
      })
    },
  },
  watch: {
    '$route.params.todoId'() {
      this.loadTodo()
    },
  },
}
