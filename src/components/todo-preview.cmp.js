export default {
  props: ['todo'],
  template: `
        <div class="todo-preview">
          <button @click="remove()">X</button>
          <router-link :to="'/todo/edit/'+todo._id">Edit</router-link>
          <router-link :to="'/todo/'+todo._id">Details</router-link>
          <div class="color" :style="{backgroundColor: todo.color}"> </div>
          <span> {{todo.importance}} </span>
          <span :class="{completed: todo.doneAt}"> {{todo.txt}} </span>
        </div>
    `,
  methods: {
    remove() {
      this.$emit('remove', this.todo._id)
    },
  },
  emits: ['remove'],
}
