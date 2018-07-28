import { handleActions } from 'redux-actions'
import playbookActions from './actions/playbooks'
import passwordActions from './actions/password'
import logsActions from './actions/logs'

const defaultState = {
  playbooks: [],
  selectedPlaybooks: [],
  password: '',
  logs: []
}

const reducer = handleActions(
  {
    // SETUP_PTY_PROCESS: (state, action) => {
    //   console.log(action)
    // },
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
    }
  },
  defaultState
)

export default reducer
