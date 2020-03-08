import { CHANGE_REGION } from './types'

export const initialState = {
  region: 'gb'
}

const reducers = {}

reducers[CHANGE_REGION] = (state = initialState, { payload }) => {
  return { region: payload }
}

export default function reducer(state = {}, action) {
  const handler = reducers[action.type]
  if (handler) return handler(state, action)
  return state
}
