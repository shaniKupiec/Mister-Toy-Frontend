<template>
  <section v-if="toyToEdit">
    <input type="text" v-model="toyToEdit.name" title="toy name" />
    <input type="number" min="1" v-model="toyToEdit.price" title="price" />

    <input type="checkbox" id="stock" @change="toyToEdit.inStock = !toyToEdit.inStock" :checked="toyToEdit.inStock" />
    <label for="stock">in stock</label>

    <!-- lables -->

    <button @click="save">SAVE</button>
  </section>
  <button @click="goBack">Back</button>
</template>

<script>
import { toyService } from '../services/toy.service.js'

export default {
  name: 'toy-edit',
  created() {
    const { toyId } = this.$route.params
    if (toyId) {
      this.$store.dispatch({
          type: 'getToyById',
          toyId,
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
    save() {
      this.$store
        .dispatch({
          type: 'saveToy',
          toy: this.toyToEdit,
        })
        .then(() => this.goBack())
    },
    goBack() {
      this.$router.push('/toy')
    },
  },
}
</script>
