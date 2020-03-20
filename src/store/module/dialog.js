import {
  SHOWDIALOGFLAG,
  UPDATELOADALERT
} from "store/mutation-types.js"
const state = {
  toast: {
    msg: '',
    time: 1500
  },
  loadAlert: {
    title: '提示', // alert标题
    msg: '', // alert内容
    lBtnText: "",
    rBtnText: "确定",
    confCallBack () {}, // 点击确定回调函数
    cancleBack () {} // 点击取消回调函数
  }
}

const mutations = {
  [SHOWDIALOGFLAG] (state, isShowDialogFlag) {
    state.isShowDialogFlag = isShowDialogFlag
  },
  // 更新alert弹框信息
  [UPDATELOADALERT] (state, obj) {
    if (!obj.title) {
      obj.title = "提示"
    }
    obj['rBtnText'] = obj['rBtnText'] ? obj['rBtnText'] : '确定'
    // state.loadAlert = obj // 更新弹框信息
    Object.assign(state.loadAlert, obj)
  }
}

export default {
  state,
  mutations
}
