export default function ({ store, req }) {
  if (process.client) {
    store.dispatch('initAuth')
  } else {
    store.dispatch('initAuth', req)
  }
}
