import React from 'react'
import Header from './components/Header'
import PlaybookListContainer from './containers/PlaybookListContainer'
import PasswordFieldContainer from './containers/PasswordFieldContainer'
import Console from './components/Console'

const App = () => (
  <div>
    <Header />
    <PasswordFieldContainer />
    <PlaybookListContainer />
    <Console />
  </div>
)

export default App
