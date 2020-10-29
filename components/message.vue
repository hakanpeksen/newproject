<template>
  <div class="container">
    <div class="columns">
      <div class="column has-text-centered is-8 is-offset-2">
        <div class="content">
          <h1
            class="has-text-weight-normal"
            :class="[issuccess ? 'has-text-success' : 'has-text-danger']"
          >
            <span class="lt-icon is-size-3 p-r-sm" :class="iconclass" />
            {{ title }}
          </h1>
        </div>
        <article
          class="message"
          :class="[issuccess ? 'is-success' : 'is-danger']"
        >
          <div class="message-body has-text-left content">
            <p class="is-size-5">
              {{ message }}
            </p>
          </div>
        </article>
        <n-link
          v-if="buttontext !== ''"
          :to="buttonlink"
          class="button is-medium"
          :class="[issuccess ? 'is-success' : 'is-grey']"
        >
          <span
            v-if="issuccess === false"
            class="lt-icon icon-left has-text-dark p-r-sm"
          />
          {{ buttontext }}
          <span
            v-if="issuccess === true"
            class="lt-icon icon-right has-text-white p-l-sm"
          />
        </n-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    issuccess: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    iconclass: {
      type: String,
      required: true
    },
    buttontext: {
      type: String,
      required: true
    },
    buttonlink: {
      type: String,
      required: true
    }
  }
}
</script>
