import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const Console = (props) => {
  return (
    <div>
      <Paper>
        <Typography variant='headline' component='h3'>
          console
        </Typography>
        <Typography component='p'>
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
    </div>
  )
}

export default Console
