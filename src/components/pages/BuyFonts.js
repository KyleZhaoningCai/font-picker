import React, { useContext } from 'react'
import FontContext from '../../context/fontContext'

const BuyFonts = () => {
  const fontContext = useContext(FontContext)

  const { buyFontsContent } = fontContext

  return (
    <div className='content'>
      <div className='centered-text'>{buyFontsContent.content}</div>
    </div>
  )
}

export default BuyFonts
