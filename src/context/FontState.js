import React, { useReducer } from 'react'
import axios from 'axios'
import fontContext from './fontContext'
import FontReducer from './fontReducer'
import PropTypes from 'prop-types'

import {
  GET_BUY_FONTS_TEXT,
  GET_MY_FONTS_TEXT,
  GET_TABS,
  SET_LOADING,
  SET_TAB
} from './types'

const FontState = props => {
  const initialState = {
    myFontsContent: {},
    buyFontsContent: {},
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

  // Get buy fonts page text from api
  const getBuyFontsContent = async () => {
    setLoading()

    const res = await axios.get('http://json.ffwagency.md/fonts_b')

    dispatch({ type: GET_BUY_FONTS_TEXT, payload: res.data })
  }

  // Get my fonts page text from api
  const getMyFontsContent = async () => {
    setLoading()

    const res = await axios.get('http://json.ffwagency.md/fonts_a')

    dispatch({ type: GET_MY_FONTS_TEXT, payload: res.data })
  }

  return <fontContext.Provider
    value = {{
      myFontsContent: state.myFontsContent,
      buyFontsContent: state.buyFontsContent,
      tabs: state.tabs,
      currentTab: state.currentTab,
      loading: state.loading,
      getTabs,
      setTab,
      getBuyFontsContent,
      getMyFontsContent
    }}>
    {props.children}
  </fontContext.Provider>
}

FontState.propTypes = {
  children: PropTypes.object
}

export default FontState
