<template>
  <section class="carousel">
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="number in imgs" :key="number">
        <img class="img-in-card" :src="'/src/assets/images/' + number + '.png'" alt="" />
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<script>
export default {
  name: 'carousel',
  components: {},
  created() {
    this.imgs = []
    for (var i = 0; i < 12; i++) {
      this.imgs.push(i)
    }
  },
  data() {
    return {
      imgs: null,
    }
  },
  methods: {},
  computed: {},
  unmounted() {},
}
</script>
