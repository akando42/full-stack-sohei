import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _260659d2 = () => interopDefault(import('../pages/dashboard/index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _4c4c9ceb = () => interopDefault(import('../pages/lesson/index.vue' /* webpackChunkName: "pages/lesson/index" */))
const _eb9df4a8 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _6362a86e = () => interopDefault(import('../pages/pricing/index.vue' /* webpackChunkName: "pages/pricing/index" */))
const _1093ee6a = () => interopDefault(import('../pages/signup/index.vue' /* webpackChunkName: "pages/signup/index" */))
const _5a8737b0 = () => interopDefault(import('../pages/lesson/_lesson.vue' /* webpackChunkName: "pages/lesson/_lesson" */))
const _159ca25c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/dashboard",
    component: _260659d2,
    name: "dashboard"
  }, {
    path: "/lesson",
    component: _4c4c9ceb,
    name: "lesson"
  }, {
    path: "/login",
    component: _eb9df4a8,
    name: "login"
  }, {
    path: "/pricing",
    component: _6362a86e,
    name: "pricing"
  }, {
    path: "/signup",
    component: _1093ee6a,
    name: "signup"
  }, {
    path: "/lesson/:lesson",
    component: _5a8737b0,
    name: "lesson-lesson"
  }, {
    path: "/",
    component: _159ca25c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
