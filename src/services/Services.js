import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://testfrontpl.herokuapp.com',
  headers: {
    Accept: 'application/json',
    'content-type': 'application/json',
  },
})

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
