import React from 'react'
import debounce from 'javascript-debounce'
import styled from '@emotion/styled'

import ArticleList from 'components/shared/ArticleList'
import Loading from 'components/shared/Loading'
import Error from 'components/shared/Error'

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
  componentDidMount() {
    this.props.load()
  }

  componentDidUpdate(prevProps) {
    if (this.props.region.id !== prevProps.region.id) {
      this.props.load()
    }
  }

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
        {isLoading && <Loading />}
        {!isLoading && isErrored && <Error />}
        {!isLoading && !isErrored && <ArticleList articles={articles} />}
      </Container>
    )
  }
}
