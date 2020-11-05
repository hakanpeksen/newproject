import Cookie from 'js-cookie'
export const state = () => ({
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
    Cookie.remove('expiresIn')

    if (process.client) {
      // Client üzerindeysen sil
      // sayfa yenilenince  initAuth  ilk server tarafında çalışacağı için, clearAuthKey de çalışacağı  için(localStorage silinmemesi için kontrol ekledik)
      localStorage.removeItem('authKey')
      localStorage.removeItem('expiresIn')
    }
    state.authKey = null
  }
}
export const actions = {
  // nuxtServerInit(_, { req }) {
  //   console.log('NuxtServer', req.headers.cookie) // authKey=hakan
  // },
  initAuth({ commit }, req) {
    let token
    let expiresIn
    if (req) {
      console.log('Serverdayız')
      // request varsa, Server üzerindeyiz
      if (!req.headers.cookie) {
        // request de  cookie yoksa
        return
      }
      // buradaysa  cookie yi alalım
      token = req.headers.cookie.split('=')[1]
      // expiresIn i elde edelim
      expiresIn = req.headers.cookie
        .split(';')
        .find((e) => e.trim().startsWith('expiresIn'))
      if (expiresIn) {
        expiresIn = expiresIn.split('=')[1]
      }
    } else {
      // request yoksa, Client üzerindeyiz, token ı localstoragedan alıcaz
      token = localStorage.getItem('authKey')
      expiresIn = localStorage.getItem('expiresIn')
    }

    if (new Date().getTime() > +expiresIn || !token) {
      commit('clearAuthKey')
    }
    commit('setAuthKey', token)
  },
  authUser({ commit }, authData) {
    let authLink =
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key='
    return this.$axios
      .post(authLink + process.env.firebaseAPIKEY, {
        email: authData.userForm.email,
        password: authData.userForm.password,
        returnSecureToken: true
      })
      .then((res) => {
        //  expiresIn = 3600 *1000   // 1 saat
        let expiresIn = new Date().getTime() + +res.data.expiresIn * 1000
        // 5 sn e ayarladık, /news, /alert de gezinirken 5 sn sonra /signin e attı,diğer pathlere sokmadı
        // let expiresIn = new Date().getTime() + 5000
        Cookie.set('authKey', res.data.idToken)
        Cookie.set('expiresIn', expiresIn)
        localStorage.setItem('authKey', res.data.idToken)
        localStorage.setItem('expiresIn', expiresIn)
        commit('setAuthKey', res.data.idToken)
      })
  },
  logout({ commit }) {
    commit('clearAuthKey')
  }
}
