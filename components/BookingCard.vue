<template>
  <nuxt-link :to="'/booking/' + booking.id">
    <div class="-shadow">
      <span class="eyebrow"> @{{ booking.time }} on {{ parsedDate }} </span>
      <h4 class="title">
        {{ booking.title }}
      </h4>
      <span>{{ booking.attendees.length }} attending</span>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  name: 'BookingCard',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    booking: Object,
  },
  computed: {
    parsedDate() {
      const eventDate = new Date(this.booking.date)
      return eventDate.toDateString()
    },
  },
}
</script>
<style scoped>
div {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
div:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.title {
  margin: 0;
  color: black;
}
a {
  text-decoration: none;
}
</style>
