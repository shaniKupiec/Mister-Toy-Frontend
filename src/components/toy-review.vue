<template>
  <section class="flex">
    <!-- <div class="img-container">
      <img class="user-img" :src="'.././imgs/user_icon_' + review.idImg + '.png'" />
    </div> -->
    <div class="review-info flex flex-col">
      <div class="writer-name">{{ review.creator }}</div>
      <!-- <span>{{ '⭐'.repeat(review.rating) }}</span> -->
      <span> {{ this.formattedTime }}</span>
      <span> {{ review.txt }}</span>
      <!-- <long-text :text="review.textarea" :length="30"></long-text> -->
      <!-- <button @click="deleteR">X</button> -->
    </div>
  </section>
</template>

// "creator": "shani", // "txt": "greate toy", // "createdAt": 1647278100453

<script>
// import longText from '../cmps/long-text.cmp.js'

export default {
  name: 'toy-review',
  props: {
    review: Object,
  },
  components: {
    // longText,
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

