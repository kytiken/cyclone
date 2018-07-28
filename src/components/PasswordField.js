import React from 'react'
import TextField from '@material-ui/core/TextField'

class PasswordField extends React.Component {
  handleChange (event) {
    this.props.actions.setPassword(event.target.value)
  }

  render () {
    return (
      <TextField
        id='password-input'
        label='Password'
        type='password'
        autoComplete='current-password'
        onChange={this.handleChange.bind(this)}
        margin='normal'
      />
    )
  }
}

export default PasswordField
