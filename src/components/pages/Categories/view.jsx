import React from 'react'
import styled from '@emotion/styled'

import ArticleList from 'components/shared/ArticleList'
import Loading from 'components/shared/Loading'
import Error from 'components/shared/Error'

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
    const { articles = [], region, isLoading, isErrored } = this.props
    return (
      <Container>
        <h1>{`Top 5 news by categories from ${region.name}`}</h1>
        {isLoading && <Loading />}
        {!isLoading && isErrored && <Error />}
        {!isLoading &&
          !isErrored &&
          Object.keys(articles).map(category => (
            <React.Fragment>
              <h3>{category}</h3>
              <ArticleList articles={articles.category}></ArticleList>
            </React.Fragment>
          ))}
      </Container>
    )
  }
}
