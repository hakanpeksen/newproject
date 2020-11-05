<template>
  <div><nuxt /> <mainfooter /></div>
</template>
<script>
import mainfooter from '~/components/mainfooter'
export default {
  name: 'Default',
  //middleware: ['session-control', 'auth'],
  middleware: ['auth'],
  components: {
    mainfooter
  },
  created() {
    // if (process.client) {
    //   localStorage.setItem('authKey', 'hakan')
    // }
    // console.log('default vue')
    // this.$store.dispatch('initAuth')
  }
}
</script>

<style></style>
