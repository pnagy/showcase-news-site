import { connect } from 'react-redux'
import {
  doFetchArticles,
  doChangeSearchTerm,
  selectArticles,
  selectSearchTerm,
  selectIsLoading
} from 'ducks/news'
import { selectCurrentRegion } from 'ducks/region'

import View from './view'

const select = state => {
  return {
    articles: selectArticles(state),
    region: selectCurrentRegion(state),
    searchTerm: selectSearchTerm(state),
    isLoading: selectIsLoading(state)
  }
}

const perform = {
  fetchArticles: doFetchArticles,
  onSearchChange: doChangeSearchTerm
}

export default connect(select, perform)(View)
