export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'newproject',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: {
    color: 'white',
    height: '1px'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // .client will only be run client side on initial app load
  ],
  router: {
    linkExactActiveClass: 'is-active'
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  buefy: {
    // css: false,
    materialDesignIcons: false
  },
  manifest: {
    name: 'New Project',
    short_name: 'New Project',
    description: 'Trend',
    theme_color: '#23295d'
  },

  icon: {
    sizes: [48, 72, 96, 120, 144, 152, 192, 256, 384, 512]
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},
  env: {
    firebaseAPIKEY: 'AIzaSyB73LfduhCCCnWAdxxquHiwWnp6HjNrfmc'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
