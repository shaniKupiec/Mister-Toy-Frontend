import todoList from '../cmps/todo-list.cmp.js'
import todoAdd from '../cmps/todo-add.cmp.js'
import todoFilter from '../cmps/todo-filter.cmp.js'

export default {
  template: `
        <section class="todo-app main-layout">
          <todo-filter @filter="filter" />
          <todo-list :todos="todos" @remove="remove" />
          <p v-if="isLoading">Loading...</p>
          <todo-add @add="add" />
        </section>
    `,
  components: {
    todoFilter,
    todoList,
    todoAdd,
  },
  data() {
    return {
      filterBy: null,
    }
  },
  methods: {
    filter(filterBy) {
      this.filterBy = filterBy
      this.$store.commit({
        type: 'filter',
        filterBy,
      })
    },
    add(todo) {
      this.$store.dispatch({
        type: 'addTodo',
        todo,
      })
    },
    remove(todoId) {
      console.log('removing', todoId)
      this.$store.dispatch({
        type: 'removeTodo',
        todoId,
      })
    },
  },
  computed: {
    todos() {
      return this.$store.getters.todosForDisplay
    },
    isLoading() {
      return this.$store.getters.isLoading
    },
  },
}
