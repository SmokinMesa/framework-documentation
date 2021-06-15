import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _65534821 = () => interopDefault(import('../pages/components/index.vue' /* webpackChunkName: "pages/components/index" */))
const _1cbbef35 = () => interopDefault(import('../pages/layout/index.vue' /* webpackChunkName: "pages/layout/index" */))
const _5a00ed01 = () => interopDefault(import('../pages/overview.vue' /* webpackChunkName: "pages/overview" */))
const _704dd459 = () => interopDefault(import('../pages/style.vue' /* webpackChunkName: "pages/style" */))
const _2f40ff08 = () => interopDefault(import('../pages/style-guide.vue' /* webpackChunkName: "pages/style-guide" */))
const _0c676626 = () => interopDefault(import('../pages/uikit/index.vue' /* webpackChunkName: "pages/uikit/index" */))
const _2a322e9f = () => interopDefault(import('../pages/uikit/layout.vue' /* webpackChunkName: "pages/uikit/layout" */))
const _530ee7a4 = () => interopDefault(import('../pages/uikit/typography.vue' /* webpackChunkName: "pages/uikit/typography" */))
const _08484cce = () => interopDefault(import('../pages/components/blog/_id.vue' /* webpackChunkName: "pages/components/blog/_id" */))
const _0b8d2db5 = () => interopDefault(import('../pages/components/filters/_id.vue' /* webpackChunkName: "pages/components/filters/_id" */))
const _2e149dde = () => interopDefault(import('../pages/components/site-footers/_id.vue' /* webpackChunkName: "pages/components/site-footers/_id" */))
const _56dd320c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/components",
    component: _65534821,
    name: "components"
  }, {
    path: "/layout",
    component: _1cbbef35,
    name: "layout"
  }, {
    path: "/overview",
    component: _5a00ed01,
    name: "overview"
  }, {
    path: "/style",
    component: _704dd459,
    name: "style"
  }, {
    path: "/style-guide",
    component: _2f40ff08,
    name: "style-guide"
  }, {
    path: "/uikit",
    component: _0c676626,
    name: "uikit"
  }, {
    path: "/uikit/layout",
    component: _2a322e9f,
    name: "uikit-layout"
  }, {
    path: "/uikit/typography",
    component: _530ee7a4,
    name: "uikit-typography"
  }, {
    path: "/components/blog/:id?",
    component: _08484cce,
    name: "components-blog-id"
  }, {
    path: "/components/filters/:id?",
    component: _0b8d2db5,
    name: "components-filters-id"
  }, {
    path: "/components/site-footers/:id?",
    component: _2e149dde,
    name: "components-site-footers-id"
  }, {
    path: "/",
    component: _56dd320c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
