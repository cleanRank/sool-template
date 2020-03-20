import Vue from 'vue'
import App from '@/App'
import router from 'router/index'
import 'assets/iconfont/iconfont.css'
import '@babel/polyfill' // 部分es6语法兼容
import store from './store/index' // vuex 单向数据里 core
import 'lib/lrz.all.bundle'
import vuescroll from 'vuescroll'
import 'nprogress/nprogress.css'
import errorLog from 'lib/errorLog'
import svgIcon from 'components/common/svgIcon'
import itemIcon from 'components/component/item'
import loadPlugin from 'lib/loadPlugin' // loding
import dialogPlugin from 'lib/dialogPlugin'
import radio from 'lib/radio'
import regex from 'lib/regex'
import vuescrollConfig from 'lib/vuescroll'
import {
  formatTimeAmt
} from 'lib/until'
import * as filter from 'lib/filter' // 全局过滤器
import http from 'config/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(loadPlugin)
Vue.use(ElementUI)
Vue.use(radio)
Vue.use(dialogPlugin)
Vue.use(vuescroll, {
  ops: vuescrollConfig
})
Vue.prototype.$http = http
Vue.prototype.$regexp = regex
Vue.prototype.$formatTimeAmt = formatTimeAmt
Vue.prototype.$pageSize = 10
Vue.component('svg-icon', svgIcon)
Vue.component('item-icon', itemIcon)
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})
// 引入svg
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./assets/svg', false, /\.svg$/)
requireAll(req)
// 过滤器注册
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key])
})
Vue.config.errorHandler = errorLog
/* eslint-disable no-new */
export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
