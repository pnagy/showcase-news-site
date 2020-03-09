import React from 'react'
import styled from '@emotion/styled'

import ArticleList from 'components/shared/ArticleList'
import LoadedState from 'components/shared/LoadedState'

const Container = styled('div')`
  display: flex;
  align-items: center;
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
    const { articles, region, isLoading, isErrored } = this.props
    return (
      <Container>
        <h1>{`Top news from ${region.name}`}</h1>
        <LoadedState isLoading={isLoading} isErrored={isErrored}>
          <ArticleList articles={articles} />
        </LoadedState>
      </Container>
    )
  }
}
