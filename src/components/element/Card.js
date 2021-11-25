import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ font: { abbr, color, 'color-blind-label': colorBlindLabel, label }, colorblind }) => {
  return (
    <div className='card' tabIndex="2">
      <div className='color-box'><div className='inner-box' style={{ background: color }}><div className='box-text'>{abbr}</div></div></div>
      <div className='card-body'><ul>
        <li className='body-text'>{label}</li>
        {(colorblind) && <li className='colorblind-label'>{colorBlindLabel}</li>}
        </ul></div>
    </div>
  )
}

Card.propTypes = {
  font: PropTypes.object.isRequired,
  colorblind: PropTypes.bool.isRequired
}

export default Card
