import { connect } from 'react-redux'
import { doFetchArticles, selectArticles, selectIsLoading } from 'ducks/news'
import { selectCurrentRegion } from 'ducks/region'

import View from './view'

const select = state => {
  return {
    articles: selectArticles(state),
    region: selectCurrentRegion(state),
    isLoading: selectIsLoading(state)
  }
}

const perform = {
  fetchArticles: doFetchArticles
}

export default connect(select, perform)(View)
