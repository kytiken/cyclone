import { handleActions } from 'redux-actions'
import actions from './actions/roles'

const defaultState = {
  roles: [
    { name: 'rbenv' },
    { name: 'pyenv' },
    { name: 'git' }
  ]
}

const reducer = handleActions(
  {
    [actions.addRole]: (state, { payload: role }) => {
      const roles = state.roles.concat(role)
      return { ...state, roles }
    }
  },
  defaultState
)

export default reducer
