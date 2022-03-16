<template>
  <section class="flex gap-2 justify-center items-center flex-col">
    <el-input v-model="filterBy.name" ref="txtInput" @input="setFilter" class="w-50 m-2" placeholder="Search...." :prefix-icon="Search" />

    <section class="flex gap-2 items-center justify-between">
      <el-select v-model="filterBy.labels" multiple @change="setFilter" placeholder="Select" style="width: 240px">
        <el-option v-for="item in options" :key="item" :label="item" :value="item" />
      </el-select>
      <div>
        <el-radio-group v-model="filterBy.stock" @change="setFilter">
          <el-radio-button label="All" />
          <el-radio-button label="In Stock" />
          <el-radio-button label="Out Of Stock" />
        </el-radio-group>
      </div>
    </section>

    <div>
      <el-radio-group v-model="filterBy.sortBy" @change="setFilter">
        <el-radio-button label="Name" />
        <el-radio-button label="Price" />
        <el-radio-button label="Time" />
      </el-radio-group>
    </div>
  </section>
</template>

<script>
import { Search } from '@element-plus/icons-vue'

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
      Search,
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
