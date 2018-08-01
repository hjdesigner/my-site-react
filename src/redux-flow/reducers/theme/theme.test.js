'use strict'
import { expect } from 'chai'
import deepfreeze from 'deep-freeze'
import theme from './index'
import { TOGGLE_THEME } from './actions'

it('should toggle true theme', () => {
  const before = deepfreeze({
    visibilityTheme: true
  })
  const action = deepfreeze({
    type: TOGGLE_THEME,
    payload: { status: false }
  })
  const after = {
    visibilityTheme: false
  }
  expect(theme(before, action)).to.be.deep.equal(after)
})
it('should toggle false theme', () => {
  const before = deepfreeze({
    visibilityTheme: false
  })
  const action = deepfreeze({
    type: TOGGLE_THEME,
    payload: { status: true }
  })
  const after = {
    visibilityTheme: true
  }
  expect(theme(before, action)).to.be.deep.equal(after)
})
it('Should return intial state if last state is undefined', () => {
  const before = undefined
  const action = deepfreeze({})
  const after = {
    visibilityTheme: true
  }
  expect(theme(before, action)).to.be.deep.equal(after)
})