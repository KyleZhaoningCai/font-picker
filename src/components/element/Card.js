import React, { useContext } from 'react'
import { withFocus } from 'react-keyboard-navigation'
import PropTypes from 'prop-types'
import FontContext from '../../context/fontContext'

const Card = withFocus(({ forwardedRef, ...props }) => {
  const fontContext = useContext(FontContext)

  const { colorblind, selectedFont } = fontContext
  const { font: { abbr, color, 'color-blind-label': colorBlindLabel, label } } = props

  const handleEnterKeyDown = e => {
    if (e.keyCode === 13) {
      onClick(e)
    }
  }

  const onClick = (e) => {
    const classNameArray = e.target.className.split(' ')
    fontContext.setSelectedFont(classNameArray[classNameArray.length - 1])
  }
  return (
    <button ref={ forwardedRef } {...props} onKeyDown={handleEnterKeyDown} onClick={onClick} className={(selectedFont === abbr) ? 'card selected fake-div ' + abbr : 'card fake-div ' + abbr}>
      <div className='color-box'><div className='inner-box' style={{ background: color }}><div className='box-text'>{abbr}</div></div></div>
      <div className='card-body'><ul>
        <li className='body-text'>{label}</li>
        {(colorblind) && <li className='colorblind-label'>Box is {colorBlindLabel}</li>}
        </ul></div>
    </button>
  )
})

Card.propTypes = {
  font: PropTypes.object.isRequired
}

export default Card
