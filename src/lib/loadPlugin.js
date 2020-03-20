/*
 * @Descripttion: loading component
 * @version: 
 * @Author: zhusn-b
 * @Date: 2019-08-08 13:52:37
 * @LastEditors: zhusn-b
 * @LastEditTime: 2019-08-09 10:14:24
 */
// loading
const loading  = {};
import store from 'store/index'
loading.install = function(Vue) {
  Object.defineProperties(Vue.prototype, {
    // 显示/隐藏遮罩
    showLoad: {
        get (){
          return (flag)=>{
            store.commit('UPDATEISLOADING', flag)
          }
        }
    }
  })
}
export default loading
