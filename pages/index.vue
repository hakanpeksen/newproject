<template>
  <div class="columns">
    <div class="column has-text-centered is-8 is-offset-2">
      <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    </div>
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
