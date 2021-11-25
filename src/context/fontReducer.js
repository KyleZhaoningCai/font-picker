import {
  GET_BUY_FONTS_TEXT,
  GET_MY_FONTS_TEXT,
  TOGGLE_COLORBLIND,
  GET_TABS,
  SET_LOADING,
  SET_TAB,
  SET_SELECTED_FONT
} from './types'

export default (state, action) => {
  switch (action.type) {
    case GET_TABS: {
      // Check for colorblind setting and selected font in local storage
      let colorblind = false
      if (localStorage.getItem('colorblind') !== null) {
        colorblind = localStorage.getItem('colorblind') === 'true'
      }
      let selectedFont = ''
      if (localStorage.getItem('font') !== null) {
        selectedFont = localStorage.getItem('font')
      }
      return {
        ...state,
        tabs: action.payload,
        loading: false,
        colorblind: colorblind,
        selectedFont: selectedFont
      }
    }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case SET_TAB:
      return {
        ...state,
        currentTab: action.payload
      }
    case GET_BUY_FONTS_TEXT:
      return {
        ...state,
        buyFontsContent: action.payload,
        loading: false
      }
    case GET_MY_FONTS_TEXT:
      return {
        ...state,
        myFontsContent: action.payload,
        loading: false
      }
    case TOGGLE_COLORBLIND:
      localStorage.setItem('colorblind', action.payload)
      return {
        ...state,
        colorblind: action.payload
      }
    case SET_SELECTED_FONT:
      localStorage.setItem('font', action.payload)
      return {
        ...state,
        selectedFont: action.payload
      }
    default:
      return state
  }
}
