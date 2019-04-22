<template>
  <section class="container">
    {{ text }}
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  computed: {
    text() {
      return this.$store.state.text
    }
  },
  async fetch({ store }) {
    await store.dispatch('LOAD_TEXT')
  }
}
</script>

<style></style>
