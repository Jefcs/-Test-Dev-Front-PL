import { createStore } from 'vuex'
import Services from '@/services/Services.js'
import { apiClient } from '../services/api'

export default createStore({
  state: {
    errorEmail: [],
    errorPassword: [],
    user: null,
    regiterClients: null,
    editUser: {},
    clientId: null,
    userInfo: {},
    updateUser: {},
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
    REGISTER_CLIENTS(state, clients) {
      state.regiterClients = clients
    },
    DELETE_CLIENT(state, id) {
      state.clientId = id
    },
    UPDATE_USER(state, updateUser) {
      state.updateUser = updateUser
    },
    SET_EDIT_USER_INFO(state, user) {
      state.userInfo = user
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

    async cadastrar({ commit }, { name, email, mobile }) {
      await Services.postClients(name, email, mobile).then(({ data }) => {
        commit('REGISTER_CLIENTS', data)
      })
    },

    deletarId({ commit }, userId) {
      Services.deleteEvent(userId).then(() => {
        commit('DELETE_CLIENT', userId)
        Services.getEvent().then(data => {
          commit('GET_CLIENTS', data.data[0])
        })
      })
    },

    atualizarUser({ commit }, { name, email, mobile, id }) {
      Services.putClients(name, email, mobile, id).then(({ data }) => {
        commit('UPDATE_USER', data)
      })
    },

    editUser({ commit }, userInfo) {
      commit('SET_EDIT_USER_INFO', userInfo)
    },
  },
  modules: {},
})
