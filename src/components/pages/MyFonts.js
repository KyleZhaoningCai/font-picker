import React, { useContext } from 'react'
import FontContext from '../../context/fontContext'
import Card from '../element/Card'

const MyFonts = () => {
  const fontContext = useContext(FontContext)

  const { myFontsContent } = fontContext

  let count = 3
  return (
    <div className='content my-fonts'>
      { myFontsContent.content !== undefined && myFontsContent.content.map(font => {
        count++
        return (
          <Card id={'card_' + font.id} position={count} key={font.id} font={font} />
        )
      }) }
    </div>
  )
}

export default MyFonts
