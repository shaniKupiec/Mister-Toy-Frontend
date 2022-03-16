<template>
  <custom-card>
    <template v-slot:header>
      <h1>{{ toy.name }}</h1>
    </template>

    <img :src="toy.img" alt="">
    <div>{{ formattedPrice }}</div>
    <div v-if="!toy.inStock">Out Of Stock!</div>

    <template v-slot:footer>
      <router-link :to="'/toy/' + toy._id">
        <el-button type="info" round plain>Details</el-button>
      </router-link>
      <router-link :to="'/toy/edit/' + toy._id">
        <el-button type="primary" :icon="Edit" circle title="Edit"/>
      </router-link>
      <el-button type="danger" :icon="Delete" circle @click="removeToy" title="Delete"/>
    </template>
  </custom-card>
</template>

<script>
import customCard from '../components/custom-card.vue'
import { Search, Edit, Check, Message, Star, Delete } from '@element-plus/icons-vue'

export default {
  name: 'toy-preview',
  props: {
    toy: {
      type: Object,
    },
  },
  components: {
    customCard,
  },
  created() {},
  data() {
    return {
      Delete,
      Edit,
    }
  },
  methods: {
    removeToy() {
      this.$emit('removeToy', this.toy._id)
    },
  },
  computed: {
    formattedPrice() {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol' }).format(this.toy.price)
    },
  },
  unmounted() {},
  emits: ['removeToy'],
}
</script>
