<template>
  <div>
    <h1>{{ booking.title }}</h1>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, error, params }) {
    try {
      const { data } = await $axios.get(
        'http://localhost:3000/bookings/' + params.id
      )
      return {
        booking: data,
      }
    } catch (e) {
      error({
        statusCode: 503,
        message:
          'Unable to fetch booking #' + params.id + '. Please try again.',
      })
    }
  },
  head() {
    return {
      title: this.booking.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'What you need to know about' + this.booking.title,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
