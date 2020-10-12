import EventService from '@/services/EventService.js'
export const state = () => ({
  bookings: [],
  booking: {},
})

export const mutations = {
  SET_BOOKINGS(state, bookings) {
    state.bookings = bookings
  },
  SET_BOOKING(state, booking) {
    state.booking = booking
  },
}

export const actions = {
  fetchEvents({ commit }) {
    return EventService.getEvents().then((response) => {
      commit('SET_BOOKINGS', response.data)
    })
  },
  fetchEvent({ commit }, id) {
    return EventService.getEvent(id).then((response) => {
      commit('SET_BOOKING', response.data)
    })
  },
}
