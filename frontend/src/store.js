import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// NOTE: currently we aren't using this, but leaving hear as it's a good way to
// manage reactive state globally. We may refactor to use this later.

const state = {
  callingAPI: false,
  searching: '',
  serverURI: 'http://localhost:8080',
  user: null,
  token: null,
  userInfo: {
    messages: [{1: 'test', 2: 'test'}],
    notifications: [],
    tasks: []
  }
}

const mutations = {
  TOGGLE_LOADING (state) {
    state.callingAPI = !state.callingAPI
  },
  TOGGLE_SEARCHING (state) {
    state.searching = (state.searching === '') ? 'loading' : ''
  },
  SET_USER (state, user) {
    state.user = user
  },
  SET_TOKEN (state, token) {
    state.token = token
  }
}

export default new Vuex.Store({
  state,
  mutations
})
