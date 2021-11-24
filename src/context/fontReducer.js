import {
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
    default:
      return state
  }
}
