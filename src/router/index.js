import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
// import { is_android, is_iphone, delSessionStorage } from 'lib/until'
// import { delSessionStorage } from 'lib/until'
import {
  tracker
} from 'lib/analytics'
Vue.use(VueRouter)


let routes = [
  {
    path: "/",
    redirect: '/login'
  }
]
const router = new VueRouter({
  routes
})
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  NProgress.done()
})
router.afterEach(route => {
  NProgress.done()
})

export default router
