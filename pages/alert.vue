<template>
  <div>
    <mainheader theme="dark" />
    <section class="section">alert sayfası</section>
    <!-- <button class="button" @click="onSubmit">cookie yaz</button> -->
    <button class="button" @click="setCookie">set cookie</button>
    <!-- <button class="button" @click="getCookie">get cookie</button> -->
    <input v-model="cookieValue" type="text" />
    {{ fromCookie }}
  </div>
</template>

<script>
//import Cookie from 'js-cookie'
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
      moment: moment,
      cookieValue: null,
      fromCookie: null
    }
  },
  mounted() {
    //this.checkTokenTime()
  },
  methods: {
    setCookie() {
      //Cookie.set('authKey', this.cookieValue, { expires: 1 })
      localStorage.setItem('authKey', 'hakan')

      // this.$store.commit('setAuthKey', this.cookieValue)
    },
    getCookie() {
      // this.fromCookie = Cookie.get('authKey')
      //   this.fromCookie = this.$store.getters.getAuthKey
    }

    // onSubmit() {
    //   this.$store
    //     .dispatch('initAuth', 'auth-key-from')
    //     .then(() => console.log('onSubmit methodundan geldim'))
    // }

    // checkTokenTime() {
    //   var now = new Date().getTime() + 3 * 60 * 1000
    //   console.log(now) // 30dk sonrası ms cinsi  //1604413297751
    //   let createdDate = new Date(1604416023639)
    //   let expirationDate = createdDate
    //   let time = new Date().getTime()
    //   if (time >= +expirationDate) {
    //     console.log('token süresi geçmiş...')
    //   } else {
    //     let timerSecond = +expirationDate - time
    //     this.setTimeoutTimer(timerSecond)
    //   }
    // },
    // setTimeoutTimer(expiresIn) {
    //   console.log(expiresIn)
    //   setTimeout(() => {
    //     alert('logout')
    //   }, expiresIn)
    // }
  },
  head() {
    return {
      title: 'My Alert'
    }
  }
}
</script>

<style scoped></style>
