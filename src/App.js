import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FontState from './context/FontState'
import Navbar from './components/layout/Navbar'
import EmptyHome from './components/pages/EmptyHome'
import MyFonts from './components/pages/MyFonts'
import BuyFonts from './components/pages/BuyFonts'
import './App.css'

const App = () => {
  return (
    <FontState>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<EmptyHome />} />
            <Route path='/fonts_a' element={<MyFonts />} />
            <Route path='/fonts_b' element={<BuyFonts />} />
          </Routes>
        </div>
      </Router>
    </FontState>
  )
}

export default App
