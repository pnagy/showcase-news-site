import React from 'react'
import debounce from 'javascript-debounce'
import styled from '@emotion/styled'

import ArticleList from 'components/shared/ArticleList'
import LoadedState from 'components/shared/LoadedState'

const SearchBox = styled('input')`
  width: 400px;
  font-size: 24px;
  margin-top: 24px;
  margin-bottom: 24px;
  padding: 6px;
`

const Container = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export default class Search extends React.Component {
  componentWillUnmount() {
    this.props.onSearchChange('')
  }

  handleSearchChange = e => {
    this.props.onSearchChange(e.target.value)
    this.handleRefetch()
  }

  handleRefetch = debounce(() => this.props.load(), 500)

  render() {
    const { articles, searchTerm, isLoading, isErrored } = this.props
    return (
      <Container>
        <SearchBox
          type="text"
          value={searchTerm}
          onChange={this.handleSearchChange}
          placeholder="Search..."
        />
        <LoadedState isLoading={isLoading} isErrored={isErrored}>
          {articles.length === 0 ? (
            <h2>Sorry, no articles for this search.... :(( </h2>
          ) : (
            <ArticleList articles={articles} />
          )}
        </LoadedState>
      </Container>
    )
  }
}
