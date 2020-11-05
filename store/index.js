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
}
export const mutations = {
  setAuthKey(state, authKey) {
    state.authKey = authKey
  },
  clearAuthKey(state) {
    Cookie.remove('authKey')
    localStorage.removeItem('authKey')
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
    console.log('NuxtServer', req.headers.cookie) // authKey=hakan
  },
  initAuth({ commit }, req) {
    let token
    if (req) {
      console.log('Serverdayız')
      // request varsa, Server üzerindeyiz
      if (!req.headers.cookie) {
        // request de  cookie yoksa
        return
      }
      // buradaysa  cookie yi alalım
      token = req.headers.cookie.split('=')[1]
    } else {
      // request yoksa, Client üzerindeyiz, token ı localstoragedan alıcaz
      token = localStorage.getItem('authKey')
      if (!token) {
        // token yoksa
        return
      }
    }
    commit('setAuthKey', token)
  },
  login({ commit }, authKey) {
    Cookie.set('authKey', authKey)
    localStorage.setItem('authKey', authKey)
    commit('setAuthKey', authKey)
  },
  logout({ commit }) {
    commit('clearAuthKey')
  }
}

//   login({ commit }) {
//     commit('setToken', 'ACHAAA12345878777777')
//     window.localStorage.setItem('token', 'ACHAAA12345878777777')
//     window.localStorage.setItem(
//       'expirationDate',
//       new Date().getTime() + 3 * 30 * 1000
//     )
//   },

//   setTimeoutTimer({ dispatch }, expiresIn) {
//     setTimeout(() => {
//       dispatch('logout')
//     }, expiresIn)
//   }
