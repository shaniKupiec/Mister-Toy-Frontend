<template>
  <custom-card class="toy-review">
    <template v-slot:header>
      <img class="user-img" :src="'/src/assets/images/user_icon_' + review.idImg + '.png'" />
      <div class="writer-name">{{ review.creator }}</div>
    </template>

    <span>{{ '⭐'.repeat(review.rating) }}</span>
    <span> {{ this.formattedTime }}</span>

    <template v-slot:footer>
      <long-text :text="review.txt" :length="30"></long-text>
    </template>
  </custom-card>
</template>

<script>
import longText from './long-text.vue'
import customCard from '../components/custom-card.vue'

export default {
  name: 'toy-review',
  props: {
    review: Object,
  },
  components: {
    longText,
    customCard,
  },
  created() {},
  data() {
    return {
      // stars: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    // deleteR() {
    //   console.log('delete')
    //   this.$emit('remove-review', { ...this.review.id })
    // },
  },
  computed: {
    // getImgSrc(num) {
    //   console.log(num)
    //   return '.././imgs/user_icon_' + num + '.png'
    // },
    formattedTime() {
      var createdAt = new Date(this.review.createdAt)
      return createdAt.toLocaleString()
    },
  },
  unmounted() {},
  emits: ['remove-review'],
}
</script>
