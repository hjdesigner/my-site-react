'use strict'
import { TOGGLE_THEME } from './actions'
import createReducer from '../create-reducer'

const initialState = {
  visibilityTheme: true
}

const theme = createReducer(initialState, {
  [TOGGLE_THEME]: (state, action) => ({
    ...state,
    visibilityTheme: action.payload.status
  })
})

export default theme
