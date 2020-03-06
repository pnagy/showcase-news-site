import { CHANGE_REGION } from './types'

export const doChangeRegion = region => dispatch =>
  dispatch({ type: CHANGE_REGION, payload: region })
