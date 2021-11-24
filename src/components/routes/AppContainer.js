import React, { useContext, useEffect } from 'react'
import FontContext from '../../context/fontContext'
import Navbar from '../layout/Navbar'
import RoutesLogic from './RoutesLogic'

const AppContainer = () => {
  const fontContext = useContext(FontContext)

  useEffect(() => {
    fontContext.getTabs()
  }, [])
  return (
    <div>
      <Navbar />
      <RoutesLogic />
    </div>
  )
}

export default AppContainer
