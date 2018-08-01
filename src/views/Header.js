'use strict'
import React from 'react'
import styled from 'styled-components'
import IconNav from 'components/icon-nav-mobile'
import NavMobile from 'components/nav-mobile'
import NavDesktop from 'components/nav-desktop'
import NavShare from 'components/nav-share'

const Header = () => (
  <div>
    <HeaderContainer>
      <Container>
        <IconNav />
        <NavDesktop />
        <NavShare />
      </Container>
    </HeaderContainer>
    <NavMobile />
  </div>
)

const HeaderContainer = styled.header`
  width: 100%;
  padding: 10px 0;
  border-bottom: 3px solid #4e4d4d;
  position: relative;
  &[data-js="false"] {
    border-bottom: 0;
    box-shadow: 0 0 6px rgba(0, 0, 0, .4);
  }
  @media screen and (min-width: 768px) {
    padding: 20px 0;
  }
`
const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export default Header
