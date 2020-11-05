export default function ({ store, redirect }) {
  if (!store.getters.isAuthenticated) {
    redirect('/signin')
    console.log('auth.js ! Middleware')
  }
}