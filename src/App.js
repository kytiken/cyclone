import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import PlaybookListContainer from './containers/PlaybookListContainer'
import PasswordFieldContainer from './containers/PasswordFieldContainer'
import Console from './components/Console'

const App = () => (
  <div>
    <AppBar position='static' color='default'>
      <Toolbar>
        <Typography variant='title' color='inherit'>
          Cyclone
        </Typography>
      </Toolbar>
    </AppBar>
    <PasswordFieldContainer />
    <PlaybookListContainer />
    <Console />
  </div>
)

export default App
