import React, { useContext } from 'react'
import Loading from './Loading'
import Tabs from './Tabs'
import FontContext from '../../context/fontContext'

const Navbar = () => {
  const fontContext = useContext(FontContext)

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
