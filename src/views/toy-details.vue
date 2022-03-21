<template>
  <custom-card v-if="toy" class="toy-details">
    <template v-slot:header>
      <div> {{ toy.name }} </div>
      <div>{{ formattedPrice }}</div>
      <img :src="toy.img" alt="">
      <!-- <pre>{{toy}}</pre> -->
    </template>

    <div v-if="!toy.inStock" class="stock-sticker uppercase round">out of stock</div>
    <!-- <ul v-if="toy.reviews.length" class="clean-list">
      <li v-for="review in toy.reviews" :key="review">
        <toy-review :review="review" />
      </li>
    </ul> -->

    <section class="grey">
      <div v-if="toy.labels.length">Labled as: {{ toy.labels.join(', ') }}</div>
      <div>on sale since {{ formattedTime }}</div>
      <div>created by {{ toy.creator.fullname }}</div>
    </section>

    <template v-slot:footer>
      <el-button type="info" @click="goBack" round>Back</el-button>
      <el-button type="danger" :icon="Delete" circle @click="removeToy" title="Delete" />
    </template>
  </custom-card>
</template>

<script>
import { Delete } from '@element-plus/icons-vue'
import toyReview from '../components/toy-review.vue'
import customCard from '../components/custom-card.vue'

export default {
  name: 'toy-details',
  components: {
    toyReview,
    customCard,
  },
  data() {
    return {
      toy: null,
      Delete,
    }
  },
  async created() {
    const { toyId } = this.$route.params
    this.toy = await this.$store
      .dispatch({
        type: 'getToyById',
        toyId,
      })
  },
  methods: {
    async removeToy() {
      await this.$store
        .dispatch({
          type: 'removeToy',
          toyId: this.toy._id,
        })
      this.goBack()
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
  },
}
</script>
