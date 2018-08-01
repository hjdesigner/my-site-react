'use strict'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitterSquare, faCodepen } from '@fortawesome/free-brands-svg-icons'

const NavShare = () => (
  <Shares>
    <UlIcons>
      <LiIcon><a href='https://www.github.com/hjdesigner' target="_blank"><FontAwesomeIcon icon={faGithub} /></a></LiIcon>
      <LiIcon><a href='https://www.twitter.com/coisadedev' target="_blank"><FontAwesomeIcon icon={faTwitterSquare} /></a></LiIcon>
      <LiIcon><a href='https://br.linkedin.com/in/coisadedev' target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></LiIcon>
      <LiIcon><a href='https://codepen.io/hjdesigner/' target="_blank"><FontAwesomeIcon icon={faCodepen} /></a></LiIcon>
    </UlIcons>
  </Shares>
)

const Shares = styled.nav`
  display: none;
  &[data-js="false"] {
    a {
      color: #2da0c3;
    }
  }
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`
const UlIcons = styled.ul`
  width: 100%;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: flex-end;
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
export default NavShare
