<template>
  <div>
  <div class="container">
    <div class="content" v-if="business">
      <button v-on:click="switchForm">Switch to Volunteer</button>
      <div class="form-group">
      <label for="name">Name</label>
      <input type="text" v-model="business.name">
      </div>
      <div class="form-group">
      <label for="email">Email</label>
      <input type="text" v-model="business.contact.email">
      </div>
      <div class="form-group">
      <label :for="business.location.street">Street</label>
      <input type="text" v-model="business.location.street">
      </div>
      <div class="form-group">
      <label :for="business.location.city">City</label>
      <input type="text" v-model="business.location.city">
      </div>
      <div class="form-group">
      <label :for="business.location.state">State</label>
      <input type="text" v-model="business.location.state" maxlength="2">
      </div>
      <div class="form-group">
      <label :for="business.location.zip">Zipcode</label>
      <input type="text" v-model="business.location.zip" maxlength="5">
      </div>
      <div class="form-group">
      <label :for="business.contact.phone">Phone</label>
      <input type="text" v-model="business.location.state">
      </div>
      <div class="form-group">
      <label :for="business.contact.social_media.facebook">Facebook</label>
      <input type="text" v-model="business.contact.social_media.facebook">
      </div>
      <div class="form-group">
      <label :for="business.contact.website">Website</label>
      <input type="text" v-model="business.contact.website">
      </div>
      <div class="form-group">
      <label :for="business.contact.about_us">About Us</label>
      <input type="textarea" v-model="business.contact.about_us">
      </div>
      <button v-on:click="submit()">Submit</button>
    </div>
    <div class="content" v-else-if="volunteer">
      <button v-on:click="switchForm">Switch to Business</button>
      <div class="form-group">
      <label for="name">Name</label>
      <input type="text" v-model="volunteer.name">
      </div>
      <div class="form-group">
      <label for="email">Email</label>
      <input type="text" v-model="volunteer.email">
      </div>
      <div class="form-group">
      <label for="skills">Skills:</label>
      <div v-for="skill in Object.keys(volunteer.skills)">
        <label :for="skill">{{skill}}</label>
        <select v-model="volunteer.skills[skill]">
          <option v-for="number in scale" v-bind:value="number">
            {{number}}
          </option>
        </select>
      </div>
      </div>
      <div class="form-group">
        <label for="certs">Certs</label>
        <div v-for="cert in certs">
        <input type="checkbox" v-bind:value="cert" v-model="volunteer.certs">
        <label :for="cert">{{titleize(cert)}}</label>
        </div>
      </div>
      <div class="form-group">
        <label for="causes">Causes</label>
        <div v-for="cause in causes">
        <input type="checkbox" v-bind:value="cause" v-model="volunteer.causes">
        <label :for="cause">{{titleize(cause)}}</label>
        </div>
      </div>
      <button v-on:click="submit()">Submit</button>
    </div>
  </div>
</template>


<script>
var axios = require('axios')
export default {
  data () {
    return {
      business: {
        location: {},
        contact: {
          social_media: {}
        }
      },
      volunteer: null,
      scale: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      certs: ['associate_solutions_architect', 'associate_sysops_administrator', 'associate_developer', 'specialty_security', 'specialty_big_data', 'specialty_advanced_networking', 'professional_solutions_architect', 'professional_devops_engineer'],
      causes: ['animal welfare', 'arts and culture', 'children', 'civil rights', 'economic empowerment', 'education', 'environment', 'health', 'mentorship', 'politics', 'poverty alleviation', 'religion', 'science and technology', 'social services', 'women']
    }
  },
  methods: {
    switchForm () {
      if (this.business) {
        this.business = null
        this.volunteer = {
          name: '',
          email: '',
          skills: {
            database: 0,
            security: 0,
            operations: 0,
            mobile: 0,
            serverless: 0,
            development: 0},
          certs: [],
          causes: []
        }
      } else {
        this.volunteer = null
        this.business = {
          location: {},
          contact: {
            social_media: {}
          }
        }
      }
    },
    titleize (cert) {
      var stringArray = cert.split('_')
      return stringArray.map(function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
      }).join(' ')
    },
    submit () {
      if (this.volunteer) {
        this.data = this.volunteer
        this.url = 'https://m4au4jlfse.execute-api.us-west-2.amazonaws.com/test/mentors/create'
      } else {
        this.data = this.business
        this.url = 'https://m4au4jlfse.execute-api.us-west-2.amazonaws.com/test/non-profit/create'
      }
      axios.put(this.url, this.data).then(function (response) {
        window.alert('Success!')
      }).catch(function (error) {
        window.alert(error)
      })
    }
  }
}
</script>
