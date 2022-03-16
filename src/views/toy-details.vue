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
      <!-- reviews:
      <li v-for="review in toy.reviews" :key="review">
        <span>{{ review.creator }}</span>
        <span>{{ review.txt }}</span>
        <span>{{ review.createdAt }}</span>
      </li> -->
      <li v-for="review in toy.reviews" :key="review">
        <toy-review :review="review" />
      </li>
    </ul>
    <div>
      <el-button type="info" @click="goBack" round>Back</el-button>
      <el-button type="danger" :icon="Delete" circle @click="removeToy" title="Delete" />
    </div>
  </section>
</template>

<script>
import { Search, Edit, Check, Message, Star, Delete } from '@element-plus/icons-vue'
import toyReview from '../components/toy-review.vue'

export default {
  name: 'toy-details',
  components: {
    toyReview,
  },
  data() {
    return {
      toy: null,
      Delete,
    }
  },
  created() {
    const { toyId } = this.$route.params
    this.$store
      .dispatch({
        type: 'getToyById',
        toyId,
      })
      .then((toy) => {
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
