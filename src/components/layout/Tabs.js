import React, { useContext } from 'react'
import Tab from './Tab'
import FontContext from '../../context/fontContext'

const Tabs = () => {
  const fontContext = useContext(FontContext)

  const { tabs } = fontContext
  return (
    <ul className='tabs flex space-between'>
      { tabs.map(tab => (
        ('label' in tab) && <Tab key={tab.id} tab={tab} />
      )) }
    </ul>
  )
}

export default Tabs
