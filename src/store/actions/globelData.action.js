export const swtichLeftMenuAndTopBar = ({ commit }, args) => {
  console.log(args)
  var pos = args.split('-')[0]
  var status = args.split('-')[1]
  switch (pos) {
    case 'all':
      commit('SWTICHLEFTMENUANDTOPBAR', status !== 'false')
      break
    case 'left':
      commit('SWTICHLEFTMENU', status !== 'false')
      break
    case 'top':
      commit('SWTICHTOPBAR', status !== 'false')
      break
  }
  // commit('UPDATEUSREINFO', ...args)
}
