import React from 'react'
import './styles.css'

import Header from 'components/Header'
import Preview from 'components/Preview'
import Reminder from 'components/Reminder'

const App = () => (
  <div className="App">
    <Header />
    <Preview />
    <Reminder />
  </div>
)

export default App
