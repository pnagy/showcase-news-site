import React from 'react'
import styled from '@emotion/styled'

import ArticleList from 'components/shared/ArticleList'
import BackToList from 'components/shared/BackToList'
import Loading from 'components/shared/Loading'
import Error from 'components/shared/Error'

const Container = styled('div')`
  display: flex;
  flex-direction: column;
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
      <Container>
        <BackToList onClick={history.goBack} />
        <h1>{`Top ${category} news from ${region.name}`}</h1>
        {isLoading && <Loading />}
        {!isLoading && isErrored && <Error />}
        {!isLoading && !isErrored && articlesByCategory[category] && (
          <ArticleList articles={articlesByCategory[category]} />
        )}
      </Container>
    )
  }
}
