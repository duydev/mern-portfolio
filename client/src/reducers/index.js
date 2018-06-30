import { combineReducers } from 'redux'

import headerReducer from './header'

export const initialState = {}

export default combineReducers({ header: headerReducer })
