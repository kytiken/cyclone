import { createActions } from 'redux-actions'

export default createActions({
  EXECUTE_ANSIBLE_PLAYBOOK: (filePath) => ({filePath}),
  SETUP_PTY_PROCESS: () => ({})
})
