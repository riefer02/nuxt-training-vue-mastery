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
export default {
  components: {
    BookingCard,
  },
  async asyncData(context) {
    try {
      const response = await context.$axios.get(
        'http://localhost:3000/bookings'
      )
      return {
        bookings: response.data,
      }
    } catch (e) {
      context.error({
        statusCode: 503,
        message: 'Unable to fetch bookings at this time. Please try again.',
      })
    }
  },
  head() {
    return {
      title: 'Booking Listing',
    }
  },
}
</script>
