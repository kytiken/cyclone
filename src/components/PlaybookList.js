import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'

class PlaybookList extends React.Component {
  componentDidMount () {
    this.props.initializePlaybooks()
  }

  handleToggle (value) {
    return () => {
      const checked = this.props.selectedPlaybooks
      const currentIndex = checked.indexOf(value)
      const newChecked = [...checked]

      if (currentIndex === -1) {
        newChecked.push(value)
      } else {
        newChecked.splice(currentIndex, 1)
      }

      this.executeSetSelectedPlaybooks(newChecked)
    }
  }

  executeSetSelectedPlaybooks (checked) {
    const selectedPlaybooks = this.props.playbooks.filter((playbook) => {
      return checked.includes(playbook)
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
              onClick={this.handleToggle(playbook).bind(this)}
            >
              <Checkbox
                checked={this.props.selectedPlaybooks.indexOf(playbook) !== -1}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText primary={`${playbook.name}`} />
            </ListItem>
          ))}
        </List>
      </div>
    )
  }
}

export default PlaybookList
