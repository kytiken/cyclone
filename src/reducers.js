import { handleActions } from 'redux-actions'
import actions from './actions/playbooks'

const defaultState = {
  playbooks: []
}

const reducer = handleActions(
  {
    [actions.addPlaybook]: (state, { payload: playbook }) => {
      const playbooks = state.playbooks.concat(playbook)
      return { ...state, playbooks }
    }
  },
  defaultState
)

export default reducer
