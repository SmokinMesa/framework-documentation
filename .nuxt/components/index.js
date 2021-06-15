import { wrapFunctional } from './utils'

export { default as IconChevronDown } from '../../components/icon/chevron-down.vue'
export { default as IconChevronRight } from '../../components/icon/chevron-right.vue'
export { default as IconMenuClose } from '../../components/icon/menu-close.vue'
export { default as IconMenuDots } from '../../components/icon/menu-dots.vue'
export { default as SideBar } from '../../components/side-bar/side-bar.vue'
export { default as SiteNav } from '../../components/site-nav/site-nav.vue'

export const LazyIconChevronDown = import('../../components/icon/chevron-down.vue' /* webpackChunkName: "components/icon-chevron-down" */).then(c => wrapFunctional(c.default || c))
export const LazyIconChevronRight = import('../../components/icon/chevron-right.vue' /* webpackChunkName: "components/icon-chevron-right" */).then(c => wrapFunctional(c.default || c))
export const LazyIconMenuClose = import('../../components/icon/menu-close.vue' /* webpackChunkName: "components/icon-menu-close" */).then(c => wrapFunctional(c.default || c))
export const LazyIconMenuDots = import('../../components/icon/menu-dots.vue' /* webpackChunkName: "components/icon-menu-dots" */).then(c => wrapFunctional(c.default || c))
export const LazySideBar = import('../../components/side-bar/side-bar.vue' /* webpackChunkName: "components/side-bar" */).then(c => wrapFunctional(c.default || c))
export const LazySiteNav = import('../../components/site-nav/site-nav.vue' /* webpackChunkName: "components/site-nav" */).then(c => wrapFunctional(c.default || c))
