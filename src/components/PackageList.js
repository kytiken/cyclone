import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import CommentIcon from '@material-ui/icons/Comment'

class PackageList extends React.Component {
  constructor () {
    super()
    this.state = {
      checked: []
    }
  }

  componentDidMount () {
    this.setState({checked: this.props.checked})
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
          {[0, 1, 2, 3].map(value => (
            <ListItem
              key={value}
              role={undefined}
              dense
              button
              onClick={this.handleToggle(value)}
            >
              <Checkbox
                checked={this.state.checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText primary={`Line item ${value + 1}`} />
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

export default PackageList
