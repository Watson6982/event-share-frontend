<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link :to="{ name: 'Events'}">Events</router-link>
      <router-link :to="{ name: 'Login'}">Login</router-link>
      <a href="#" v-on:click="logout">Logout</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
import UserService from './UserService'
// import router from './router'
// import axios from 'axios'
export default {
  name: 'App',
  methods: {
    // logout: function (e) {
    //   axios.get('https://event-share-backend.herokuapp.com/api/logout')
    //     .then(() => {
    //       router.push('/')
    //     })
    // }

    logout: function () {
      UserService.logoutUser()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
div.container {
  max-width: 800px;
  margin: 0 auto;
}
p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}
div.event {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}
div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}
p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
