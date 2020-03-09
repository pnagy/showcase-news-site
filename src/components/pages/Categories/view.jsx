import React from 'react'
import styled from '@emotion/styled'

import CategoryPreview from 'components/shared/CategoryPreview'
import LoadedState from 'components/shared/LoadedState'

const Container = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Categories = ({ articlesByCategories, region, isLoading, isErrored }) => (
  <Container>
    <h1>{`Top 5 news by categories from ${region.name}`}</h1>
    <LoadedState isLoading={isLoading} isErrored={isErrored}>
      {Object.keys(articlesByCategories).map(category => (
        <CategoryPreview
          key={category}
          category={category}
          articles={articlesByCategories[category] || []}
        />
      ))}
    </LoadedState>
  </Container>
)

export default Categories
