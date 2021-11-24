import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import FontContext from '../../context/fontContext'

const Tab = ({ tab: { label, content_endpoint: endpoint } }) => {
  const fontContext = useContext(FontContext)

  const { currentTab } = fontContext

  const onClick = (e) => {
    fontContext.setTab(endpoint)
  }

  return (
    <li>
      <Link to={'/' + endpoint} onClick={onClick} className={ currentTab === endpoint ? 'selected' : 'unselected' }>{ label }</Link>
    </li>
  )
}

Tab.propTypes = {
  tab: PropTypes.object.isRequired
}

export default Tab
