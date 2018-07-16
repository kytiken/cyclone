import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import CommentIcon from '@material-ui/icons/Comment'
import os from 'os'

class PlaybookList extends React.Component {
  constructor () {
    super()
    this.state = {
      checked: []
    }
    this.ptyProcess = this.createPtyProcess()
    this.ptyProcess.on('data', (data) => {
      console.log(data)
    })
  }

  createPtyProcess () {
    const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash'
    const pty = require('node-pty')
    return pty.spawn(shell, [], {
      name: 'xterm-color',
      cols: 40,
      rows: 30,
      cwd: process.env.HOME,
      env: process.env
    })
  }

  componentDidMount () {
    // this.ptyProcess.write('ls / \r')
    this.props.initializePlaybooks()
  }

  handleToggle (value) {
    return () => {
      const { checked } = this.state
      const currentIndex = checked.indexOf(value)
      const newChecked = [...checked]

      if (currentIndex === -1) {
        newChecked.push(value)
      } else {
        newChecked.splice(currentIndex, 1)
      }

      this.setState({
        checked: newChecked
      })
    }
  }

  render () {
    return (
      <div>
        <List>
          {this.props.playbooks.map(playbook => (
            <ListItem
              key={playbook.name}
              playbook={undefined}
              dense
              button
              onClick={this.handleToggle(playbook.name)}
            >
              <Checkbox
                checked={this.state.checked.indexOf(playbook.name) !== -1}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText primary={`${playbook.name}`} />
              <ListItemSecondaryAction>
                <IconButton aria-label='Comments'>
                  <CommentIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    )
  }
}

export default PlaybookList
