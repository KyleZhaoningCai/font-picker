import {
  GET_BUY_FONTS_TEXT,
  GET_MY_FONTS_TEXT,
  GET_TABS,
  SET_LOADING,
  SET_TAB
} from './types'

export default (state, action) => {
  switch (action.type) {
    case GET_TABS:
      return {
        ...state,
        tabs: action.payload,
        loading: false
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
    default:
      return state
  }
}
