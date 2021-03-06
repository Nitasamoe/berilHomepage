const URL = 'http://localhost:8080'

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Beril Beden',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { type: 'stylesheet', href: '/css/normalize.css' },
      { type: 'stylesheet', href: '/css/type.css' },
      { type: 'stylesheet', href: '/css/globalVariables.css' },
      { type: 'stylesheet', href: '/css/baseUi.css' },
     // { type: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fira+Sans&display=swap' },
      { type: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap' }
    ]
  },/*
  generate: {
    subFolders: true
  },*/
  // Create base URL
  router: {
    //base: "./"
    base: "/"
    //base: "./"
    //base: process.env.DEPLOY_ENV === "GH_PAGES" ? "./" : "/" // add "./" before pushing to github pages
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
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
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // https://medium.com/@kozyreva.hanna/nuxt-js-fontawesome-integration-7ec56b1a41c8
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true,
    baseURL: URL
  },
  proxy : {
    "/api": URL
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
