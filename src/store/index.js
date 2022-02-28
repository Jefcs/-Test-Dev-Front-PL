import { createStore } from 'vuex'
import axios from 'axios'
import Services from '@/services/Services.js'

export default createStore({
  state: {
    errorEmail: [],
    errorPassword: [],
    user: null,
    clients: null,
  },
  mutations: {
    EMAIL_MESSAGE(state, message) {
      state.errorEmail.push(message)
    },
    PASSWORD_MESSAGE(state, message) {
      state.errorPassword.push(message)
    },
    SET_USER_DATA(state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common[
        'x-access-token'
      ] = `Bearer ${userData.token}`
    },
    GET_CLIENTS(state, data) {
      state.clients = data
    },
  },
  actions: {
    login({ commit }, credentials) {
      Services.postEvent(credentials.user, credentials.pwd).then(({ data }) => {
        commit('SET_USER_DATA', data)
      })
    },
    listagem({ commit }) {
      Services.getEvent().then(data => {
        commit('GET_CLIENTS', data)
      })
    },
  },
  modules: {},
})
