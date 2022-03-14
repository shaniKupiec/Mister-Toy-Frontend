<template>
  <section v-if="toy">
    <input type="text" v-model="toy.name" title="toy name"/>
    <!-- add focuse -->
    <input type="number" min="1" v-model="toy.price" title="price" />
    <!-- <input type="color" v-model="toy.color" /> -->

    <input type="checkbox" id="stock" @change="toy.inStock = !toy.inStock" :checked="toy.inStock" />
    <label for="stock">in stock</label>

    <router-link to="/toy">
      <button @click="update">SAVE</button>
    </router-link>
  </section>
  <section>
    <router-link to="/toy">Back</router-link>
    <!-- <router-link to="/toy" @click="remove()">Delete</router-link> -->
  </section>
</template>

<script>
// import appHeader from './components/app-header.vue'

export default {
  name: 'toy-edit',
  created() {
    this.loadToy()
  },
  data() {
    return {
      toy: null,
    }
  },
  methods: {
    loadToy() {
      this.$store
        .dispatch({
          type: 'getToyById',
          toyId: this.$route.params.toyId,
        })
        .then((toy) => {
          this.toy = toy
          console.log(toy, 'toy')
        })
    },
    update() {
      this.$store.dispatch({
        type: 'updateToy',
        toy: this.toy,
      })
    },
    // remove() {
    //   const toyId = this.toy._id
    //   this.$store.dispatch({
    //     type: 'removetoy',
    //     toyId,
    //   })
    // },
  },
  watch: {
    '$route.params.toyId'() {
      this.loadToy()
    },
  },
}
</script>
