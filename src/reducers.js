import { handleActions } from 'redux-actions'

const defaultState = {
  roles: [
    { name: 'rbenv' },
    { name: 'pyenv' },
    { name: 'git' }
  ]
}

const reducer = handleActions(
  {
    'INITIALIZE_ROLES': (state, { payload: roles }) => ({ ...state, roles })
  },
  defaultState
)

export default reducer
