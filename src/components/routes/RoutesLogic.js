import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import MyFonts from '../pages/MyFonts'
import FontContext from '../../context/fontContext'
import BuyFonts from '../pages/BuyFonts'

const RoutesLogic = () => {
  const fontContext = useContext(FontContext)

  const { tabs } = fontContext

  let tabCount = 0
  return (
    <Routes>
      { tabs.map(tab => {
        if ('label' in tab) {
          if (tabCount === 0) {
            tabCount++
            return <Route path={'/' + tab.content_endpoint } element={<MyFonts />} />
          } else {
            return <Route path={'/' + tab.content_endpoint } element={<BuyFonts />} />
          }
        } else {
          return null
        }
      }) }
    </Routes>
  )
}

export default RoutesLogic
