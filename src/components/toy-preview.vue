<template>
  <section>
    <div class="toy-preview flex gap-2">
      <span> {{ toy.name }} </span>
      <span> price: {{ toy.price }} </span>
      <span> {{ formatedTime }} </span>
      <span> {{ inStock }} </span>
      <router-link :to="'/toy/' + toy._id">Details</router-link>
      <router-link :to="'/toy/edit/'+toy._id">Edit</router-link>
      <button @click="removeToy">X</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'toy-preview',
  props: {
    toy: {
      type: Object,
    },
  },
  components: {},
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
