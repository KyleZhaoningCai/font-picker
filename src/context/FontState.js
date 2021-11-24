import React, { useReducer } from 'react'
import axios from 'axios'
import fontContext from './fontContext'
import FontReducer from './fontReducer'
import PropTypes from 'prop-types'

import {
  GET_TABS,
  SET_LOADING
} from './types'

const FontState = props => {
  const initialState = {
    tabs: [],
    loading: false
  }

  const [state, dispatch] = useReducer(FontReducer, initialState)

  // Get tabs from api
  const getTabs = async () => {
    setLoading()

    const res = await axios.get('http://json.ffwagency.md/tabs')

    dispatch({ type: GET_TABS, payload: res.data })
  }

  // Set widget to loading
  const setLoading = () => dispatch({ type: SET_LOADING })

  return <fontContext.Provider
    value = {{
      tabs: state.tabs,
      loading: state.loading,
      getTabs
    }}>
    {props.children}
  </fontContext.Provider>
}

FontState.propTypes = {
  children: PropTypes.object
}

export default FontState
