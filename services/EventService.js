import axios from 'axios'

// Configuring Axios Instance
const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents() {
    return apiClient.get('/bookings')
  },
  getEvent(id) {
    return apiClient.get('/bookings/' + id)
  },
}
