<!-- export default {
  template: `
          <section v-if="toy" class="cmp flex">
            <input type="text" v-model="toy.txt" ref="txtInput">
            <input type="number" min="1" max="10" v-model="toy.importance" title="importance">
            <input type="color"  v-model="toy.color">
            <input v-if="toy.doneAt" type="checkbox" id="done" @change="toggleDone" checked>
            <input v-else type="checkbox" id="done" @change="toggleDone">
            <label for="done">Done</label>
            <router-link to="/toy-app" @click="update">SAVE</router-link>
              <div class="cmp">
                <router-link to="/toy-app">Back</router-link>
                <router-link to="/toy-app" @click="remove()">Delete</router-link>
              </div>
          </section>
          <section v-else>Loading...</section>
    `,
  created() {
    this.loadtoy()
  },
  data(){
    return {
      toy: null,
    }
  },
  methods: {
    loadtoy() {
      const prm = this.$store.dispatch({ type: 'gettoyById', toyId: this.$route.params.toyId })
      prm.then((toy) => {
        this.toy = toy
        // this.$refs.txtInput.focus()
        console.log(toy);
      })
    },
    toggleDone() {
      this.toy.doneAt = this.toy.doneAt ? null : Date.now()
    },
    update() {
      this.$store.dispatch({
        type: 'updatetoy',
        toy: this.toy,
      })
    },
    remove() {
      const toyId = this.toy._id
      this.$store.dispatch({
        type: 'removetoy',
        toyId,
      })
    },
  },
  watch: {
    '$route.params.toyId'() {
      this.loadtoy()
    },
  },
} -->

<template>
  <section>
    <input type="text" v-model="toy.name" />
    <!-- add focuse -->
    <input type="number" min="1" v-model="toy.price" title="price" />
    <input type="color" v-model="toy.color" />

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
  //  props: {
  //    car: Object,
  //  },
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
      this.toy = this.$store.dispatch({ type: 'getToyById', toyId: this.$route.params.toyId })
      // this.toy = {
      //   _id: 't101',
      //   name: 'Talking Doll',
      //   price: 123,
      //   labels: ['Doll', 'Battery Powered', 'Baby'],
      //   createdAt: 1631031801011,
      //   inStock: true,
      // }
      // const prm = this.$store.dispatch({ type: 'getToyById', toyId: this.$route.params.toyId })
      // prm.then((toy) => (this.toy = toy))
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
