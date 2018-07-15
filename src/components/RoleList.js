import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import CommentIcon from '@material-ui/icons/Comment'

class RoleList extends React.Component {
  constructor () {
    super()
    this.state = {
      checked: []
    }
  }

  componentDidMount () {
    this.props.actions.initializeRolesCreator(this.props.dispatch)
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
          {this.props.roles.map(role => (
            <ListItem
              key={role.name}
              role={undefined}
              dense
              button
              onClick={this.handleToggle(role.name)}
            >
              <Checkbox
                checked={this.state.checked.indexOf(role.name) !== -1}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText primary={`${role.name}`} />
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

export default RoleList
