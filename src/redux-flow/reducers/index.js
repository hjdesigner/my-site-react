'use strict'
import { combineReducers } from 'redux'
import navMobile from './nav-mobile'
import blogList from './blog-list'
import labList from './lab-list'
import theme from './theme'

export default combineReducers({
  navMobile,
  blogList,
  labList,
  theme
})
