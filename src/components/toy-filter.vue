<template>
  <section>
    <input type="text" v-model="filterBy.name" ref="txtInput" @input="setFilter" placeholder="Search...." />

    <label>
      Labels:
      <select @change="setFilter" multiple v-model="filterBy.labels">
        <option value="On wheels">On wheels</option>
        <option value="Box game">Box game</option>
        <option value="Art">Art</option>
        <option value="Baby">Baby</option>
        <option value="Doll">Doll</option>
        <option value="Puzzle">Puzzle</option>
        <option value="Outdoor">Outdoor</option>
      </select>
    </label>

    <label class="cursor-pointer"> <input type="radio" v-model="filterBy.stock" @change="setFilter" value="all" hidden /> All </label>
    <label class="cursor-pointer"> <input type="radio" v-model="filterBy.stock" @change="setFilter" value="inStock" hidden /> In Stock </label>
    <label class="cursor-pointer"> <input type="radio" v-model="filterBy.stock" @change="setFilter" value="outOfStock" hidden /> Out Of Stock </label>
  </section>
</template>

<script>
export default {
  name: 'toy-filter',
  data() {
    return {
      filterBy: {
        name: '',
        labels: [],
        stock: 'all',
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
