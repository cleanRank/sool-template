import axios from 'axios'
import store from 'store/'
import Qs from 'qs'
import { Message } from 'element-ui'
import { tracker } from 'lib/analytics'
import { getQueryString, jointLand ,delSessionStorage } from 'lib/until'
// let load
let isLoad = 0
axios.defaults.timeout = 30000
axios.interceptors.request.use(
  config => {
    const token = getQueryString('token') || window.sessionStorage.getItem('token') || tracker.getToken() || ""
    let time = new Date().getTime()
    // if (!store.state.config.isLoading && ((time - store.state.config.isTimeLoading > 1000) || !load)) {
    //   load = true
    //   store.commit('UPDATEISTIMEING', time)
    //   // 请求城市不显示loading
    //   // config.url.indexOf('/supplier/b/region') === -1 && store.commit('UPDATEISLOADING', true)
    // }
    if (!isLoad) {
      store.commit('SHOWLOADINGFLAG', true)
    }
    config.headers.common['token'] = token
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
axios.interceptors.response.use(
  response => {
    store.commit('UPDATEISLOADING', false)
    store.commit('SHOWLOADINGFLAG', false)
    isLoad = 0
    let { msg, code } = response.data
    if (msg.indexOf("用户登录过期")!==-1 || msg.indexOf('token不能为空')!==-1 || msg.indexOf('未登录')!==-1) {
      delSessionStorage()
      jointLand()
      return response
    }
    if (code == '10005') {
      delSessionStorage()
      jointLand()
      return response
    }
    if (code != '10001' && code != '21001' && result.code != '21006') {
      Message.error(msg)
      return response
    }
    return response
  },
  error => {
    store.commit('UPDATEISLOADING', false)
    store.commit('SHOWLOADINGFLAG', false)
    isLoad = 0
    if (error.message.includes('timeout')) {
      // return Promise.reject(error)
    }
    return Promise.reject(error)
  }
)
export const post = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.post(url, Qs.stringify(params))
      .then(data => {
        let result = data.data
        if (result.code == '10001') {
          resolve(result)
        } else {
          reject(result)
        }
      }).catch(data => {
      reject(data)
    })
  })
}
export const put = (url, params, type = 0) => {
  isLoad = type
  return new Promise((resolve, reject) => {
    axios.put(url, params)
      .then(data => {
        let result = data.data
        if (result.code == '10001' || result.code == '21001') {
          resolve(result)
        } else {
          reject(result)
        }
      }).catch(data => {
      reject(data)
    })
  })
}
export const putString = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.put(url, Qs.stringify(params))
      .then(data => {
        let result = data.data
        if (result.code == '10001' || result.code == '21001') {
          resolve(result)
        } else {
          reject(result)
        }
      }).catch(data => {
      reject(data)
    })
  })
}
export const Delete = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.delete(url, Qs.stringify(params))
      .then(data => {
        let result = data.data
        if (result.code == '10001') {
          resolve(result)
        } else {
          reject(result)

        }
      }).catch(data => {
      reject(data)
    })
  })
}
export const DeleteString = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.delete(url, {params: params})
      .then(data => {
        let result = data.data
        if (result.code == '10001') {
          resolve(result)
        } else {
          reject(result)

        }
      }).catch(data => {
      reject(data)
    })
  })
}
export const postFile = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.post(url, params, {
      headers: {'Content-Type': 'multipart/form-data'}
    }).then(data => {
      let result = data.data
      if (result.code == '10001') {
        resolve(result)
      } else {
      }
    }).catch(data => {
      reject(data)
    })
  })
}
export const get = (url, params, type = 0) => {
  isLoad = type
  return new Promise((resolve, reject) => {
    axios.get(url, {params: params, timeout: 20000})
      .then(data => {
        let result = data.data
        if (result.code == '10001' || result.code == '21006') {
          resolve(result)
        } else {
          reject(result)
        }
      }).catch(data => {
      reject(data)
    })
  })
}
export const del = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.delete(url, {params: params})
      .then(data => {
        let result = data.data
        if (result.code == '10001') {
          resolve(result)
        } else {
          reject(data)
        }
      }).catch(data => {
      reject(data)
    })
  })
}
export const json = (url, params,loading=true) => {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(data => {
      let result = data.data
      if (result.code == '10001') {
        resolve(result)
      } else {
        reject(data)
      }
    }).catch(data => {
      reject(data)
    })
  })
}
