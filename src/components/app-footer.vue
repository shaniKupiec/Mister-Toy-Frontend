<template>
  <footer class="footer-container">
    <section class="main-footer flex justify-center items-center">
      <p>&copy; Coffeerights Shani Kupiec {{ currYear }}</p>
    </section>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currYear: 2022,
    }
  },
}
</script>
