import React from 'react'
import Header from '../components/Header'
import InstallProgressDialog from '../containers/InstallProgressDialog'
import PlaybookListContainer from '../containers/PlaybookListContainer'
import Console from '../components/Console'

class App extends React.Component {
  componentDidMount () {
    this.props.setupPtyProcess(this.props.addLog)
  }

  render () {
    return (
      <div>
        <Header />
        <InstallProgressDialog />
        <PlaybookListContainer />
        <Console />
      </div>
    )
  }
}

export default App
