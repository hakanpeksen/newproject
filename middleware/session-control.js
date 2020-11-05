export default function ({ store, req }) {
  if (process.client) {
    store.dispatch('initAuth')
    console.log('session.js Client ! Middleware')
  } else {
    store.dispatch('initAuth', req)
    console.log('session.js Server Middleware')
  }
}

// import Cookie from 'js-cookie'
//eslint-disable-next-line
// export default function ({store}) {
//   if (process.client) {
//     store.dispatch('initAuth')
//   } else {
//     //console.log('server', req)
//     // Cookie.set('authKey', 'hakan')
//     store.dispatch('initAuth', req)
//}
