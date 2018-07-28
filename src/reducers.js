import { handleActions } from 'redux-actions'
import playbookActions from './actions/playbooks'
import passwordActions from './actions/password'
import logsActions from './actions/logs'
import installDialogActions from './actions/installDialog'

const defaultState = {
  playbooks: [],
  selectedPlaybooks: [],
  password: '',
  logs: [],
  installDialogIsOpen: false
}

const reducer = handleActions(
  {
    [playbookActions.addPlaybook]: (state, { payload: playbook }) => {
      const playbooks = state.playbooks.concat(playbook)
      return { ...state, playbooks }
    },
    [playbookActions.setSelectedPlaybooks]: (state, { payload: playbooks }) => {
      return { ...state, selectedPlaybooks: playbooks }
    },
    [passwordActions.setPassword]: (state, { payload: password }) => {
      return { ...state, password }
    },
    [logsActions.addLog]: (state, { payload: log }) => {
      console.log(log)
      const logs = state.logs.concat(log)
      return { ...state, logs }
    },
    [installDialogActions.openInstallDialog]: (state) => {
      return { ...state, installDialogIsOpen: true }
    },
    [installDialogActions.closeInstallDialog]: (state) => {
      return { ...state, installDialogIsOpen: false }
    }
  },
  defaultState
)

export default reducer
