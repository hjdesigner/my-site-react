'use strict'
import React from 'react'
import { connect } from 'react-redux'
import { openNav } from 'reducers/nav-mobile/action-creators'
import styled from 'styled-components'

const IconNav = ({ handleClick }) => (
  <IconNavMobile
    onClick={handleClick} />
)

const IconNavMobile = styled.div`
  width: 32px;
  height: 20px;
  position: relative;
  &:before,
  &:after {
    content: "";
    width: 100%;
    height: 3px;
    position: absolute;
    left: 0;
    background-color: #dddddd;
  }
  &:before {
    top: 0;
    box-shadow: 0 8px 0 #DDDDDD;
  }
  &:after {
    top: 16px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`

const mapDispatchToProps = (dispatch) => ({
  handleClick: () => {
    dispatch(openNav())
  }
})

export default connect(null, mapDispatchToProps)(IconNav)
