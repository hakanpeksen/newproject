<template>
  <header>
    <nav
      id="navMain"
      class="navbar"
      :class="[theme === 'light' ? '' : 'is-link']"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container p-l-sm p-r-sm">
        <div class="navbar-brand">
          <n-link class="navbar-item" to="/" no-prefetch>
            <img src="~/assets/images/newlogo.svg" width="100" alt="" />
          </n-link>
          <a
            role="button"
            aria-controls="contentIdForA11y2"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarMain"
            :class="[isOpen ? 'is-active' : '']"
            @click="isOpen = !isOpen"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div
          id="navbarMain"
          :class="[isOpen ? 'is-active' : '']"
          aria-controls="contentIdForA11y2"
          class="navbar-menu has-text-right"
        >
          <div class="navbar-end">
            <n-link
              to="/news"
              class="navbar-item"
              :class="[theme === 'light' ? '' : 'has-text-white']"
            >
              News
            </n-link>
            <n-link
              to="/alert"
              class="navbar-item"
              :class="[theme === 'light' ? '' : 'has-text-white']"
            >
              Alerts
            </n-link>
            <n-link
              to="/signin"
              class="navbar-item"
              :class="[theme === 'light' ? '' : 'has-text-white']"
            >
              Sign in
            </n-link>
            <a
              href="#"
              class="navbar-item"
              :class="[theme === 'light' ? '' : 'has-text-white']"
              @click.prevent="logout"
            >
              Logout
            </a>
            <n-link
              to="/signup"
              class="navbar-item"
              :class="[theme === 'light' ? '' : 'has-text-white']"
            >
              Create account
            </n-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/signin')
    }
  }
}
</script>

<style></style>
