'use strict'
import { TOGGLE_NAV } from './actions'
import createReducer from '../create-reducer'

const initialState = {
  visibilityNav: false
}

const navMobile = createReducer(initialState, {
  [TOGGLE_NAV]: (state, action) => ({
    ...state,
    visibilityNav: action.payload.status
  })
})

export default navMobile
