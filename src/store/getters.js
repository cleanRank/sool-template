// vuex getter 模块
export const getApi = (state) => state.api // 获取接口地址
export const getUserInfo = (state) => state.userInfo // 获取用户基本信息
export const getConfigInfo = (state) => state.config.isCollapse // 获取配置文件
export const getConfigOriginazation = (state) => state.config.originazation // 获取配置文件
export const projectInfo = (state) => state.config.projectInfo // 获取项目信息
export const getDevice = (state) => state.config.device // 获取屏幕宽度
export const getheaderBtn = (state) => state.headerBtn // 获取右上角配置文件
export const getDialogInfo = (state) => state.dialog // 获取弹框信息
export const getSideBar= (state) => state.config.sideBar // 获取应用菜单
export const getBindClick= (state) => state.config.bindClick // 获取click
export const getClientWidth = (state) => state.config.clientWidth // 获取配置文件
