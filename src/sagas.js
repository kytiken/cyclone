import { put, select, takeEvery } from 'redux-saga/effects'
import os from 'os'

const createPtyProcess = () => {
  const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash'
  const pty = require('node-pty')
  return pty.spawn(shell, [], {})
}

const ptyProcess = createPtyProcess()

const setup = (addLog) => {
  ptyProcess.on('data', (data) => {
    addLog(data)
  })
}

function * setupPtyProcess (action) {
  setup(action.payload.addLog)
  yield
}

const ptyExecute = (command) => {
  ptyProcess.write(command)
}

function * executeAnsiblePlaybook (action) {
  const command = `sudo sU - $USER -c "ansible-playbook -K ${action.payload.filePath}"\r`
  ptyExecute(command)
  yield
}
function * passwordInput (action) {
  const state = yield select()
  const password = state.password
  ptyProcess.write(`${password}\r`)
  yield
}

function * bindPtyProcessLog (action) {
  if (action.payload.includes('SUDO password:')) {
    yield put({type: 'PASSWORD_INPUT_REQUEST'})
  }

  if (action.payload.includes('Password:')) {
    yield put({type: 'PASSWORD_INPUT_REQUEST'})
  }

  if (action.payload.includes('sudo: 3 incorrect password attempts')) {
  }
}

/*
  USER_FETCH_REQUESTED Action が送出されるたびに fetchUser を起動します。
  ユーザ情報の並列取得にも対応しています。
*/
function * mySaga () {
  yield takeEvery('SETUP_PTY_PROCESS', setupPtyProcess)
  yield takeEvery('EXECUTE_ANSIBLE_PLAYBOOK', executeAnsiblePlaybook)
  yield takeEvery('ADD_LOG', bindPtyProcessLog)
  yield takeEvery('PASSWORD_INPUT_REQUEST', passwordInput)
}
export default mySaga
