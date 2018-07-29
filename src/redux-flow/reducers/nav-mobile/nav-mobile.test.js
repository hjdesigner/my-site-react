'use strict'
import { expect } from 'chai'
import deepfreeze from 'deep-freeze'
import navMobile from './index'
import { CLOSE_NAV, OPEN_NAV } from './actions'

it('should toggle true navMobile', () => {
  const before = deepfreeze({
    visibilityNav: false
  })
  const action = deepfreeze({
    type: OPEN_NAV,
  })
  const after = {
    visibilityNav: true
  }
  expect(navMobile(before, action)).to.be.deep.equal(after)
})
it('should toggle false navMobile', () => {
  const before = deepfreeze({
    visibilityNav: true
  })
  const action = deepfreeze({
    type: CLOSE_NAV,
  })
  const after = {
    visibilityNav: false
  }
  expect(navMobile(before, action)).to.be.deep.equal(after)
})
