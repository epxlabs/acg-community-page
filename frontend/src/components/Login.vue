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
        <h1>Level-Up <span id="your">Your</span> Community</h1>
        </div>
        <div class="row">
        <h4>Connecting non-profits with AWS certified professionals across the globe.</h4>
      </div>
        <button class="btn btn-login">MENTOR SIGN IN</button>
        <button class="btn btn-login">NON-PROFIT SIGN IN</button>

        <p>Not a member? Register now!</p>
      </div>
    </section>
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
    }
  }
}
</script>
