'use strict'
import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Link } from 'react-router-dom'

const NavDesktop = () => (
  <BrowserRouter>
    <Nav>
      <Ul>
        <Li><Link to='/'>About</Link></Li>
        <Li><Link to='/labs'>Labs</Link></Li>
        <Li><Link to='/blog'>Blog</Link></Li>
      </Ul>
    </Nav>
  </BrowserRouter>
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
    display: inline-block;
    color: #FFFFFF;
    font-weight: 400;
    text-decoration: none;
    font-size: 1em;
    transition: all .25s ease-in-out;
    @media screen and (min-width: 1000px) {
      &:hover {
        color: #43b2ea
      }
    }
  }
`

export default NavDesktop
