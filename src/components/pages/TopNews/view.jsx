import React from 'react'
import styled from '@emotion/styled'

import ArticleList from 'components/shared/ArticleList'
import Loading from 'components/shared/Loading'

const Container = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export default class TopNews extends React.Component {
  componentDidMount() {
    this.props.fetchArticles()
  }

  componentDidUpdate(prevProps) {
    if (this.props.region.id !== prevProps.region.id) {
      this.props.fetchArticles()
    }
  }

  render() {
    const { articles, region, isLoading } = this.props
    return (
      <Container>
        <h2>{`Top news from ${region.name}`}</h2>
        {isLoading && <Loading />}
        {!isLoading && <ArticleList articles={articles} />}
      </Container>
    )
  }
}
