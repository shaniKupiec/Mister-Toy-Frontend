import todoPreview from './todo-preview.cmp.js'

export default {
  props: ['todos'],
  template: `
        <section class="cmp">
            <ul class="clean-list">
                <li v-for="todo in todos" :key="todo._id">
                    <todo-preview :todo="todo" @remove="remove" />
                </li>
            </ul>
        </section>
    `,
  components: {
    todoPreview,
  },
  created() {},
  data() {
    return {}
  },
  mounted() {},
  methods: {
    remove(todoId) {
      this.$emit('remove', todoId)
    },
  },
  computed: {},
  unmounted() {},
  emits: ['remove'],
}
