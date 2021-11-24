import React, { useContext, useEffect } from 'react'
import FontContext from '../../context/fontContext'
import Navbar from '../layout/Navbar'
import RoutesLogic from './RoutesLogic'

const AppContainer = () => {
  const fontContext = useContext(FontContext)

  useEffect(() => {
    fontContext.getTabs()
    const pathArray = window.location.pathname.split('/')
    if (pathArray.length > 0) {
      fontContext.setTab(pathArray[pathArray.length - 1])
    }
  }, [])
  return (
    <div>
      <Navbar />
      <RoutesLogic />
    </div>
  )
}

export default AppContainer
