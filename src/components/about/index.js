'use strict'
import React from 'react'
import styled from 'styled-components'
import ImageHenrique from './henrique-melanda.png'

const About = () => (
  <AboutContainer>
    <Image>
      <ImageSrc src={ImageHenrique} />
    </Image>
    <Title>Henrique Melanda</Title>
    <Small>Front-End Developer</Small>
    <Paragraph>Hello, i'm Henrique. Nice to meet you! <br />I am a Brazilian developer passionate about writing code for the web.<br />I always try to be in tune with what is happening in the front-end world and always willing to contribute to Open Source projects.</Paragraph>
  </AboutContainer>
)

const AboutContainer = styled.article`
  width: 100%;
  display: inline-block;
`
const Image = styled.figure`
  width: 100%;
  text-align: center;
  margin: 20px 0 0;
  padding: 0;
  @media screen and (min-width: 1000px){
    margin-top: 40px;
  }
`
const ImageSrc = styled.img`
  max-width: 125px;
  @media screen and (min-width: 1000px){
    max-width: 200px;
  }
`
const Title = styled.h1`
  width:100%;
  text-align: center;
  margin: 10px 0 5px;
  font-weight: 900;
  color: #FFF;
  font-size: 1.2em;
  text-transform: uppercase;
  @media screen and (min-width: 1000px){
    font-size: 2.5em;
    margin: 20px 0 10px;
  }
`
const Small = styled.small`
  width:100%;
  display: inline-block;
  text-align: center;
  margin: 0 0 10px;
  font-weight: 900;
  color: #FFF;
  font-size: .8em;
  @media screen and (min-width: 1000px){
    font-size: 1.3em;
    margin: 0 0 20px;
  }
`
const Paragraph = styled.p`
  width:100%;
  text-align: center;
  margin: 0 0 20px;
  font-weight: 400;
  color: #FFF;
  font-size: .9em;
  line-height: 21px;
  @media screen and (min-width: 1000px){
    max-width: 1000px;
    font-size: 1.3em;
    line-height: 30px;
    margin: 0 auto;
  }
`
export default About
