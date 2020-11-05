import Cookie from 'js-cookie'
export const state = () => ({
  //   token: '',
  authKey: null
})
export const getters = {
  isAuthenticated(state) {
    return state.authKey != null
  },
  getAuthKey(state) {
    return state.authKey
  }

  //   getToken(state) {
  //     return state.token
  //   }
}
export const mutations = {
  setAuthKey(state, authKey) {
    Cookie.set('authKey', authKey)
    //localStorage.setItem('authKey', authKey)
    state.authKey = authKey
  },
  clearAuthKey(state) {
    Cookie.remove('authKey')
    state.authKey = null
  }

  //   setToken(state, payload) {
  //     state.token = payload
  //   },
  //   clearToken(state) {
  //     state.token = ''
  //   }
}
export const actions = {
  nuxtServerInit(_, { req }) {
    console.log('NuxtServer', req.headers.cookie) // authKey=hakan-test
  },
  //   initAuth({ commit }, req) {
  //     if (req) {
  //       console.log('store', req) // index.js?9101:43 auth-key-from
  //       commit('setAuthKey', req)
  //     } else {
  //       console.log('else bloğu', req)
  //       commit('setAuthKey', req)
  //     }
  //   }
  initAuth({ commit }, req) {
    let token
    if (req) {
      // request varsa, Server üzerindeyiz
      if (!req.headers.cookie) {
        // request de  cookie yoksa
        return
      }
      // buradaysa  cookie yi alalım
      if (req.headers.cookie) {
        //eslint-disable-next-line
        token = req.headers.cookie
      } else {
        // buradaysa cookie yok
        console.log('cookie yok')
      }
    } else {
      // request yoksa, Client üzerindeyiz, token ı localstoragedan alıcaz
      token = localStorage.getItem('authKey')
      if (!token) {
        // token yoksa
        return
      }
    }
    commit('setAuthKey', token)
  }
}

//eslint-disable-next-line

//}

// export const actions = {
//   async nuxtServerInit({ app, route }) {
//     console.log(app.$cookiz.set)
//     app.$cookiz.set('lang', route.query.lang)
//   }
// }

//   login({ commit }) {
//     commit('setToken', 'ACHAAA12345878777777')
//     window.localStorage.setItem('token', 'ACHAAA12345878777777')
//     window.localStorage.setItem(
//       'expirationDate',
//       new Date().getTime() + 3 * 30 * 1000
//     )
//   },
//   logout({ commit }) {
//     commit('clearToken')
//     window.localStorage.removeItem('token')
//     window.localStorage.removeItem('expirationDate')
//   },
//   setTimeoutTimer({ dispatch }, expiresIn) {
//     setTimeout(() => {
//       dispatch('logout')
//     }, expiresIn)
//   }
