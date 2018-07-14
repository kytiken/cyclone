import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import PackageList from './components/PackageList'
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
    <PackageList checked={[]} />
    <Console />
  </div>
)

export default App
