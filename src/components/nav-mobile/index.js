'use strict'
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'
import { toggleNav } from 'reducers/nav-mobile/action-creators'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitterSquare, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { faBookOpen, faFlask, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

const NavMobile = ({ visibility, handleClick }) => (
  <NavMobileContainer data-status={visibility.visibilityNav}>
    <Ul>
      <Li><NavLink to='/' exact onClick={handleClick(visibility)} ><FontAwesomeIcon icon={faUserAstronaut} />About</NavLink></Li>
      <Li><NavLink to='/labs' onClick={handleClick(visibility)} ><FontAwesomeIcon icon={faFlask} />Labs</NavLink></Li>
      <Li><NavLink to='/blog' onClick={handleClick(visibility)} ><FontAwesomeIcon icon={faBookOpen} />Blog</NavLink></Li>
    </Ul>
    <UlIcons>
      <LiIcon><Link to='#'><FontAwesomeIcon icon={faGithub} /></Link></LiIcon>
      <LiIcon><Link to='#'><FontAwesomeIcon icon={faTwitterSquare} /></Link></LiIcon>
      <LiIcon><Link to='#'><FontAwesomeIcon icon={faLinkedin} /></Link></LiIcon>
      <LiIcon><Link to='#'><FontAwesomeIcon icon={faCodepen} /></Link></LiIcon>
    </UlIcons>
  </NavMobileContainer>
)

const NavMobileContainer = styled.nav`
  width: 270px;
  height: calc(100% - 43px);
  position: absolute;
  top: 43px;
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
    &.active {
      color: #43b2ea
    }
    svg {
      margin-right: 10px;
    }
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

const mapDispatchToProps = (dispatch) => ({
  handleClick: (status) => () => {
    dispatch(toggleNav(!status.visibilityNav))
  }
})

export default connect(mapStateProps, mapDispatchToProps)(NavMobile)
