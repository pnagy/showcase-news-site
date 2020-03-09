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

export default class TopNews extends React.Component {
  componentDidMount() {
    this.props.load()
  }

  componentDidUpdate(prevProps) {
    if (this.props.region.id !== prevProps.region.id) {
      this.props.load()
    }
  }

  render() {
    const {
      articlesByCategory,
      region,
      isLoading,
      isErrored,
      history,
      location: {
        state: { category }
      }
    } = this.props
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
}
