'use strict'
import { TOGGLE_NAV } from './actions'

export const toggleNav = (status) => ({
  type: TOGGLE_NAV,
  payload: { status }
})
