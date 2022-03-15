<template>
  <section v-if="toy">
    <span> {{ toy.name }} </span>
    <ul v-if="toy.labels.length" class="clean-list">
      labels:
      <li v-for="label in toy.labels" :key="label">{{ label }}</li>
    </ul>
    <div>{{ formattedPrice }}</div>
    <div>{{ formattedTime }}</div>
    <div>{{ inStock }}</div>
    <ul v-if="toy.reviews.length" class="clean-list">
      reviews:
      <li v-for="review in toy.reviews" :key="review">
        <span>{{ review.creator }}</span>
        <span>{{ review.txt }}</span>
        <span>{{ review.createdAt }}</span>
      </li>
    </ul>
    <div>
      <button @click="goBack">Back</button>
      <button @click="removeToy">Remove</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'toy-details',
  components: {},
  data() {
    return {
      toy: null,
    }
  },
  created() {
    const { toyId } = this.$route.params
    this.$store
        .dispatch({
          type: 'getToyById',
          toyId,
        }).then((toy) => {
          this.toy = toy
        })
  },
  methods: {
    removeToy() {
      this.$store
        .dispatch({
          type: 'removeToy',
          toyId: this.toy._id,
        })
        .then(() => this.goBack())
    },
    goBack() {
      this.$router.push('/toy')
    },
  },
  computed: {
    formattedTime() {
      var createdAt = new Date(this.toy.createdAt)
      return createdAt.toLocaleString()
    },
    formattedPrice() {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol' }).format(this.toy.price)
    },
    inStock() {
      return this.toy.inStock ? 'in stock' : 'out  of stock'
    },
  },
  // watch: {
  //   '$route.params.toyId'() {
  //     if (this.$route.params.toyId) this.loadTodo()
  //   },
  // },
}
</script>
