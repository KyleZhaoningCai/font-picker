import React, { useContext } from 'react'
import Switch from 'react-switch'
import FontContext from '../../context/fontContext'

const ColorblindToggle = () => {
  const fontContext = useContext(FontContext)

  const { colorblind } = fontContext

  const onChange = (e) => {
    fontContext.toggleColorblind()
  }
  return (
    <label className='flex space-between'>
      <span className='space-right'>Colorblind Mode</span>
      <Switch onChange={onChange} onColor='#fc540a' checked={colorblind} />
    </label>
  )
}

export default ColorblindToggle
