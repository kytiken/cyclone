import React from 'react'
import { remote } from 'electron'
import yaml from 'js-yaml'
import Button from '@material-ui/core/Button'
var fs = require('fs')

class InstallButton extends React.Component {
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
    const path = require('path')
    const filePath = `${path.join(remote.app.getPath('userData'))}/playbook.yml`
    try {
      fs.writeFileSync(filePath, yamlString, 'utf-8')
    } catch (e) {
      console.log('Failed to save the file !')
    }
    return filePath
  }

  onInstallButtonClicked () {
    const filePath = this.createAnsiblePlaybookFile()
    console.log(filePath)
    this.props.executeAnsiblePlaybook(filePath.replace(' ', '\\ '))
  }

  isInstallButtonDisabled () {
    return this.props.password.length === 0
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
