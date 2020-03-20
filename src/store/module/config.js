import { UPDATECOLLAPSE, UPDATEISLOADING, UPDATECLIENTWIDTH, UPDATEISTIMEING, UPDATESIDEBAR, UPDATESIDEBARCOLLECT, UPDATECLICK, UPDATEORIGINAZATION, PROJECTINFO } from 'store/mutation-types'
let isCollapse = document.documentElement.clientWidth < 992
let isTimeLoading = new Date().getTime()
let projectInfo = localStorage.getItem('projectInfo') ? JSON.parse(localStorage.getItem('projectInfo')) : ''
const state = {
  isCollapse: isCollapse,
  isLoading: false,
  isTimeLoading,
  clientWidth: 0,
  originazation: localStorage.getItem('organization') ? JSON.parse(localStorage.getItem('organization')) : '',
  projectInfo: projectInfo,
  sideBar: '',
  bindClick: 0
}

const mutations = {
  [UPDATECOLLAPSE] (state, params) {
    state.isCollapse = params
  },
  [PROJECTINFO] (state, params) {
    state.projectInfo = params
  },
  [UPDATEISLOADING] (state, params) {
    state.isLoading = params
  },
  [UPDATEISTIMEING] (state, params) {
    state.isTimeLoading = params
  },
  [UPDATESIDEBAR] (state, params) {
    state.sideBar = params
  },
  [UPDATESIDEBARCOLLECT] (state, params) {
    state.sideBar[params.index].meta.isCollect = params.isCollect
  },
  [UPDATEORIGINAZATION] (state, payload) {
    state.originazation = payload
  },
  [UPDATECLICK] (state, params) {
    state.bindClick = params
  },
  [UPDATECLIENTWIDTH] (state, payload) {
    state.clientWidth = payload
  }
}
export default {
  state,
  mutations
}
