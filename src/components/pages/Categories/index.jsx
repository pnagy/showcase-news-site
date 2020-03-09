import { connect } from 'react-redux'
import {
  doFetchArticlesByCategory,
  //   selectArticlesByCategory,
  selectIsLoading,
  selectIsErrored
} from 'ducks/news'
import { selectCurrentRegion } from 'ducks/region'

import View from './view'

const select = state => {
  return {
    // articles: selectArticlesByCategory(state),
    region: selectCurrentRegion(state),
    isLoading: selectIsLoading(state),
    isErrored: selectIsErrored(state)
  }
}

const perform = {
  load: doFetchArticlesByCategory
}

export default connect(select, perform)(View)
