<template>
  <section class="hero splash-bg is-fullheight">
    <div class="hero-head">
      <mainheader theme="light" />
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
  name: 'Herolight',
  // middleware: ['auth'],
  middleware: ['session-control', 'auth'],
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
