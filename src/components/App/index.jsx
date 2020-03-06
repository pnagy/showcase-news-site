import { connect } from 'react-redux'
import {
  doChangeRegion,
  selectCurrentRegion,
  selectRegions
} from 'ducks/region'
// import { doFetchTopArticles, selectTopArticles } from 'ducks/news'

import View from './view'

const select = state => {
  return {
    currentRegion: selectCurrentRegion(state),
    regions: selectRegions(state)
  }
}

const perform = dispatch => {
  return {
    onRegionChange: region => () => dispatch(doChangeRegion(region))
  }
}

export default connect(select, perform)(View)
