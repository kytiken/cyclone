import { handleActions } from 'redux-actions'
import playbookActions from './actions/playbooks'
import passwordActions from './actions/password'

const defaultState = {
  playbooks: [],
  password: ''
}

const reducer = handleActions(
  {
    [playbookActions.addPlaybook]: (state, { payload: playbook }) => {
      const playbooks = state.playbooks.concat(playbook)
      return { ...state, playbooks }
    },
    [passwordActions.setPassword]: (state, { payload: password }) => {
      return { ...state, password }
    }
  },
  defaultState
)

export default reducer
