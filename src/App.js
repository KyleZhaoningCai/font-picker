import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FontState from './context/FontState'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import MyFonts from './components/pages/MyFonts'
import BuyFonts from './components/pages/BuyFonts'
import './App.css'

const App = () => {
  return (
    <FontState>
      <Router>
        <div className="App container">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/fonts_a' element={<MyFonts />} />
            <Route path='/fonts_b' element={<BuyFonts />} />
          </Routes>
        </div>
      </Router>
    </FontState>
  )
}

export default App
