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
    <button ref={ forwardedRef } {...props} onKeyDown={handleEnterKeyDown} className='colorblind-button fake-label'>
      <div className='space-right'>Colorblind Mode</div>
      <Switch onKeyDown={handleEnterKeyDown} onChange={onChange} onColor='#fc540a' checked={colorblind} />
    </button>
  )
})

export default ColorblindToggle
