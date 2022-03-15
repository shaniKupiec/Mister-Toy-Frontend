<template>
  <section class="flex gap-2 justify-center items-center">
    filter:
    <input type="text" v-model="filterBy.name" ref="txtInput" @input="setFilter" placeholder="Search...." />

    <el-select v-model="filterBy.labels" multiple @change="setFilter" placeholder="Select" style="width: 240px">
      <el-option v-for="item in options" :key="item" :label="item" :value="item" />
    </el-select>

    <label class="cursor-pointer"> <input type="radio" v-model="filterBy.stock" @change="setFilter" value="all" hidden /> All |</label>
    <label class="cursor-pointer"> <input type="radio" v-model="filterBy.stock" @change="setFilter" value="inStock" hidden /> In Stock |</label>
    <label class="cursor-pointer"> <input type="radio" v-model="filterBy.stock" @change="setFilter" value="outOfStock" hidden /> Out Of Stock </label>
  </section>
  <section class="flex gap-2 items-center">
    sort:
    <label class="cursor-pointer"> <input type="radio" v-model="filterBy.sortBy" @change="setFilter" value="name" hidden /> Name </label>
    <label class="cursor-pointer"> <input type="radio" v-model="filterBy.sortBy" @change="setFilter" value="price" hidden /> Price </label>
    <label class="cursor-pointer"> <input type="radio" v-model="filterBy.sortBy" @change="setFilter" value="createdAt" hidden /> Time </label>
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
        sortBy: '',
      },
      options: ['Doll', 'Battery Powered', 'Baby', 'Puzzle', 'Video Game'],
    }
  },
  methods: {
    setFilter() {
      this.$emit('setFilter', JSON.parse(JSON.stringify(this.filterBy)))
    },
  },
  created() {},
  mounted() {
    this.$refs.txtInput.focus()
  },
  emits: ['setFilter'],
}
</script>
