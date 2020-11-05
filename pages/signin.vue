<template>
  <form method="post" @submit.prevent="signinUser">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <div class="box has-background-lighter">
          <div class="p-md">
            <div class="content p-b-lg">
              <h1 class="has-text-centered has-text-weight-normal">
                Welcome Login
              </h1>
            </div>

            <b-message :active.sync="isError" type="is-danger">
              {{ errorMessage }}
            </b-message>

            <b-field class="p-t-xs new-form" label="Email" label-for="email">
              <b-input
                id="email"
                v-model="userForm.email"
                type="email"
                size="is-medium"
                placeholder="Email address"
                required
                autofocus
              />
            </b-field>
            <b-field
              class="p-t-md new-form"
              label="Password"
              label-for="password"
            >
              <b-input
                id="password"
                v-model="userForm.password"
                type="password"
                size="is-medium"
                placeholder="Password"
                required
                password-reveal
              />
            </b-field>
            <div class="field p-t-sm p-b-md new-form">
              <b-checkbox class="is-pulled-left"> Remember me </b-checkbox>
              <div class="has-text-right is-pulled-right">
                <n-link to="/reset-password" class="has-text-primary">
                  Forgot Password?
                </n-link>
              </div>
            </div>
            <div class="field p-t-md has-text-right">
              <div class="control">
                <button
                  type="submit"
                  name="button"
                  class="button is-medium is-primary is-fullwidth"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="p-t-sm has-text-centered">
          Don't have an account?
          <n-link to="/signup" class="has-text-primary">
            Create account for free
          </n-link>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  layout: 'herolight',
  components: {},
  // asyncData({ store }) {
  //   // if (store.state.auth.loggedIn === true) {
  //   //   return redirect('/alert')
  //   // }
  //   if (process.client) {
  //     store.dispatch('initAuth')
  //   } else {
  //     //console.log('server', req)
  //     // Cookie.set('authKey', 'hakan')
  //     store.dispatch('initAuth')
  //   }
  // },
  data() {
    return {
      userForm: {
        email: '',
        password: ''
      },
      isError: false,
      errorMessage: null
    }
  },
  methods: {
    signinUser() {
      this.$store.dispatch('initAuth', 'auth-key-from')
      this.$router.push('/alert')
    }
    // getCookie() {
    //   // this.fromCookie = Cookie.get('authKey')
    //   this.fromCookie = this.$store.getters.getAuthKey
    // }
  },

  //   methods: {
  //     async signinUser () {
  //       try {
  //         await this.$auth.login({ data: this.userForm })
  //           .then((res) => {
  //             this.$auth.setRefreshToken('local', res.data.refreshToken)
  //           })
  //         if (this.$auth.loggedIn) {
  //           this.$router.push({ path: '/alert' })
  //           this.isError = false
  //           this.$buefy.toast.open({
  //             message: 'You have successfully logged in!',
  //             type: 'is-success',
  //             position: 'is-top',
  //             duration: 2000
  //           })
  //         }
  //       } catch (e) {
  //         this.errorMessage = 'Your email address or password don\'t match!'
  //         this.isError = true
  //       }
  //     }
  //   },
  head() {
    return {
      title: 'Sign in'
    }
  }
}
</script>
