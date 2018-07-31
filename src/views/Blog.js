'use strict'
import React from 'react'
import styled from 'styled-components'
import BlogList from 'components/blog-list'

const Blog = () => (
  <BlogContainer>
    <Container>
      <BlogList />
    </Container>
  </BlogContainer>
)

const BlogContainer = styled.main`
  width: 100%;
`
const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
`
export default Blog
