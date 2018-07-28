import { call, put, takeEvery } from 'redux-saga/effects'
import os from 'os'
import logsAction from './actions/logs'

const createPtyProcess = () => {
  const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash'
  const pty = require('node-pty')
  return pty.spawn(shell, [], {})
}

const ptyProcess = createPtyProcess()

const setup = () => {
  console.log('setupPtyProcess')
  ptyProcess.on('data', (data) => {
    // console.log(data)
    if (data.includes('SUDO password:')) {
      ptyProcess.write(`${this.props.password}\r`)
    }

    if (data.includes('Password:')) {
      ptyProcess.write(`${this.props.password}\r`)
    }

    if (data.includes('sudo: 3 incorrect password attempts')) {
    }

    put(logsAction.addLog(data))
  })
}

function * setupPtyProcess (action) {
  yield call(setup())
}

const ptyExecute = (command) => {
  ptyProcess.write(command)
}

function * executeAnsiblePlaybook (action) {
  console.log(action)
  const command = `sudo sU - $USER -c "ansible-playbook -K ${action.payload.filePath}"\r`
  yield call(ptyExecute(command))
}

const bindPtyProcessLog = () => {

}

/*
  USER_FETCH_REQUESTED Action が送出されるたびに fetchUser を起動します。
  ユーザ情報の並列取得にも対応しています。
*/
function * mySaga () {
  yield takeEvery('SETUP_PTY_PROCESS', setupPtyProcess)
  yield takeEvery('EXECUTE_ANSIBLE_PLAYBOOK', executeAnsiblePlaybook)
  yield takeEvery('ADD_LOG', bindPtyProcessLog)
}
export default mySaga
