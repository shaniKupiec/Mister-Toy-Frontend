export default {
  template: `
    <section class="cmp">
        <label> Search a todo: </label>    
        <input 
            v-model="filterBy.txt" 
            ref="txtInput" 
            type="text" 
            @input="setFilter" 
            placeholder="Search....">
    </section>
    `,
  data() {
    return {
      filterBy: {
        txt: null,
      },
    }
  },
  methods: {
    setFilter() {
      this.$emit('filter', this.filterBy)
    },
  },
  created() {},
  mounted() {
    this.$refs.txtInput.focus()
  },
  emits: ['filter'],
}
