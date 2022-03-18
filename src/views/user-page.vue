<template>
  <section>
    <section v-if="loggedinUser">
      <pre>{{ loggedinUser }}</pre>
      <ul v-if="loggedinUser.isAdmin">
          <li v-for="user in usersList" :key="user._id">
              <pre>{{user}}</pre>
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
    </section>
  </section>
</template>

<script>
import { userService } from '../services/user.service.js'

export default {
  data() {
    return {
      fullname: '',
      username: '',
      password: '',
      loggedinUser: userService.getLoggedinUser(),
    }
  },
  computed: {
    async usersList(){
        return await userService.query()
    }
  },
  methods: {
    async login() {
      try {
        this.loggedinUser = await userService.login(this.username, this.password)
      } catch (err) {
        console.log(err)
      }
    },
    async signup() {
      try {
        this.loggedinUser = await userService.signup(this.fullname, this.username, this.password)
      } catch (err) {
        console.log(err)
      }
    },
    async logout() {
      try {
        await userService.logout()
        this.loggedinUser = null
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
