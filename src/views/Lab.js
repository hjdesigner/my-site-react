'use strict'
import React from 'react'
import styled from 'styled-components'
import LabList from 'components/lab-list'

const Lab = () => (
  <LabContainer>
    <Container>
      <LabList />
    </Container>
  </LabContainer>
)

const LabContainer = styled.main`
  width: 100%;
`
const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
`
export default Lab
