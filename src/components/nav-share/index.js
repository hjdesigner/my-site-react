'use strict'
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitterSquare, faCodepen } from '@fortawesome/free-brands-svg-icons'

const NavShare = ({ status }) => (
  <Shares data-js={status.visibilityTheme}>
    <UlIcons>
      <LiIcon><Link to='#'><FontAwesomeIcon icon={faGithub} /></Link></LiIcon>
      <LiIcon><Link to='#'><FontAwesomeIcon icon={faTwitterSquare} /></Link></LiIcon>
      <LiIcon><Link to='#'><FontAwesomeIcon icon={faLinkedin} /></Link></LiIcon>
      <LiIcon><Link to='#'><FontAwesomeIcon icon={faCodepen} /></Link></LiIcon>
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

const mapStateProps = (state) => ({
  status: state.theme
})

export default connect(mapStateProps)(NavShare)
