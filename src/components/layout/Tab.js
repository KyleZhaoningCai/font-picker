import React, { useContext } from 'react'
import { withFocus } from 'react-keyboard-navigation'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import FontContext from '../../context/fontContext'

const Tab = withFocus(({ forwardedRef, ...props }) => {
  const { tab: { label, content_endpoint: endpoint } } = props

  const fontContext = useContext(FontContext)

  const { currentTab } = fontContext

  const onClick = (e) => {
    fontContext.setTab(endpoint)
  }

  return (
    <Link ref={ forwardedRef } {...props} to={endpoint} onClick={onClick} className={ currentTab === endpoint ? 'selected' : 'unselected' }>{ label }</Link>
  )
})

Tab.propTypes = {
  tab: PropTypes.object.isRequired
}

export default Tab
