'use strict'
import React from 'react'
import styled from 'styled-components'

const BlogList = () => (
  <BlogListContainer>
    <Ul>
      {Array.from({ length: 10 }).map((item, index) => (
        <Li key={index}>
          <Link href='#' target='_blank'>
            <Title>
              Nem React, nem VueJs. Saúde deve ser uma prioridade
            </Title>
            <Tags>
              <SpanTag>CSS</SpanTag>
              <SpanTag>Redux</SpanTag>
              <SpanTag>React</SpanTag>
            </Tags>
          </Link>
        </Li>
      ))}
    </Ul>
  </BlogListContainer>
)

const BlogListContainer = styled.section``
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
  @media screen and (min-width: 768px) {
    width: 48%;
    margin-top: 30px;
  }
  @media screen and (min-width: 1024px) {
    width: 32%;
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
`
const Tags = styled.div`
  display: flex;
`
const SpanTag = styled.span`
  padding: 5px 10px;
  border: 1px solid #2da0c3;
  color: #2da0c3;
  border-radius: 3px;
  margin-right: 5px;
  font-size: .8em;
`

export default BlogList
