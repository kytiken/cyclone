import React from 'react'
import Header from '../components/Header'
import PlaybookListContainer from '../containers/PlaybookListContainer'
import Console from '../components/Console'

class App extends React.Component {
  componentDidMount () {
    this.props.setupPtyProcess()
  }

  render () {
    return (
      <div>
        <Header />
        <PlaybookListContainer />
        <Console />
      </div>
    )
  }
}

export default App
