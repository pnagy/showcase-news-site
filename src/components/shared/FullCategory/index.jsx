import React from 'react'
import styled from '@emotion/styled'

import ArticleList from 'components/shared/ArticleList'

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
`

const Title = styled('div')`
  font-size: 32px;
  font-weight: bolder;
  margin-bottom: 24px;
`

const FullCategory = ({ category, articles }) => (
  <Container>
    <Title>{category}</Title>
    <ArticleList articles={articles} />
  </Container>
)

export default FullCategory
