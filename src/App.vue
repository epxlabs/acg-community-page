<template>
  <div>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
    <div id="app">
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      section: 'Head',
      version: '0.10.0',
      callingAPI: false,
      serverURI: 'http://localhost:8080',
      caller: this.$http
    }
  },
  methods: {
    callAPI: function (method, url, data) {
      this.callingAPI = true
      url = url || this.serverURI // if no url is passed then inheret local server URI
      return this.caller({
        url: url,
        method: method,
        data: data
      })
    },
    logout: function () {
      this.$store.dispatch('SET_USER', null)
      this.$store.dispatch('SET_TOKEN', null)

      if (window.localStorage) {
        window.localStorage.setItem('user', null)
        window.localStorage.setItem('token', null)
      }

      this.$router.push('/login')
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
  margin-top: 20px;
  margin-left: 100px;
  margin-right: 100px;
}
</style>
