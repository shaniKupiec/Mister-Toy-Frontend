<template>
  <section v-if="toyToEdit">
    <input type="text" v-model="toyToEdit.name" title="toy name" />
    <input type="number" min="1" v-model="toyToEdit.price" title="price" />

    <input type="checkbox" id="stock" @change="toyToEdit.inStock = !toyToEdit.inStock" :checked="toyToEdit.inStock" />
    <label for="stock">in stock</label>

    <!-- lables -->

    <button @click="update">SAVE</button>
  </section>
  <button @click="goBack">Back</button>
</template>

<script>
import { toyService } from '../services/toy.service.js'

export default {
  name: 'toy-edit',
  created() {
    const { id } = this.$route.params
    if (id) {
      this.$store.dispatch({
          type: 'getToyById',
          toyId: id,
        }).then((toy) => {
          this.toyToEdit = toy
        })
    } else this.toyToEdit = toyService.getEmptyToy()
  },
  components: {},
  data() {
    return {
      toyToEdit: null,
    }
  },
  methods: {
    update() {
      this.$store
        .dispatch({
          type: 'updateToy',
          toy: this.toyToEdit,
        })
        .then(() => this.goBack())
    },
    goBack() {
      this.$router.push('/')
    },
  },
}
</script>
