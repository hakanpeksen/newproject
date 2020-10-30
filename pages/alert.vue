<template>
  <div>
    <mainheader theme="dark" />
    <section class="section">alert sayfası</section>
  </div>
</template>

<script>
import mainheader from '~/components/mainheader'
export default {
  name: 'Alert',
  components: {
    mainheader
  },
  head() {
    return {
      title: 'My Alert'
    }
  }
}
</script>

<style scoped></style>
