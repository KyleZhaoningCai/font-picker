import React, { useContext } from 'react'
import FontContext from '../../context/fontContext'
import Card from '../element/Card'

const MyFonts = () => {
  const fontContext = useContext(FontContext)

  const { myFontsContent, colorblind } = fontContext
  return (
    <div>
      { myFontsContent.content !== undefined && myFontsContent.content.map(font => (
        <Card key={font.id} font={font} colorblind={colorblind} />
      )) }
    </div>
  )
}

export default MyFonts
