import {
  get,
  post,
  put,
  json,
  Delete,
  putString
} from 'lib/httpPlugin'
const domain = process.env.VUE_APP_URL
export default {
  getDesignPropDict (pid = 0, params = {}) { // 获取设计属性
    return get(`${domain}/genie/designPropDict/${pid}`, params)
  },
  getGeneralPropDict (pid = 0, params = {}) { // 获取常规属性
    return get(`${domain}/genie/generalPropDict/${pid}`, params)
  },
  getPresentationPropDict (pid = 0, params = {}) { // 获取呈现属性
    return get(`${domain}/genie/presentationPropDict/${pid}`, params)
  },
  getVc (params = {}) { // 获取属性类型
    return get(`${domain}/genie/vc`, params)
  },
  deleteProperty (propType = 1, id = 0, params = {}) { // 删除属性
    return Delete(`${domain}/relationShip/property/${propType}/${id}`, params)
  },
  addDesignPropDict (pid = 0, ncode = "", pname = "", pvcId = 0, pvType = 1, pdesc = "", params = {}) { // 添加设计属性
    return post(`${domain}/genie/DesignProperty/${pid}/${ncode}/${pname}/${pvcId}/${pvType}/${pdesc}`, params)
  },
  addGeneralPropDict (pid = 0, ncode = "", pname = "", pvcId = 0, pvType = 1, pdesc = "", params = {}) { // 添加设计属性
    return post(`${domain}/genie/GeneralProperty/${pid}/${ncode}/${pname}/${pvcId}/${pvType}/${pdesc}`, params)
  },
  addPresentationPropDict (pid = 0, ncode = "", pname = "", pvcId = 0, pvType = 1, pdesc = "", params = {}) { // 添加设计属性
    return post(`${domain}/genie/PresentationProperty/${pid}/${ncode}/${pname}/${pvcId}/${pvType}/${pdesc}`, params)
  },
  getBuildingEntityDict (pid = 0, params = {}) { // 获取设计构件分类列表
    return get(`${domain}/genie/buildingEntityDict/${pid}`, params)
  },
  getAllBuildingEntityDict (params = {}) { // 获取设计构件分类列表
    return get(`${domain}/genie/buildingEntityDict`, params)
  },
  getAllDesignPropDict (params = {}) { // 获取所有设计属性
    return get(`${domain}/genie/designPropDict`, params)
  },
  getAllGeneralPropDict (params = {}) { // 获取所有常规属性
    return get(`${domain}/genie/generalPropDict`, params)
  },
  getBuildingFormDict (pid = 0, params = {}) { // 获取建筑形式分类列表
    return get(`${domain}/genie/buildingFormDict/${pid}`, params)
  },
  getBuildingFuncation (pid = 0, params = {}) { // 获取建筑功能分类列表
    return get(`${domain}/genie/buildingFuncation/${pid}`, params)
  },
  getAppearance (code = 0, params = {}) { // 获取呈现材质属性
    return get(`${domain}/genie/presentationPropDict/appearance/${code}`, params)
  },
  addPropertyMapper (buildingType = 0, level = "", pid = "", ncode = 0, pname = 1, material = "", materia2 = "", materia3 = "", params = {}) { // 添加分类编码
    return post(`${domain}/relationShip/propertyMapper/${buildingType}/${level}/${pid}/${ncode}/${pname}/${material}/${materia2}/${materia3}`, params)
  },
  putMateria (bindingType = 0, buildingId = "", material = "", materia2 = 0, materia3 = 1, params = {}) { // 修改呈现材质
    return put(`${domain}/relationShip/propertyMapper/${bindingType}/${buildingId}/${material}/${materia2}/${materia3}`, params)
  },
  deletePropertyDict (buildingId = 0, propId = 0, params = {}) { // 删除分类编码属性
    return Delete(`${domain}/relationShip/propertyMapper/${buildingId}/${propId}`, params)
  },
  deleteBuildCode (buildingType = 1, id = 0, params = {}) { // 删除分类编码条目
    return Delete(`${domain}/relationShip/building/${buildingType}/${id}`, params)
  },
  addPropertyDict (buildingType = 0, buildingId = "", propType = "", propId = 0, params = {}) { // 添加分类编码属性
    return post(`${domain}/relationShip/propertyMapper/${buildingType}/${buildingId}/${propType}/${propId}`, params)
  },
  addConstructTemplate (child = 0, params = {}) { // 创建构建模板 1:子模版，0：不是子模版
    return json(`${domain}/template/constructTemplate/${child}`, params)
  },
  putConstructTemplate (params = {}) { // 更新构建模板
    return put(`${domain}/template/constructTemplate`, params)
  },
  getAllConstructTemplateList (params = {}) { // 建筑设计页面根据类型查询所有模板
    return get(`${domain}/template/constructTemplate/listAll`, params)
  },
  getConstructTemplateList (categoryId = 0, begIndex = 0, pageSize = 0, params = {}) { // 查询模板列表
    return get(`${domain}/template/constructTemplate/${categoryId}/${begIndex}/${pageSize}`, params)
  },
  getConstructTemplateDetail (categoryId= 0, begIndex = 0, pageSize = 0, pid = 0, params = {}) { // 查询模板详情
    return get(`${domain}/template/constructTemplate/${categoryId}/${begIndex}/${pageSize}/${pid}`, params)
  },
  deleteConstructTemplate (id = 0, pid = 0, params = {}) { // 删除模板
    return pid ? Delete(`${domain}/template/constructTemplate/${id}/${pid}`, params)
      : Delete(`${domain}/template/constructTemplate/${id}`, params)
  },
  getTemplateType (id = 1, params = {}) { // 查询模板类型
    return get(`${domain}/template/type/${id}`, params)
  },
  getParentTemplatefromId (params = {}) { // 根据子模版id获取父模板信息
    return get(`${domain}/template/constructTemplate/parent`, params, 1)
  },
  getVisualResource (resourceType = 'A', params = {}) { // 查询可视化资源
    return get(`${domain}/template/constructTemplate/visualResource/${resourceType}`, params)
  },
  putCollectionTemplate (templateId, params = {}) { // 收藏构建模板
    return put(`${domain}/template/constructTemplate/collection/${templateId}`, params)
  },
  getTemplateDefaultAttr (type, params = {}) { // 根据模板类别获取预置属性
    return get(`${domain}/template/constructTemplate/defaultAttr/${type}`, params)
  },
  deleteTemplateOuter (id = 0, params = {}) { // 删除构件模板
    return Delete(`${domain}/template/constructTemplate/outer/${id}`, params)
  },
  getDesignProject (params = {}) { // 获取建筑设计概况
    return get(`${domain}/ocm/project/design`, params)
  },
  putBuildingInfo (projectId = 0, params = {}) { // 更新建筑设计设置信息
    return put(`${domain}/project/data/${projectId}`, params)
  },
  putBuildingSetInfo (params = {}) { // 更新建筑设计设置信息
    return putString(`${domain}/ocm/project/props`, params)
  },
  createBuildToolsElement (params = {}) { // 创建元素
    return json(`${domain}/project/element`, params)
  },
  applyGenie (id, type, params = {}) { // 发起申请
    return get(`${domain}/genie/apply?id=${id}&type=${type}`, params)
  },
  approvalGenie (id, type, result, params = {}) { // 审批申请
    return get(`${domain}/genie/approval?id=${id}&type=${type}&result=${result}`, params)
  }
}
