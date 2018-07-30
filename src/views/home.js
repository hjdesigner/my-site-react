'use strict'
import React from 'react'
import styled from 'styled-components'
import About from 'components/about'

const Home = () => (
  <div>
    <HomeContainer>
      <Container>
        <About />
      </Container>
    </HomeContainer>
  </div>
)

const HomeContainer = styled.div`
  width: 100%;
`
const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
`

export default Home
