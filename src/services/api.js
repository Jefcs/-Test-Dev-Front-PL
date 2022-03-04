import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://testfrontpl.herokuapp.com',
  headers: {
    Accept: 'application/json',
    'content-type': 'application/json',
  },
})

export { apiClient }
