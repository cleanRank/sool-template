// 更新窗口collapse
export const updateCollapse = ({ commit }, ...args) => {
  commit('UPDATECOLLAPSE', ...args)
}
// 更新loading
export const updateIsLoading = ({ commit }, ...args) => {
  commit('UPDATEISLOADING', ...args)
}
// 更新loadingtime
export const updateIsTime = ({ commit }, ...args) => {
  commit('UPDATEISTIMEING', ...args)
}
// 更新屏幕宽度
export const updateClientWidth= ({ commit }, payload) => {
  commit('UPDATECLIENTWIDTH', payload)
}
// 更新应用菜单
export const updateSideBar = ({ commit }, ...args) => {
  commit('UPDATESIDEBAR', ...args)
}
// 更新应用菜单
export const updateSideBarCollect = ({ commit }, ...args) => {
  commit('UPDATESIDEBARCOLLECT', ...args)
}
// 更新bindclick
export const updateClick = ({ commit }, ...args) => {
  commit('UPDATECLICK', ...args)
}
// 更新组织信息
export const updateOriginazation = ({ commit }, ...args) => {
  commit('UPDATEORIGINAZATION', ...args)
}
// 更新项目信息
export const updateProjectInfo = ({ commit }, ...args) => {
  commit('PROJECTINFO', ...args)
}
