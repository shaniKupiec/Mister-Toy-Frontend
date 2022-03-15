<template>
  <custom-card>
    <template v-slot:header>
      <h1>{{ toy.name }}</h1>
    </template>

    <div> {{ formattedPrice }} </div>
    <div v-if="!toy.inStock"> Out Of Stock! </div>

    <template v-slot:footer>
      <router-link :to="'/toy/' + toy._id">Details</router-link>
      <router-link :to="'/toy/edit/' + toy._id">Edit</router-link>
      <button @click="removeToy">Delete</button>
    </template>
  </custom-card>
</template>

<script>
import customCard from '../components/custom-card.vue'

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
    return {}
  },
  methods: {
    removeToy() {
      this.$emit('removeToy', this.toy._id)
    },
  },
  computed: {
    formattedPrice() {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(this.toy.price)
    },
  },
  unmounted() {},
  emits: ['removeToy'],
}
</script>
