<template>
    <div>
        <h2>Login</h2>
        <form v-on:submit="login">
            <input type="text" id="userEmail" v-model="email" placeholder="Email" name="email"><br>
            <input type="password" id="userPassword" v-model="password" placeholder="Password" name="password"><br>
            <input type="submit" value="Login" />
        </form>
    </div>
</template>

<script>
import UserService from '../UserService'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: async function (e) {
      e.preventDefault()
      await UserService.loginUser(this.email, this.password)
    }
  }
}
</script>
