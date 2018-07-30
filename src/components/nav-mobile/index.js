'use strict'
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { BrowserRouter, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitterSquare, faCodepen } from '@fortawesome/free-brands-svg-icons'
import IconNavClose from 'components/icon-nav-close'

const NavMobile = ({ visibility }) => (
  <BrowserRouter>
    <NavMobileContainer data-status={visibility.visibilityNav}>
      <IconNavClose />
      <Ul>
        <Li><Link to='/'>About</Link></Li>
        <Li><Link to='/labs'>Labs</Link></Li>
        <Li><Link to='/blog'>Blog</Link></Li>
      </Ul>
      <UlIcons>
        <LiIcon><Link to='#'><FontAwesomeIcon icon={faGithub} /></Link></LiIcon>
        <LiIcon><Link to='#'><FontAwesomeIcon icon={faTwitterSquare} /></Link></LiIcon>
        <LiIcon><Link to='#'><FontAwesomeIcon icon={faLinkedin} /></Link></LiIcon>
        <LiIcon><Link to='#'><FontAwesomeIcon icon={faCodepen} /></Link></LiIcon>
      </UlIcons>
    </NavMobileContainer>
  </BrowserRouter>
)

const NavMobileContainer = styled.nav`
  width: 270px;
  height: calc(100% - 44px);
  position: absolute;
  top: 0;
  left: -330px;
  background-color: #1f1f1f;
  transition: all .25s ease-out;
  &[data-status='true'] {
    transition: all .25s ease-in;
    transform: translateX(330px);
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`
const Ul = styled.ul`
  width: 100%;
  margin: 20px 0 0 0;
  padding: 0;
  list-style: none;
`
const UlIcons = styled.ul`
  width: 100%;
  margin: 20px 0 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: flex-end;
`
const Li = styled.li`
  width: 100%;
  height: auto;
  padding: 15px 10px;
  border-bottom: 2px solid #7d7c7c;
  a {
    width: 100%;
    display: inline-block;
    color: #FFFFFF;
    font-weight: 400;
    text-decoration: none;
    text-transform: uppercase;
    font-size: .9em;
  }
`
const LiIcon = styled.li`
  margin: 0 10px;
  a {
    color: #FFF;
  }
  svg {
    font-size: 2em;
  }
`
const mapStateProps = (state) => ({
  visibility: state.navMobile
})

export default connect(mapStateProps)(NavMobile)
