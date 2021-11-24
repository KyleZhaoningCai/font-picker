import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppContainer from './components/routes/AppContainer'
import FontState from './context/FontState'
import './App.css'

const App = () => {
  return (
    <FontState>
      <Router>
        <div className="App">
          <AppContainer />
        </div>
      </Router>
    </FontState>
  )
}

export default App
