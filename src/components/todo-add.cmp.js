import { todoService } from '../services/todo.service.js'

export default {
  template: `
        <section class="cmp">
            <form @submit.prevent="add" class="flex">
                <input type="text" v-model="todo.txt" placeholder="Enter new todo">
                <input type="number" min="1" max="10" v-model="todo.importance" title="importance">
                <input type="color" v-model="todo.color">
                <button>Add</button>
            </form>
        </section>
    `,
  data() {
    return {
      todo: todoService.getEmptyTodo(),
    }
  },
  methods: {
    add() {
      this.$emit('add', this.todo)
      this.todo = todoService.getEmptyTodo()
    },
  },
  emits: ['add'],
}
