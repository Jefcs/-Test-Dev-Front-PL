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
}
