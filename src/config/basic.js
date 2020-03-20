import {
  get,
  json,
  put,
  putString
} from 'lib/httpPlugin'
const domain = process.env.VUE_APP_URL
export default {
  login (params = {}) { // 登录
    return json(`${domain}/ocm/auth/user`, params)
  },
  logout (params = {}) { // 推出
    return get(`${domain}/ocm/auth/user/logout`, params)
  },
  searchInsititution (params = {}) { // 搜索组织机构
    return get(`${domain}/ocm/org`, params)
  },
  regiterInsititution (params = {}) { // 注册组织机构
    return json(`${domain}/ocm/org`, params)
  },
  supplierAddInsititution (params = {}) { // 申请加入组织机构
    return json(`${domain}/ocm/user/org`, params)
  },
  getAddInsititutionHistory (params = {}) { // 获取用户加入记录
    return get(`${domain}/ocm/org/user`, params)
  },
  getProjectList (params = {}) { // 获取项目列表
    return get(`${domain}/ocm/project/list`, params)
  },
  getOriginzationList (params = {}) { // 获取已加入的机构列表
    return get(`${domain}/ocm/user/org`, params)
  },
  putHanderSupplierRequest (params = {}) { // 处理用户加入机构申请
    return put(`${domain}/ocm/org/user`, params)
  },
  createProject (params = {}) { // 创建项目
    return json(`${domain}/ocm/project`, params)
  },
  updateProjectInfo (params = {}) { // 更新项目信息
    return put(`${domain}/ocm/project`, params)
  },
  changeOriginzation (params = {}) { // 切换组织机构
    return putString(`${domain}/ocm/user/org`, params)
  },
  getRegion (params = {}) { // 获取行政区域
    return get(`${domain}/global/region`, params)
  }
}
