<template>
  <div>
    <mainheader theme="dark" />
    <section class="section">alert sayfası</section>
    {{ moment(new Date().getTime() / 1000 + 60 * 30) }}
    {{ Math.floor(new Date().getTime() / 1000) }}
  </div>
</template>

<script>
import moment from 'moment'
import mainheader from '~/components/mainheader'
export default {
  name: 'Alert',
  components: {
    mainheader
  },
  data() {
    return {
      date: '',
      moment: moment
    }
  },
  mounted() {
    this.checkTokenTime()
  },
  methods: {
    checkTokenTime() {
      var now = new Date().getTime() + 3 * 60 * 1000
      console.log(now) // 30dk sonrası ms cinsi  //1604413297751
      let createdDate = new Date(1604416023639)
      let expirationDate = createdDate
      let time = new Date().getTime()
      if (time >= +expirationDate) {
        console.log('token süresi geçmiş...')
      } else {
        let timerSecond = +expirationDate - time
        this.setTimeoutTimer(timerSecond)
      }
    },
    setTimeoutTimer(expiresIn) {
      console.log(expiresIn)
      setTimeout(() => {
        alert('logout')
      }, expiresIn)
    }
  },
  head() {
    return {
      title: 'My Alert'
    }
  }
}
</script>

<style scoped></style>
