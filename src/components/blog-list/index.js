'use strict'
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const BlogList = ({ list, status }) => (
  <BlogListContainer>
    <Ul>
      {list.map((item) => (
        <Li key={item.id} data-js={status.visibilityTheme}>
          <Link href={item.link} target='_blank'>
            <Title>
              {item.title}
            </Title>
            <Tags>
              {item.tags.map((tags) => (
                <SpanTag key={tags.id}>{tags.title}</SpanTag>
              ))}
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
const Tags = styled.div`
  display: flex;
`
const SpanTag = styled.span`
  padding: 5px 10px;
  border: 1px solid #d6ba32;
  color: #d6ba32;
  border-radius: 3px;
  margin-right: 5px;
  font-size: .8em;
`

const mapStateProps = (state) => ({
  list: state.blogList,
  status: state.theme
})

export default connect(mapStateProps)(BlogList)
