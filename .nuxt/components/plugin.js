import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  IconChevronDown: () => import('../../components/icon/chevron-down.vue' /* webpackChunkName: "components/icon-chevron-down" */).then(c => wrapFunctional(c.default || c)),
  IconChevronRight: () => import('../../components/icon/chevron-right.vue' /* webpackChunkName: "components/icon-chevron-right" */).then(c => wrapFunctional(c.default || c)),
  IconMenuClose: () => import('../../components/icon/menu-close.vue' /* webpackChunkName: "components/icon-menu-close" */).then(c => wrapFunctional(c.default || c)),
  IconMenuDots: () => import('../../components/icon/menu-dots.vue' /* webpackChunkName: "components/icon-menu-dots" */).then(c => wrapFunctional(c.default || c)),
  SideBar: () => import('../../components/side-bar/side-bar.vue' /* webpackChunkName: "components/side-bar" */).then(c => wrapFunctional(c.default || c)),
  SiteNav: () => import('../../components/site-nav/site-nav.vue' /* webpackChunkName: "components/site-nav" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
