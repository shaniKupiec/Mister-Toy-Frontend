<template>
  <section>
    <div class="toy-preview">
      <!-- <button @click="remove()">X</button> -->
      <!-- <router-link :to="'/toy/edit/'+toy._id">Edit</router-link> -->
      <span> {{ toy.name }} </span>
      <span> price: {{ toy.price }} </span>
      <span> {{ formatedTime }} </span>
      <span> {{ inStock }} </span>
      <router-link :to="'/toy/' + toy._id">Details</router-link>
    </div>
  </section>
</template>

<script>
// import appHeader from './components/app-header.vue'

export default {
  props: ['toy'],
  components: {},
  created() {},
  data() {
    return {}
  },
  methods: {
    // remove() {
    //   this.$emit('remove', this.todo._id)
    // },
  },
  computed: {
    formatedTime() {
      var createdAt = new Date(this.toy.createdAt)
      return createdAt.toLocaleString()
    },
    inStock() {
      return this.toy.inStock ? 'in stock' : 'out  of stock'
    },
  },
  unmounted() {},
}
</script>
