import { createActions } from 'redux-actions'

export default createActions({
  ADD_PLAYBOOK: (playbook) => (playbook),
  SET_SELECTED_PLAYBOOKS: (playbooks) => (playbooks)
})
