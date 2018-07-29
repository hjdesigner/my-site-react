'use strict'
import { OPEN_NAV, CLOSE_NAV } from './actions'
import createReducer from '../create-reducer'

const initialState = {
  visibilityNav: false
}

const navMobile = createReducer(initialState, {
  [OPEN_NAV]: (state) => ({
    ...state,
    visibilityNav: true
  }),
  [CLOSE_NAV]: (state) => ({
    ...state,
    visibilityNav: false
  })
})

export default navMobile
