<template>
  <div class="columns">
    <div class="column"></div>
  </div>
</template>

<script>
export default {
  layout: 'herodark',
  components: {},
  created: function () {
    setTimeout(() => {
      this.redirectIndex()
    }, 1000)
  },
  methods: {
    redirectIndex() {
      this.$router.replace({ path: `/news` })
    }
  }
}
</script>

<style></style>
