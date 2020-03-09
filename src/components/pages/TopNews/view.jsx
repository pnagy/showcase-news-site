import React from 'react'
import styled from '@emotion/styled'

import ArticleList from 'components/shared/ArticleList'
import LoadedState from 'components/shared/LoadedState'

const Container = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const TopNews = ({ articles, region, isLoading, isErrored }) => (
  <Container>
    <h1>{`Top news from ${region.name}`}</h1>
    <LoadedState isLoading={isLoading} isErrored={isErrored}>
      <ArticleList articles={articles} />
    </LoadedState>
  </Container>
)

export default TopNews
