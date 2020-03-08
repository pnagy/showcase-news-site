import { connect } from 'react-redux'
import {
  doChangeRegion,
  selectCurrentRegionId,
  selectRegions
} from 'ducks/region'

import View from './view'

const select = state => {
  return {
    currentRegion: selectCurrentRegionId(state),
    regions: selectRegions(state)
  }
}

const perform = dispatch => {
  return {
    onRegionChange: region => () => dispatch(doChangeRegion(region))
  }
}

export default connect(select, perform)(View)
