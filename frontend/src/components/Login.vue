<template>
  <div>
    <div class="container" id="login-page">
      <img id="login-background" src="/static/images/login-background.jpg">
      <div class="row">
        <header class="header">
          <div class=".col-md-6">
            <img class="logo" id="acg-logo" src="/static/images/acg-logo.png">
          </div>
          <div class=".col-md-6">
            <img class="logo" id="aws-logo" src="/static/images/aws-logo.png">
          </div>
        </header>
      </div>
      <section class="content">
        <div class="body" id="login-body">
          <div class="row">
            <h1 class="enlarge">Level-Up <span id="your">Your</span> Community</h1>
          </div>
          <br>
          <div class="row">
            <p>Connecting non-profits with AWS certified professionals across the globe.</p>
          </div>
          <br>
          <div v-if="buttonClicked">
            <input class="login-input" type="email" placeholder="Email" v-model="user.email">
            <input class="login-input" type="password" placeholder="Password" v-model="user.password">
            <img src="/static/images/right-arrow.png">
          </div>
          <div v-else>
            <button @click="displayForm" class="btn btn-login">MENTOR SIGN IN</button>
            <button @click="displayForm" class="btn btn-login">NON-PROFIT SIGN IN</button>
            <p>Not a member? Register now!</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      buttonClicked: false
    }
  },
  methods: {
    displayForm () {
      this.buttonClicked = true
    }
  }
}
</script>
