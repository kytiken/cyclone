import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import LinearProgress from '@material-ui/core/LinearProgress';

export default class InstallDialog extends React.Component {
  render () {
    return (
      <Dialog
        open={this.props.isOpen}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Installing...</DialogTitle>
        <DialogContent>
          <LinearProgress variant="determinate" value={this.props.completed} />
        </DialogContent>
      </Dialog>
    )
  }
}
