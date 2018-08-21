'use strict'
import React from 'react'
import styled from 'styled-components'
import PageNotFound from 'components/page-not-found'

const PageNot = () => (
  <div>
    <HomeContainer>
      <Container>
        <PageNotFound />
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

export default PageNot
