import React, { useContext, useEffect } from 'react'
import Loading from './Loading'
import Tabs from './Tabs'
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
      <nav className="navbar">
        <h1>Please select one font</h1>
        <Tabs />
      </nav>
    )
  }
}

export default Navbar
