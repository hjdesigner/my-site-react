'use strict'
import { TOGGLE_THEME } from './actions'

export const toggleTheme = (status) => ({
  type: TOGGLE_THEME,
  payload: { status }
})
