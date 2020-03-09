import React from 'react'
import styled from '@emotion/styled'

import ArticleList from 'components/shared/ArticleList'
import BackToList from 'components/shared/BackToList'
import LoadedState from 'components/shared/LoadedState'

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Category = ({
  articlesByCategory,
  region,
  isLoading,
  isErrored,
  history,
  location: { state }
}) => {
  if (!state || !state.category)
    return <h1>Sorry, no category selected... :((( </h1>
  const { category } = state
  return (
    <React.Fragment>
      <BackToList onClick={history.goBack} />
      <Container>
        <h1>{`Top ${category} news from ${region.name}`}</h1>
        <LoadedState isLoading={isLoading} isErrored={isErrored}>
          {articlesByCategory[category] && (
            <ArticleList articles={articlesByCategory[category]} />
          )}
        </LoadedState>
      </Container>
    </React.Fragment>
  )
}

export default Category
