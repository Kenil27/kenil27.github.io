import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _adede726 = () => import('..\\pages\\Resume.vue' /* webpackChunkName: "pages_Resume" */).then(m => m.default || m)
const _6e780fb2 = () => import('..\\pages\\Game.vue' /* webpackChunkName: "pages_Game" */).then(m => m.default || m)
const _fc4348e0 = () => import('..\\pages\\Contact.vue' /* webpackChunkName: "pages_Contact" */).then(m => m.default || m)
const _7fe9ed62 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash && document.querySelector(to.hash)) {
        // scroll to anchor by returning the selector
        position = { selector: to.hash }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/Resume",
			component: _adede726,
			name: "Resume"
		},
		{
			path: "/Game",
			component: _6e780fb2,
			name: "Game"
		},
		{
			path: "/Contact",
			component: _fc4348e0,
			name: "Contact"
		},
		{
			path: "/",
			component: _7fe9ed62,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
