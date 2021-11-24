import React, { useReducer } from 'react'
import axios from 'axios'
import fontContext from './fontContext'
import FontReducer from './fontReducer'
import PropTypes from 'prop-types'

import {
  GET_TABS,
  SET_LOADING,
  SET_TAB
} from './types'

const FontState = props => {
  const initialState = {
    tabs: [],
    currentTab: '',
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

  // Set the current tab when use clicks on one
  const setTab = (tab) => dispatch({ type: SET_TAB, payload: tab })

  return <fontContext.Provider
    value = {{
      tabs: state.tabs,
      currentTab: state.currentTab,
      loading: state.loading,
      getTabs,
      setTab
    }}>
    {props.children}
  </fontContext.Provider>
}

FontState.propTypes = {
  children: PropTypes.object
}

export default FontState
