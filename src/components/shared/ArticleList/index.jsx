import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

import ArticlePreview from 'components/shared/ArticlePreview'

const Container = styled('div')`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const ArticleList = ({ articles }) => (
  <Container>
    {articles.map(article => (
      <ArticlePreview article={article} key={article.title} />
    ))}
  </Container>
)

export default ArticleList
