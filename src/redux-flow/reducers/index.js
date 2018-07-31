'use strict'
import { combineReducers } from 'redux'
import navMobile from './nav-mobile'
import blogList from './blog-list'

export default combineReducers({
  navMobile,
  blogList
})
