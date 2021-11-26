import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavigationProvider } from 'react-keyboard-navigation'
import FontState from './context/FontState'
import Navbar from './components/layout/Navbar'
import Tip from './components/element/Tip'
import Home from './components/pages/Home'
import MyFonts from './components/pages/MyFonts'
import BuyFonts from './components/pages/BuyFonts'
import './App.css'

const App = () => {
  return (
    <NavigationProvider>
      <FontState>
        <Router>
          <div className="App container">
            <Navbar />
            <Tip />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='fonts_a' element={<MyFonts />} />
              <Route path='fonts_b' element={<BuyFonts />} />
            </Routes>
          </div>
        </Router>
      </FontState>
    </NavigationProvider>
  )
}

export default App
