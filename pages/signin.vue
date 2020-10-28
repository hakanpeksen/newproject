<template>
  <div>
    <mainheader />
    <div class="hero-body">
      <div class="container">
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

                  <b-field
                    class="p-t-xs new-form"
                    label="Email"
                    label-for="email"
                  >
                    <b-input
                      id="email"
                      v-model="userForm.email"
                      type="text"
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
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import mainheader from '~/components/mainheader'
export default {
  components: {
    mainheader
  },
  //   asyncData ({ store, redirect }) {
  //     if (store.state.auth.loggedIn === true) {
  //       return redirect('/alert')
  //     }
  //   },
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
      title: 'Login'
    }
  }
}
</script>
