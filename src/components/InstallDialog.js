import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import PasswordFieldContainer from '../containers/PasswordFieldContainer'
import InstallButtonContainer from '../containers/InstallButtonContainer'

export default class InstallDialog extends React.Component {
  handleClickOpen () {
    this.props.openInstallDialog()
  }

  handleClose () {
    this.props.closeInstallDialog()
  }

  isInstallButtonDisabled () {
    return this.props.selectedPlaybooksEmpty
  }

  render () {
    return (
      <div>
        <Button color='inherit' disabled={this.isInstallButtonDisabled()} onClick={this.handleClickOpen.bind(this)}>Install</Button>
        <Dialog
          open={this.props.isOpen}
          onClose={this.handleClose}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>Install</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To install to your machine, please enter your password address here.
            </DialogContentText>
            <PasswordFieldContainer />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose.bind(this)} color='primary'>
              Cancel
            </Button>
            <InstallButtonContainer />
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
