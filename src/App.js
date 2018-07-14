import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import PackageList from './components/PackageList'

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
  </div>
)

export default App
