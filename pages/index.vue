<template>
  <div>
    <h1>Bookings</h1>
    <BookingCard
      v-for="(booking, index) in bookings"
      :key="index"
      :booking="booking"
      :data-index="index"
    />
  </div>
</template>
<script>
import BookingCard from '@/components/BookingCard.vue'
import { mapState } from 'vuex'
export default {
  components: {
    BookingCard,
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch('bookings/fetchEvents')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch bookings at this time. Please try again.',
      })
    }
  },
  computed: mapState({
    bookings: (state) => state.bookings.bookings,
  }),
  head() {
    return {
      title: 'Booking Listing',
    }
  },
}
</script>
