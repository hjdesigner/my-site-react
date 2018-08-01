'use strict'
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const LabList = ({ list, status }) => (
  <LabListContainer>
    <Ul>
      {list.map((item) => (
        <Li key={item.id} data-js={status.visibilityTheme}>
          <Link href={item.link} target='_blank'>
            <Title>
              {item.title}
            </Title>
            <Figure>
              <Image src={item.image} />
            </Figure>
          </Link>
        </Li>
      ))}
    </Ul>
  </LabListContainer>
)

const LabListContainer = styled.section``
const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`
const Li = styled.li`
  width: 100%;
  background-color: #2b2b2b;
  box-sizing: border-box;
  padding: 10px;
  margin-top: 20px;
  &[data-js="false"] {
    background-color: #FFF;
    border: 1px solid #eee;
    h2 {
      color: #000;
    }
  }
  @media screen and (min-width: 768px) {
    width: 48%;
    margin-top: 30px;
  }
  @media screen and (min-width: 1024px) {
    width: 32%;
    padding: 20px;
    transition: all .25s ease-in-out;
    &:hover {
      background-color: #000;
    }
  }
`
const Link = styled.a`
  text-decoration: none;
`
const Title = styled.h2`
  margin: 0 0 10px 0;
  color: #FFF;
  font-size: 1em;
  font-weight: 600;
  @media screen and (min-width: 1024px) {
    font-size: 1.2em;
    margin: 0 0 20px 0;
  }
`
const Figure = styled.figure`
  padding: 0;
  margin: 0;
`
const Image = styled.img`
  width: 100%;
`

const mapStateProps = (state) => ({
  list: state.labList,
  status: state.theme
})

export default connect(mapStateProps)(LabList)
