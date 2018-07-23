import React from 'react'
import yaml from 'js-yaml'
import Button from '@material-ui/core/Button'
import os from 'os'
var fs = require('fs')

class InstallButton extends React.Component {
  constructor () {
    super()
    this.ptyProcess = this.createPtyProcess()
    this.ptyProcess.on('data', (data) => {
      console.log(data)
    })
  }

  createPtyProcess () {
    const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash'
    const pty = require('node-pty')
    return pty.spawn(shell, [], {})
  }

  createAnsiblePlaybookFile () {
    const tasks = []
    this.props.selectedPlaybooks.forEach((playbook) => {
      playbook.tasks.forEach((task) => {
        tasks.push(task)
      })
    })
    const playbook = [{
      connection: 'local',
      hosts: 'localhost',
      tasks
    }]
    var yamlString = yaml.safeDump(playbook, {
      'styles': {
        '!!null': 'canonical' // dump null as ~
      },
      'sortKeys': true // sort object keys
    })
    const filePath = `${process.resourcesPath}/playbook.yml`
    try {
      fs.writeFileSync(filePath, yamlString, 'utf-8')
    } catch (e) {
      console.log('Failed to save the file !')
    }
    return filePath
  }

  executeAnsiblePlaybook (filePath) {
    this.ptyProcess.write(`ansible-playbook -K ${filePath}\r`)
    window.setTimeout(() => {
      this.ptyProcess.write(`${this.password}\r`)
    }, 3000)
  }

  onInstallButtonClicked () {
    const filePath = this.createAnsiblePlaybookFile()
    this.executeAnsiblePlaybook(filePath)
  }

  isInstallButtonDisabled () {
    return this.props.isPasswordEmpty
  }

  render () {
    return (
      <div>
        <Button color='primary' disabled={this.isInstallButtonDisabled()} onClick={this.onInstallButtonClicked.bind(this)}>
          Install
        </Button>
      </div>
    )
  }
}

export default InstallButton
