<template>
  <div class="container">
    <div v-if="sendForm === true">
      <message
        :issuccess="issuccess"
        :title="title"
        :message="message"
        :iconclass="iconclass"
        :buttontext="buttontext"
        :buttonlink="buttonlink"
      />
    </div>
    <form method="post" @submit.prevent="signupUser">
      <div class="columns">
        <div class="column is-6 is-offset-3">
          <div class="box has-background-lighter">
            <div class="p-md">
              <div class="content p-b-lg">
                <h1 class="has-text-centered has-text-weight-normal">
                  Create account
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
                  minlength="5"
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
                    Create an account
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="p-t-sm has-text-centered">
            Already got an account?
            <n-link to="/signin" class="has-text-primary"> Signin </n-link>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import message from '@/components/message'
export default {
  layout: 'herolight',
  components: {
    message
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
      sendForm: false,
      isError: false,
      errorMessage: null
    }
  },
  methods: {
    signupUser() {
      this.sendForm = true
      this.issuccess = true
      this.title = 'Check your email!'
      this.message = `We've emailed a special link to ${this.userForm.email}. Click the link to confirm your address and get started.`
      this.iconclass = 'icon-email'
      this.buttontext = ''
      this.buttonlink = ''
      this.isError = false
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
      title: 'Sign up'
    }
  }
}
</script>
