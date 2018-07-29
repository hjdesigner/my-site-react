'use strict'
import React from 'react'
import { connect } from 'react-redux'
import { closeNav } from 'reducers/nav-mobile/action-creators'
import styled from 'styled-components'

const IconNavClose = ({ handleClick }) => (
  <IconNavMobileClose
    onClick={handleClick} />
)

const IconNavMobileClose = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  right: -40px;
  background-color: #1F1F1F;
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
    top: 18px;
    transform: rotate(40deg);
  }
  &:after {
    top: 18px;
    transform: rotate(-40deg);
  }
`

const mapDispatchToProps = (dispatch) => ({
  handleClick: () => {
    dispatch(closeNav())
  }
})

export default connect(null, mapDispatchToProps)(IconNavClose)
