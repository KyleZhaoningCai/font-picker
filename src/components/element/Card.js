import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ font: { abbr, color, 'color-blind-label': colorBlindLabel, label }, colorblind }) => {
  return (
    <div className='card' style={{ background: color }}>
      <div className='color-box'><div className='box-text'>{abbr}</div></div>
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
