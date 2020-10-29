<template>
  <section class="hero is-link is-bold is-fullheight">
    <div class="hero-head">
      <mainheader theme="dark" />
    </div>

    <div class="hero-body">
      <div class="container">
        <nuxt />
      </div>
    </div>
  </section>
</template>

<script>
import mainheader from '~/components/mainheader'
export default {
  name: 'Herodark',
  components: {
    mainheader
  },
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<style scoped></style>
