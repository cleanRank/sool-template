import * as globelData from 'store/actions/globelData.action'
import * as config from 'store/actions/config.action'
import * as dialogAction from 'store/actions/dialog.action'
let actions = Object.assign({}, globelData, config, dialogAction)

export default actions
