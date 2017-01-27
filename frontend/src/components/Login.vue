<template>
  <div class="page">
    <div class="container" id="login-page">
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
            <div class="row">
            <input class="login-input" type="email" placeholder="Email" v-model="user.email">
            <input class="login-input" id="password-input" type="password" placeholder="Password" v-model="user.password">
            <img src="/static/images/right-arrow.png">
            </div>
            <div class="row">
              <span id="password-reset">Forgot your password?</span>
            </div>
          </div>
          <div v-else>
            <div class="row">
            <button @click="displayForm" class="btn btn-login">VOLUNTEER SIGN IN</button>
            <button @click="displayForm" class="btn btn-login">NON-PROFIT SIGN IN</button>
            </div>
          </div>
          <br>
          <div class="row">
          <p>Not a member? Register now!</p>
          <div class="row">
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
