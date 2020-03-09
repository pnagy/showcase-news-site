import { connect } from 'react-redux'
import {
  doFetchArticlesByCategory,
  selectArticlesByCategories,
  selectIsLoading,
  selectIsErrored
} from 'ducks/news'
import { selectCurrentRegion } from 'ducks/region'

import View from './view'
import { withRouter } from 'react-router-dom'

const select = state => {
  return {
    articlesByCategory: selectArticlesByCategories(state),
    region: selectCurrentRegion(state),
    isLoading: selectIsLoading(state),
    isErrored: selectIsErrored(state)
  }
}

const perform = (dispatch, ownProps) => {
  const {
    location: {
      state: { category }
    }
  } = ownProps
  return {
    load: () => dispatch(doFetchArticlesByCategory(category))
  }
}

export default withRouter(connect(select, perform)(View))
