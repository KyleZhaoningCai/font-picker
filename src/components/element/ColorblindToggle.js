import React, { useContext } from 'react'
import { withFocus } from 'react-keyboard-navigation'
import Switch from 'react-switch'
import FontContext from '../../context/fontContext'

const ColorblindToggle = withFocus(({ forwardedRef, ...props }) => {
  const fontContext = useContext(FontContext)

  const { colorblind } = fontContext

  const onChange = (e) => {
    fontContext.toggleColorblind()
  }

  const handleEnterKeyDown = e => {
    if (e.keyCode === 13) {
      onChange()
    }
  }

  return (
    <button ref={ forwardedRef } {...props} onKeyDown={handleEnterKeyDown} className='flex space-between align-items-center fake-label'>
      <span className='space-right'>Colorblind Mode</span>
      <Switch onKeyDown={handleEnterKeyDown} onChange={onChange} onColor='#fc540a' checked={colorblind} />
    </button>
  )
})

export default ColorblindToggle
