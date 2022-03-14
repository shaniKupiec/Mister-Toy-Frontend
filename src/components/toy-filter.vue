<!-- export default {
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
} -->

<template>
  <section>
    <input type="text" v-model="filterBy.txt" ref="txtInput" @input="setFilter" placeholder="Search...." />
    <select v-model="filterBy.label" @change="setFilter">
      <option>All</option>
      <option>Doll</option>
      <!-- <option value="saab">Battery Powered</option> -->
      <option>Battery Powered</option>
      <option>Baby</option>
      <option>Puzzle</option>
      <option>Video Game</option>
    </select>
    <label class="cursor-pointer">
      <input type="radio" v-model="filterBy.stock" @change="setFilter" value="all" hidden /> All
    </label>
    <label class="cursor-pointer">
      <input type="radio" v-model="filterBy.stock" @change="setFilter" value="inStock" hidden /> In Stock
    </label>
    <label class="cursor-pointer">
      <input type="radio" v-model="filterBy.stock" @change="setFilter" value="outOfStock" hidden /> Out Of Stock
    </label>
  </section>
</template>

<script>
export default {
  name: 'toy-filter',
  data() {
    return {
      filterBy: {
        txt: null,
        label: 'All',
        stock: 'all'
      },
    }
  },
  methods: {
    setFilter() {
      this.$emit('setFilter', this.filterBy)
    },
  },
  created() {},
  mounted() {
    this.$refs.txtInput.focus()
  },
  emits: ['setFilter'],
}
</script>
