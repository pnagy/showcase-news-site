import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

import ArticlePreview from 'components/shared/ArticlePreview'

const Container = styled('div')`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  a:hover,
  a:visited,
  a:link,
  a:active {
    text-decoration: none;
  }
`

const ArticleList = ({ articles }) => (
  <Container>
    {articles.map(article => (
      <Link to={{ pathname: '/article', state: { article } }}>
        <ArticlePreview {...article} key={article.title} />
      </Link>
    ))}
  </Container>
)

export default ArticleList
