<template>
  <div class="col-sm-4 col-sm-offset-4 login-form">
    <h2 v-if="!isNewPassword">Level-Up Your Community</h2>
    <h2 v-else>Please enter new password</h2>
    <p>Connecting non-profits with AWS certified professionals across the globe.</p>
    <button>Mentor Sign In</button>
    <button>Non-Profit Sign In</button>

    <p>Not a member? Register now!</p>
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