import * as type from '../mutation-types'
const state = {
  leftMenuIsShow: true,
  topBarIsShow: true,
  isdisabled: true,
  isShow: false,
  supplierInfo: {}
}
const mutations = {
  [type.SWTICHLEFTMENU] (state, payload) {
    state.leftMenuIsShow = payload
  },
  [type.SWTICHTOPBAR] (state, payload) {
    state.topBarIsShow = payload
  },
  [type.SWTICHLEFTMENUANDTOPBAR] (state, payload) {
    state.leftMenuIsShow = payload
    state.topBarIsShow = payload
  },
  UPDATESUPPLIERINFO (state, payload) {
    state.isdisabled = payload
  },
  SUPPLIERINFO (state, payload) {
    state.supplierInfo = payload
  },
  ISSHOW (state, payload) {
    state.isShow = payload
  }
}
export default {
  state,
  mutations
}
