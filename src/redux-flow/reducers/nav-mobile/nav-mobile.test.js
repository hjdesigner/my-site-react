'use strict'
import { expect } from 'chai'
import deepfreeze from 'deep-freeze'
import navMobile from './index'
import { TOGGLE_NAV } from './actions'

it('should toggle true navMobile', () => {
  const before = deepfreeze({
    visibilityNav: true
  })
  const action = deepfreeze({
    type: TOGGLE_NAV,
    payload: { status: false }
  })
  const after = {
    visibilityNav: false
  }
  expect(navMobile(before, action)).to.be.deep.equal(after)
})
it('should toggle false navMobile', () => {
  const before = deepfreeze({
    visibilityNav: false
  })
  const action = deepfreeze({
    type: TOGGLE_NAV,
    payload: { status: true }
  })
  const after = {
    visibilityNav: true
  }
  expect(navMobile(before, action)).to.be.deep.equal(after)
})
it('Should return intial state if last state is undefined', () => {
  const before = undefined
  const action = deepfreeze({})
  const after = {
    visibilityNav: false
  }
  expect(navMobile(before, action)).to.be.deep.equal(after)
})
