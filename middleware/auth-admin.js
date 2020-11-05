export default async function ({ $auth, redirect, store }) {
  let user = $auth.state.user
  if (user && user.admin) {
    // let the user in
  } else {
    store.dispatch('snackbar', { color: 'error' })
    redirect('/')
    // redirect them to
  }
}
// admin linkine tıklayınca  /admine  gitmez  snackbar çıkar
// pages/admin.vue  da  middleware: ['auth-admin'] var
