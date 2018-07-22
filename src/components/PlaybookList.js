import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import CommentIcon from '@material-ui/icons/Comment'

class PlaybookList extends React.Component {
  constructor () {
    super()
    this.state = {
      checked: []
    }
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
      this.executeSetSelectedPlaybooks(newChecked)
    }
  }

  executeSetSelectedPlaybooks (checked) {
    const selectedPlaybooks = this.props.playbooks.filter((playbook) => {
      return checked.includes(playbook.id)
    })
    this.props.setSelectedPlaybooks(selectedPlaybooks)
  }

  render () {
    return (
      <div>
        <List>
          {this.props.playbooks.map(playbook => (
            <ListItem
              key={playbook.id}
              playbook={undefined}
              dense
              button
              onClick={this.handleToggle(playbook.id).bind(this)}
            >
              <Checkbox
                checked={this.state.checked.indexOf(playbook.id) !== -1}
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
