import { connect } from 'react-redux'
import {
  doFetchTopArticlesByCategories,
  selectArticlesByCategories,
  selectIsLoading,
  selectIsErrored
} from 'ducks/news'
import { selectCurrentRegion } from 'ducks/region'

import withRegionChangeListener from 'components/shared/withRegionChangeListener'

import View from './view'

const select = state => {
  return {
    articlesByCategories: selectArticlesByCategories(state),
    region: selectCurrentRegion(state),
    isLoading: selectIsLoading(state),
    isErrored: selectIsErrored(state)
  }
}

const perform = {
  load: doFetchTopArticlesByCategories
}

export default connect(select, perform)(withRegionChangeListener(View))
