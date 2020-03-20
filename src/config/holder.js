import {
  get,
  DeleteString,
  json,
  put
} from 'lib/httpPlugin'
const domain = process.env.VUE_APP_URL
export default {
  getHolderAllChildren (params = {}) { // 获取所有子容器信息
    return get(`${domain}/HolderManager/AllChildren`, params)
  },
  createHolder (params = {}) { // 容器
    return json(`${domain}/HolderManager/Holder`, params)
  },
  deleteHolder (params = {}) { // 删除容器
    return DeleteString(`${domain}/HolderManager/Holder`, params)
  },
  putHolder (id, params = {}) { // 更新容器
    return put(`${domain}/HolderManager/Holder?holder=${id}`, params)
  },
  submitHolder (trans, branch = 1, params = {}) { // 向事务内提交容器新增、更新、删除操作
    return put(`${domain}/submit/holder?trans=${trans}&branch=${branch}`, params)
  },
  getHolderDatum (params = {}) { // 获取容器基准元素
    return get(`${domain}/provide/holderDatum`, params)
  },
  getHolderEntities (params = {}) { // 获取容器实体集合
    return get(`${domain}/provide/holderEntities`, params)
  },
  getProvideEntities (params = {}) { // 获取容器内指定指定版本的多个构件实体对象
    return get(`${domain}/provide/entities`, params)
  },
  getHolderTemplates (params = {}) { // 获取容器内正在使用的构件模板
    return get(`${domain}/provide/holderTemplates`, params)
  },
  // 设计工具时创建一个id号
  createUid (params = {}) {
    return get(`${domain}/resource/uuid`, params)
  },
  // 事务操作
  putTransation (params) {
    return put(`${domain}/submit/transaction`, params)
  },
  // 向容器内提交基准元素
  putDatum (trans, branch, holder, params) {
    return put(`${domain}/submit/datum?trans=${trans}&branch=${branch}&holder=${holder}`, params)
  },
  // 向容器内提交构件实体
  putEntity (trans, branch, holder, params) {
    return put(`${domain}/submit/entity?trans=${trans}&branch=${branch}&holder=${holder}`, params)
  },
  // 向容器内提交构件模板
  putStandardTemplate (holder, branch, params) {
    return put(`${domain}/standard/template?holder=${holder}&branch=${branch}`, params, 1)
  },
  // 获取轴网配置
  getToolsGridSetting (params = {}) {
    return get(`${domain}/adt/setting/tools/grid`, params)
  },
  // 设置轴网配置
  setToolsGridSetting (id, params) {
    return put(`${domain}/adt/setting/tools/grid?projectId=${id}`, params, 1)
  },
  // 获取柱子配置
  getToolsPillarSetting (params = {}) {
    return get(`${domain}/adt/setting/tools/pillar`, params)
  },
  // 设置柱子配置
  setToolsPillarSetting (id, params) {
    return put(`${domain}/adt/setting/tools/pillar?projectId=${id}`, params, 1)
  },
  // 获取墙配置
  getToolsWallSetting (params = {}) {
    return get(`${domain}/adt/setting/tools/wall`, params)
  },
  // 设置墙配置
  setToolsWallSetting (id, params) {
    return put(`${domain}/adt/setting/tools/wall?projectId=${id}`, params, 1)
  },
  // 统计模板计量
  templateStatics (projectId, id, params = {}) {
    return put(`${domain}/template/statistics?id=${id}&projectId=${projectId}`, params, 1)
  },
  // 获取主干版本日志列表
  getMasterLogList (params = {}) {
    return get(`${domain}/scm/branch`, params)
  },
  // 查询所有分支信息
  getAllBranchList (params = {}) {
    return get(`${domain}/scm/branch/outline`, params)
  },
  // 获取BIM基本信息
  getBimBasicInfo (params = {}) {
    return get(`${domain}/scm/branch/summary`, params)
  },
  // 获取视图列表
  getViewList (params = {}) {
    return get(`${domain}/adt/view/list`, params)
  },
  // 新增视图
  addView (projectId, params) {
    return json(`${domain}/adt/view?projectId=${projectId}`, params)
  },
  // 新增视点
  addViewPoint (params) {
    return json(`${domain}/adt/view/viewpoint`, params)
  },
  // 更新视图
  updateView (params = {}) {
    return put(`${domain}/adt/view`, params, 1)
  },
  // 更新视点
  updateViewPoint (params = {}) {
    return put(`${domain}/adt/view/viewpoint`, params)
  },
  deleteView (params = {}) { // 删除视图
    return DeleteString(`${domain}/adt/view`, params)
  },
  deleteViewPoint (params = {}) { // 删除视点
    return DeleteString(`${domain}/adt/view/viewpoint`, params)
  },
  // 创建分支
  createBranch (params) {
    return json(`${domain}/scm/branch`, params)
  },
  // 更新分支名
  updateBranch (params = {}) {
    return put(`${domain}/scm/branch`, params)
  },
  deleteBranch (params = {}) { // 删除分支
    return DeleteString(`${domain}/scm/branch`, params)
  },
  // 获取分支更新列表
  getBranchUpdateList (params = {}) {
    return get(`${domain}/scm/branch/list`, params)
  },
  // 获取分支路径所有更新列表
  getBranchPathList (params = {}) {
    return get(`${domain}/scm/branches`, params)
  },
  // 获取同步版本信息
  getBranchSyncList (params = {}) {
    return get(`${domain}/scm/branch/sync`, params)
  },
  // 获取合并版本信息
  getBranchMergeList (params = {}) {
    return get(`${domain}/scm/branch/merge`, params)
  },
  // 同步
  putBranchSync (commitId, branchId, params = {}) {
    return put(`${domain}/scm/branch/sync?commitId=${commitId}&branchId=${branchId}`, params)
  },
  // 合并
  putBranchMerge (commitId, branchId, params = {}) {
    return put(`${domain}/scm/branch/merge?commitId=${commitId}&branchId=${branchId}`, params)
  }
}
