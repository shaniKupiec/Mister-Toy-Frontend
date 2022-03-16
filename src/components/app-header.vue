<template>
  <header class="header-container">
    <section class="main-header flex items-center justify-between">
      <img class="logo" src="../assets/logo.png" alt="" @click="goHome"/>
      <nav class="flex gap-1">
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/toy">Toys</router-link>
        <router-link class="link" to="/about">About</router-link>
        <router-link class="link" to="/dashboard">Dashboard</router-link>
        <router-link class="link" to="/shop">Our Shops</router-link>
      </nav>
    </section>
  </header>
</template>

<script>
export default {
  methods: {
    goHome(){
      this.$router.push('/')
    }
  },
}
</script>
