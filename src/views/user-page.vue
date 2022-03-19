<template>
  <section>
    <!-- <el-button v-if="isLoading" type="primary" loading class="loading">Loading</el-button>
    <section v-if="loggedinUser">
      <pre>{{ loggedinUser }}</pre>
      <ul v-if="loggedinUser.isAdmin">
        <li v-for="user in usersList" :key="user._id">
          <pre>{{ user }}</pre>
        </li>
      </ul>
      <button @click="logout">Logout</button>
    </section>
    <section v-else>
      <h4>Login</h4>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Enter username" />
        <input type="text" v-model="password" placeholder="Enter password" />
        <button>Login</button>
      </form>
      <hr />
      <h4>Signup</h4>
      <form @submit.prevent="signup">
        <input type="text" v-model="fullname" placeholder="Enter fullname" />
        <input type="text" v-model="username" placeholder="Enter username" />
        <input type="text" v-model="password" placeholder="Enter password" />
        <button>Signup</button>
      </form>
    </section> -->
    HI
  </section>
</template>

<script>
export default {
  data() {
    return {
      fullname: '',
      username: '',
      password: '',
    }
  },
  computed: {
    async usersList() {
      try {
        return await this.$store.dispatch({
          type: 'loadUsers',
        })
      } catch (err) {
        console.log(err)
      }
    },
    loggedinUser() {
      return this.$store.getters.loggedInUser
    },
    isLoading() {
      return this.$store.getters.isLoading
    },
  },
  methods: {
    async login() {
      try {
        // this.loggedinUser =
        const userInfo = { username: this.username, password: this.password } //correct
        await this.$store.dispatch({
          type: 'login',
          userInfo,
        })
      } catch (err) {
        console.log(err)
      }
    },
    async signup() {
      try {
        // this.loggedinUser =
        const user = { fullname: this.fullname, username: this.username, password: this.password } //correct
        await this.$store.dispatch({
          type: 'saveUser',
          user,
        })
      } catch (err) {
        console.log(err)
      }
    },
    async logout() {
      try {
        await this.$store.dispatch({
          type: 'logout'
        })
        // this.loggedinUser = null
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
