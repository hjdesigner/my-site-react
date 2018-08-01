'use strict'
import React from 'react'
import { connect } from 'react-redux'
import { toggleNav } from 'reducers/nav-mobile/action-creators'
import styled from 'styled-components'

const IconNav = ({ handleClick, status }) => (
  <IconNavMobile
    data-js={status.visibilityNav}
    onClick={handleClick(status)} />
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
    transition: all .25s ease-in-out;
  }
  &:before {
    top: 0;
    box-shadow: 0 8px 0 #DDDDDD;
  }
  &:after {
    top: 16px;
  }
  &[data-visi="false"] {
    &:before,
    &:after {
      background-color: #000000;
    }
    &:before {
    box-shadow: 0 8px 0 #000000;
  }
  }
  &[data-js="true"] {
    &:before {
      top: 8px;
      transform: rotate(39deg);
      box-shadow: 0 8px 0 transparent;
    }
    &:after {
      top: 8px;
      transform: rotate(-39deg);
    }
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`

const mapStatePros = (state) => ({
  status: state.navMobile
})

const mapDispatchToProps = (dispatch) => ({
  handleClick: (status) => () => {
    dispatch(toggleNav(!status.visibilityNav))
  }
})

export default connect(mapStatePros, mapDispatchToProps)(IconNav)
