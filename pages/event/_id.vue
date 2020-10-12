<template>
  <div>
    <h1>Booking #{{ id }}</h1>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Booking #' + this.id,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'What you need to know about event #' + this.id,
        },
      ],
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
  },
}
</script>

<style lang="scss" scoped></style>
