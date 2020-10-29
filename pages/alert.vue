<template>
  <div>
    <mainheader theme="dark" />
    alert sayfası
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
