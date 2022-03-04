import { createStore } from 'vuex'
import Services from '@/services/Services.js'
import { apiClient } from '../services/api'

export default createStore({
  state: {
    errorEmail: [],
    errorPassword: [],
    user: null,
    clients: {},
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
      apiClient.defaults.headers.common['x-access-token'] = userData.token
    },
    GET_CLIENTS(state, data) {
      state.clients = data
    },
  },
  actions: {
    async login({ commit }, credentials) {
      await Services.postEvent(credentials.user, credentials.pwd).then(
        ({ data }) => {
          commit('SET_USER_DATA', data)
        }
      )
    },
    listagem({ commit }) {
      Services.getEvent().then(data => {
        commit('GET_CLIENTS', data.data[0])
      })
    },
  },
  modules: {},
})
