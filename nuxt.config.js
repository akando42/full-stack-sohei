
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Full Stack Sohei - Mastering Full Stack Development',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/css/main.css',
    // '~/css/debug.css',
    'bulma/css/bulma.css',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    // { src: '~/plugins/vue-carousel', ssr: false},
    // { src: '~/plugins/typed'},
    { src: '~/plugins/vue-typed', ssr:false},
    { src: '~/plugins/vue-carousel', ssr:false},
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    '@nuxtjs/auth',
    '@nuxtjs/fontawesome',
  ],
  auth: {
    // Nuxt Authentication Options
    strategies: {
      github: {
        client_id:'7cb17637ab4aa3fff7a2',
        client_secret: 'fe711a3017e00270b49f1e433f0ce0799985c7c5'
      }
    }
  },
  markdownit: {
    injected: true,
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  generate: {
    routes: function(){
      const fs = require('fs');
      const path = require('path');
      return fs.readdirSync('./assets/content/lesson').map(file => {
        return {
          route: `/lesson/${path.parse(file).name}`,
          payload: require(`./assets/content/lesson/${file}`),
        };
      });
    },
  },

  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
  }
}
