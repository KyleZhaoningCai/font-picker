import React, { useContext } from 'react'
import Tab from './Tab'
import FontContext from '../../context/fontContext'

const Tabs = () => {
  const fontContext = useContext(FontContext)

  const { tabs } = fontContext

  let count = 1
  return (
    <ul className='tabs'>
      { tabs.map(tab => {
        if ('label' in tab) {
          count++
          return (
            <li className='space-right' key={tab.id}><Tab id={'tab_' + (count - 1)} position={count} tab={tab} /></li>
          )
        } else {
          return null
        }
      }) }
    </ul>
  )
}

export default Tabs
