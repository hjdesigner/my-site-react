'use strict'
import React from 'react'
import styled from 'styled-components'

const PageNotFound = () => (
  <AboutContainer>
    <Title>Page Nout Found</Title>
  </AboutContainer>
)

const AboutContainer = styled.article`
  width: 100%;
  display: inline-block;
`
const Title = styled.h1`
  width:100%;
  text-align: center;
  margin: 10px 0 5px;
  font-weight: 900;
  color: #FFF;
  font-size: 1.2em;
  text-transform: uppercase;
  &[data-js="false"] {
   color: #000;
  }
  @media screen and (min-width: 1000px){
    font-size: 2.5em;
    margin: 20px 0 10px;
  }
`

export default PageNotFound
