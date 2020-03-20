import store from 'store/index'
export const updateToast = ({ commit }, ...args) => {
  commit('UPDATETOAST', {msg: args[0].msg})
  // // 2s以后重新调用此函数，隐藏掉toast框
  setTimeout(() => {
    args[0].callBack && args[0].callBack()
    store.commit('UPDATETOAST', {msg: ''})
  }, args[0].time || 1500)
}
export const updateDialogFlag = ({ commit }, flag) => {
  commit('SHOWDIALOGFLAG', flag)
}
export const showTwoBtnDialog = ({
  commit
}, ...args) => {
  let defaults = {
    title: '提示',
    msg: '',
    rBtnText: '确定',
    lBtnText: '取消',
    confCallBack: null,
    cancelBack () {
      store.commit('UPDATELOADALERT', defaults)
    }
  }
  commit('UPDATELOADALERT', Object.assign({}, defaults, args[0]))
}
// 一个button按钮的弹框
export const showOneBtnDialog = ({
  commit
}, ...args) => {
  let defaults = {
    title: '提示',
    msg: '',
    rBtnText: '确定',
    confCallBack () {
      store.commit('UPDATELOADALERT', defaults)
    }
  }
  commit('UPDATELOADALERT', Object.assign({}, defaults, args[0]))
}
