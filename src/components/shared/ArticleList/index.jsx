import React from 'react'
import styled from '@emotion/styled'

import ArticlePreview from 'components/shared/ArticlePreview'

const Container = styled('div')`
  display: flex;
  flex-wrap: wrap;
`

const ArticleList = ({ articles }) => (
  <Container>
    {articles.map(article => (
      <ArticlePreview {...article} />
    ))}
  </Container>
)

export default ArticleList
