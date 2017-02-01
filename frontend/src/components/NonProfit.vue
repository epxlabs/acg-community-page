<template>
  <div v-if="error">
    ERROR
  </div>
  <div v-else-if="loading">
    Loading...
  </div>
  <div v-else class="page">
    <div class="container" id="nonprofit-page">
      <div class="row navbar-row">
        <ul class="navbar">
          <li><img class="logo" id="acg-navbar-logo" src="/static/images/acg-logo.png"></li>
          <li><span>Find a Mentor</span></li>
          <li><span>View Organizations</span></li>
          <li><span>Jobs</span></li>
          <li><span>Events</span></li>
          <li><span id="account-links">Account</span></li>
        </ul>
      </div>
      <br>
      <br>
      <div class="row welcome-row">
        <h1 class="welcome">Welcome Back, ASPCA</h1>
        <br>
      </div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <section class="nonprofit-body">
        <div class="row">
          <img id="aspca-logo" src="/static/images/aspca-logo.png">
          <br>
          <span id="aspca-text">ASPCA</span> <span class="edit">Edit</span>
        </div>
        <div class="row">
          <div class="col-md-6">
            <h4 class="nonprofit-header">ABOUT US <span class="edit">Edit</span></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>EIN: 123456789</p>
            <h4 class="nonprofit-header">AVAILABLE PROJECTS <span class="edit">Add New Projects</span></h4>
            <p>No projects to display.</p>
          </div>
          <div class="col-sm-6">
            <h4 class="nonprofit-header">LOCATION <span class="edit">Edit</span></h4>
            <span>424 E. 92nd St</span>
            <br>
            <span>New York, NY 10128-6804</span>
            <div id="map"></div>
            <h4 class="nonprofit-header">CONTACT <span class="edit">Edit</span></h4>
            <span class="fa fa-envelope"></span> <span>publicinformation@aspca.org</span>
            <br>
            <span class="fa fa-phone"></span> <span>888.666.2279</span>
            <br>
            <span>www.aspca.org</span>
            <br>
            <span class="fa fa-facebook-square"></span>
            <span class="fa fa-twitter-square"></span>
            <span class="fa fa-linkedin-square"></span>
            <span class="fa fa-github-square"></span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
var axios = require('axios')

export default {
  name: 'NonProfit',
  data () {
    return {
      loading: false,
      error: false,
      self: this
    };
  },
  mounted () {
    this.createMap()
  },
  methods: {
    createMap () {
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -12.1430911, lng: -77.0227697},
        zoom: 12
      })
    },
    fetchData () {
      var that = this
      var id = this.$route.params.id
      var url = 'https://m4au4jlfse.execute-api.us-west-2.amazonaws.com/test/non-profit/' + id
      axios.get(url).then(function (response){
        var data = response.data["Items"][0]
        console.log(data)
      })
    }
  }
}
</script>
