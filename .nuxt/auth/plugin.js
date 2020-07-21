import Auth from './auth'

import './middleware'

// Active schemes
import scheme_003d9a64 from './schemes/local.js'
import scheme_23514a38 from './schemes/oauth2.js'

export default function (ctx, inject) {
  // Options
  const options = {"resetOnError":false,"scopeKey":"scope","rewriteRedirects":true,"fullPathRedirect":false,"watchLoggedIn":true,"redirect":{"login":"/login","logout":"/","home":"/","callback":"/login"},"vuex":{"namespace":"auth"},"cookie":{"prefix":"auth.","options":{"path":"/"}},"localStorage":{"prefix":"auth."},"token":{"prefix":"_token."},"refresh_token":{"prefix":"_refresh_token."},"defaultStrategy":"local"}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // local
  $auth.registerStrategy('local', new scheme_003d9a64($auth, {"endpoints":{"login":{"url":"/api/auth/login","method":"post","propertyName":"token"},"logout":{"url":"/api/auth/logout","method":"post"},"user":{"url":"/api/auth/user","method":"get","propertyName":"user"}},"_name":"local"}))

  // github
  $auth.registerStrategy('github', new scheme_23514a38($auth, {"client_id":"7cb17637ab4aa3fff7a2","_name":"github","authorization_endpoint":"https://github.com/login/oauth/authorize","token_endpoint":"https://github.com/login/oauth/access_token","userinfo_endpoint":"https://api.github.com/user","scope":["user","email"],"access_token_endpoint":"/_auth/oauth/github/authorize","response_type":"code"}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      console.error('[ERROR] [AUTH]', error)
    }
  })
}
