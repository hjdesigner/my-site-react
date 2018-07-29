'use strict'
import React from 'react'
import styled from 'styled-components'
import IconNav from 'components/icon-nav-mobile'
import NavMobile from 'components/nav-mobile'

const Header = () => (
  <div>
    <HeaderContainer>
      <IconNav />
    </HeaderContainer>
    <NavMobile />
  </div>
)

const HeaderContainer = styled.header`
  width: 100%;
  padding: 10px;
  border-bottom: 3px solid #4e4d4d;
  position: relative;
`

export default Header
