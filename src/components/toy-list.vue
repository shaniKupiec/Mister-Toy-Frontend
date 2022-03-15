<template>
  <ul class="clean-list flex flex-wrap">
    <toy-preview v-for="toy in toys" :key="toy._id" :toy="toy" @removeToy="removeToy" />
  </ul>
</template>

<script>
import toyPreview from './toy-preview.vue'

export default {
  name: 'toy-list',
  props: {
    toys: {
      type: Array,
      required: true,
    },
  },
  components: {
    toyPreview,
  },
  created() {},
  data() {
    return {}
  },
  methods: {
    removeToy(toyId) {
      this.$emit('removeToy', toyId)
    },
  },
  computed: {},
  unmounted() {},
  emits: ['removeToy'],
}
</script>
