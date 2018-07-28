import { handleActions } from 'redux-actions'
import playbookActions from './actions/playbooks'
import passwordActions from './actions/password'
import logsActions from './actions/logs'
import installDialogActions from './actions/installDialog'
import installProgressDialogActions from './actions/installProgressDialog'

const defaultState = {
  playbooks: [],
  ansibleTaskLength: 0,
  completedAnsibleTaskLength: 0,
  selectedPlaybooks: [],
  password: '',
  logs: [],
  installDialogIsOpen: false,
  installProgressDialogIsOpen: false,
  installCompletePercent: 30
}

const reducer = handleActions(
  {
    [playbookActions.addPlaybook]: (state, { payload: playbook }) => {
      const playbooks = state.playbooks.concat(playbook)
      return { ...state, playbooks }
    },
    [playbookActions.setSelectedPlaybooks]: (state, { payload: playbooks }) => {
      let ansibleTaskLength = 0
      playbooks.forEach((playbook) => {
        ansibleTaskLength += playbook.tasks.length
      })
      return { ...state, selectedPlaybooks: playbooks, ansibleTaskLength }
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
    },
    [installProgressDialogActions.openInstallProgressDialog]: (state) => {
      return { ...state, installProgressDialogIsOpen: true }
    },
    [installProgressDialogActions.closeInstallProgressDialog]: (state) => {
      return { ...state, installProgressDialogIsOpen: false }
    },
    ANSIBLE_TASK_COMPLETED: (state) => {
      state.completedAnsibleTaskLength++
      const installCompletePercent = state.completedAnsibleTaskLength / (state.ansibleTaskLength + 1) * 100
      return { ...state, installCompletePercent }
    },
    INSTALL_COMPLETED: (state) => {
      return { ...state, installProgressDialogIsOpen: false }
    }
  },
  defaultState
)

export default reducer
