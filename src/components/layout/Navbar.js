import React, { useContext, useEffect } from 'react'
import Loading from './Loading'
import Tabs from './Tabs'
import ColorblindToggle from '../element/ColorblindToggle'
import FontContext from '../../context/fontContext'

const Navbar = () => {
  const fontContext = useContext(FontContext)

  useEffect(() => {
    fontContext.getTabs()
    fontContext.getMyFontsContent()
    fontContext.getBuyFontsContent()
    const pathArray = window.location.pathname.split('/')
    if (pathArray.length > 0) {
      fontContext.setTab(pathArray[pathArray.length - 1])
    }
  }, [])

  const { loading } = fontContext

  if (loading) {
    return <Loading />
  } else {
    return (
      <nav className="navbar flex space-around align-items-center">
        <h1>Please select one font</h1>
        <ColorblindToggle />
        <Tabs />
      </nav>
    )
  }
}

export default Navbar
