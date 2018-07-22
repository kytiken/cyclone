import React from 'react'
import Header from './components/Header'
import PlaybookListContainer from './containers/PlaybookListContainer'
import Console from './components/Console'

const App = () => (
  <div>
    <Header />
    <PlaybookListContainer />
    <Console />
  </div>
)

export default App
