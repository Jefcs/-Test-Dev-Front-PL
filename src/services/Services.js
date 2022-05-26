import { apiClient } from './api'

export default {
  postEvent(user, pwd) {
    return apiClient.post('/login', {
      user,
      pwd,
    })
  },

  getEvent() {
    return apiClient.get('/clientes')
  },

  postClients(name, email, mobile) {
    return apiClient.post('/clientes', {
      name,
      email,
      mobile,
    })
  },

  putClients(name, email, mobile, id) {
    return apiClient.put(`/clientes/${id}`, {
      name,
      email,
      mobile,
    })
  },

  deleteEvent(id) {
    return apiClient.delete(`/clientes/${id}`)
  },
}
