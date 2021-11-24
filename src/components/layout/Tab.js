import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Tab = ({ tab: { label, content_endpoint: endpoint } }) => {
  return (
    <li>
      <Link to={'/' + endpoint}>{ label }</Link>
    </li>
  )
}

Tab.propTypes = {
  tab: PropTypes.object.isRequired
}

export default Tab
