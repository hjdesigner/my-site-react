'use strict'
import React from 'react'
import styled from 'styled-components'

const IconNav = () => (
  <IconNavMobile />
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
`

export default IconNav
