'use strict'
import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faFlask, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

const NavDesktop = () => (
  <Nav>
    <Ul>
      <Li><NavLink to='/' exact ><FontAwesomeIcon icon={faUserAstronaut} />About</NavLink></Li>
      <Li><NavLink to='/labs'><FontAwesomeIcon icon={faFlask} />Labs</NavLink></Li>
      <Li><NavLink to='/blog'><FontAwesomeIcon icon={faBookOpen} />Blog</NavLink></Li>
    </Ul>
  </Nav>
)

const Nav = styled.nav`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`
const Ul = styled.ul`
  width: 100%;
  margin: 0 0 0 0;
  padding: 0;
  list-style: none;
`
const Li = styled.li`
  width: auto;
  height: auto;
  display: inline-block;
  margin: 0 20px 0 20px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  a {
    width: 100%;
    display: flex;
    color: #FFFFFF;
    font-weight: 400;
    text-decoration: none;
    font-size: 1.1em;
    transition: all .25s ease-in-out;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 1.5em;
      margin-bottom: 5px;
    }
    &.active {
      color: #43b2ea;
    }
    @media screen and (min-width: 1000px) {
      &:hover {
        color: #43b2ea
      }
    }
  }
`

export default NavDesktop
