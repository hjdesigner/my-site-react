'use strict'
import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
  <FooterContainer>
    <Paragraph>
      Made with React + Redux and with lots of <FontAwesomeIcon icon={faHeart} />
    </Paragraph>
  </FooterContainer>
)

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #000000;
  margin-top: 20px;
  padding: 10px 0;
  @media screen and (min-width: 1000px){
    margin-top: 40px;
  }
`
const Paragraph = styled.p`
  text-align: center;
  font-size: .8em;
  color: #FFF;
  svg {
    color: red;
    margin-left: 5px;
  }
`

export default Footer
