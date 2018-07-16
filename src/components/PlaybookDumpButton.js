import React from 'react'
import yaml from 'js-yaml'
import Button from '@material-ui/core/Button'
var fs = require('fs')

class PlaybookDumpButton extends React.Component {
  dump () {
    const tasks = this.props.playbooks
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
    console.log(yamlString)
    try {
      fs.writeFileSync('/Users/kytiken/playbook.yml', yamlString, 'utf-8')
    } catch (e) {
      console.log('Failed to save the file !')
    }
  }

  render () {
    return (<Button color='primary' onClick={this.dump.bind(this)}>
      Primary
    </Button>)
  }
}

export default PlaybookDumpButton
